import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildAviasalesUrl } from '../../utils/buildAviasalesUrl';

const ARTICLE_MAP = {
  ch: {
    name: 'Switzerland',
    sub: '瑞士',
    emoji: '🏔️',
    iataCode: 'ZRH',
    articleUrl: '/destinations/switzerland',
  },
  is: {
    name: 'Iceland',
    sub: '冰島',
    emoji: '🌋',
    iataCode: 'KEF',
    articleUrl: '/destinations/iceland',
  },
  tw: {
    name: 'Taiwan',
    sub: '台灣',
    emoji: '🏝️',
    iataCode: 'TPE',
    articleUrl: '/destinations/taiwan',
  },
};

// 完整版 IATA_MAP（補齊所有常見國家）
const IATA_MAP = {
  ad: 'AND',
  ae: 'DXB',
  af: 'KBL',
  ag: 'ANU',
  al: 'TIA',
  am: 'EVN',
  ao: 'LAD',
  ar: 'EZE',
  at: 'VIE',
  au: 'SYD',
  az: 'GYD',
  ba: 'SJJ',
  bb: 'BGI',
  bd: 'DAC',
  be: 'BRU',
  bf: 'OUA',
  bg: 'SOF',
  bh: 'BAH',
  bi: 'BJM',
  bj: 'COO',
  bn: 'BWN',
  bo: 'LPB',
  br: 'GRU',
  bs: 'NAS',
  bt: 'PBH',
  bw: 'GBE',
  by: 'MSQ',
  bz: 'BZE',
  ca: 'YYZ',
  cd: 'FIH',
  cf: 'BGF',
  cg: 'BZV',
  ch: 'ZRH',
  ci: 'ABJ',
  cl: 'SCL',
  cm: 'DLA',
  cn: 'PEK',
  co: 'BOG',
  cr: 'SJO',
  cu: 'HAV',
  cv: 'RAI',
  cy: 'LCA',
  cz: 'PRG',
  de: 'BER',
  dj: 'JIB',
  dk: 'CPH',
  dm: 'DOM',
  do: 'SDQ',
  dz: 'ALG',
  ec: 'UIO',
  ee: 'TLL',
  eg: 'CAI',
  er: 'ASM',
  es: 'MAD',
  et: 'ADD',
  fi: 'HEL',
  fj: 'SUV',
  fr: 'CDG',
  ga: 'LBV',
  gb: 'LHR',
  gd: 'GND',
  ge: 'TBS',
  gh: 'ACC',
  gm: 'BJL',
  gn: 'CKY',
  gq: 'SSG',
  gr: 'ATH',
  gt: 'GUA',
  gw: 'OXB',
  gy: 'GEO',
  hn: 'TGU',
  hr: 'ZAG',
  ht: 'PAP',
  hu: 'BUD',
  id: 'CGK',
  ie: 'DUB',
  il: 'TLV',
  in: 'DEL',
  iq: 'BGW',
  ir: 'IKA',
  is: 'KEF',
  it: 'ROM',
  jm: 'KIN',
  jo: 'AMM',
  jp: 'TYO',
  ke: 'NBO',
  kg: 'FRU',
  kh: 'PNH',
  ki: 'TRW',
  km: 'HAH',
  kn: 'SKB',
  kp: 'FNJ',
  kr: 'SEL',
  kw: 'KWI',
  kz: 'ALA',
  la: 'VTE',
  lb: 'BEY',
  lc: 'SLU',
  li: 'ZRH',
  lk: 'CMB',
  lr: 'ROB',
  ls: 'MSU',
  lt: 'VNO',
  lu: 'LUX',
  lv: 'RIX',
  ly: 'TIP',
  ma: 'CMN',
  mc: 'NCE',
  md: 'KIV',
  me: 'TGD',
  mg: 'TNR',
  mh: 'MAJ',
  mk: 'SKP',
  ml: 'BKO',
  mm: 'RGN',
  mn: 'ULN',
  mr: 'NKC',
  mt: 'MLA',
  mu: 'MRU',
  mv: 'MLE',
  mw: 'LLW',
  mx: 'MEX',
  my: 'KUL',
  mz: 'MPM',
  na: 'WDH',
  ne: 'NIM',
  ng: 'LOS',
  ni: 'MGA',
  nl: 'AMS',
  no: 'OSL',
  np: 'KTM',
  nr: 'INU',
  nz: 'AKL',
  om: 'MCT',
  pa: 'PTY',
  pe: 'LIM',
  pg: 'POM',
  ph: 'MNL',
  pk: 'KHI',
  pl: 'WAW',
  pt: 'LIS',
  pw: 'ROR',
  py: 'ASU',
  qa: 'DOH',
  ro: 'OTP',
  rs: 'BEG',
  ru: 'SVO',
  rw: 'KGL',
  sa: 'RUH',
  sb: 'HIR',
  sc: 'SEZ',
  sd: 'KRT',
  se: 'ARN',
  sg: 'SIN',
  si: 'LJU',
  sk: 'BTS',
  sl: 'FNA',
  sm: 'RMI',
  sn: 'DKR',
  so: 'MGQ',
  sr: 'PBM',
  ss: 'JUB',
  sv: 'SAL',
  sy: 'DAM',
  sz: 'MTS',
  td: 'NDJ',
  tg: 'LFW',
  th: 'BKK',
  tj: 'DYU',
  tl: 'DIL',
  tm: 'ASB',
  tn: 'TUN',
  to: 'TBU',
  tr: 'IST',
  tt: 'POS',
  tv: 'FUN',
  tw: 'TPE',
  tz: 'DAR',
  ua: 'KBP',
  ug: 'EBB',
  us: 'NYC',
  uy: 'MVD',
  uz: 'TAS',
  va: 'FCO',
  vc: 'SVD',
  ve: 'CCS',
  vu: 'VLI',
  vn: 'HAN',
  ws: 'APW',
  ye: 'SAH',
  za: 'JNB',
  zm: 'LUN',
  zw: 'HRE',
};

const SVG_URL =
  'https://cdn.rawgit.com/flekschas/simple-world-map/a36dece5/world-map.svg';

function WorldMap({ originIata = 'TPE' }) {
  const [tooltip, setTooltip] = useState(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleClickRef = useRef(null);
  handleClickRef.current = (id) => {
    const article = ARTICLE_MAP[id];
    if (article?.articleUrl) {
      navigate(article.articleUrl);
      return;
    }
    const iata = article?.iataCode || IATA_MAP[id];
    if (!iata) return;
    const url = buildAviasalesUrl({ origin: originIata, destination: iata });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    let isMounted = true;

    fetch(SVG_URL)
      .then((r) => r.text())
      .then((svgText) => {
        if (!isMounted || !containerRef.current) return;

        containerRef.current.innerHTML = svgText;
        const svg = containerRef.current.querySelector('svg');
        if (!svg) return;

        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.style.display = 'block';

        const paths = svg.querySelectorAll('path[id]');

        // debug：印出還沒有 IATA 的 id（確認都補齊了）
        const missingIds = [...paths]
          .map((p) => p.getAttribute('id')?.toLowerCase())
          .filter((id) => id && !(id in IATA_MAP) && !(id in ARTICLE_MAP));
        if (missingIds.length > 0) {
          console.log('仍缺少 IATA 的 id:', JSON.stringify(missingIds));
        }

        paths.forEach((path) => {
          const id = path.getAttribute('id')?.toLowerCase();
          const isHighlight = id in ARTICLE_MAP;
          const hasIata = id in IATA_MAP;
          const isClickable = isHighlight || hasIata;

          path.style.fill = isHighlight
            ? '#4a7c59'
            : hasIata
              ? '#b0c4d8'
              : '#d6cfc4';
          path.style.stroke = '#ffffff';
          path.style.strokeWidth = '0.5';
          path.style.transition = 'fill 0.2s';
          path.style.cursor = isClickable ? 'pointer' : 'default';
          path.style.outline = 'none';

          if (!isClickable) return;

          const originalFill = isHighlight ? '#4a7c59' : '#b0c4d8';
          const hoverFill = isHighlight ? '#2d5a3d' : '#8aafc8';
          const destInfo = ARTICLE_MAP[id];

          path.addEventListener('mouseenter', (e) => {
            path.style.fill = hoverFill;
            setTooltip({
              name: destInfo?.name || id.toUpperCase(),
              sub: destInfo?.sub || '',
              emoji: destInfo?.emoji || '✈️',
              hasArticle: !!destInfo?.articleUrl,
              x: e.clientX,
              y: e.clientY,
            });
          });
          path.addEventListener('mousemove', (e) => {
            setTooltip((prev) =>
              prev ? { ...prev, x: e.clientX, y: e.clientY } : null,
            );
          });
          path.addEventListener('mouseleave', () => {
            path.style.fill = originalFill;
            setTooltip(null);
          });
          path.addEventListener('click', () => handleClickRef.current(id));
        });
      })
      .catch(() => {
        if (containerRef.current) {
          containerRef.current.innerHTML =
            '<p style="color:#999;text-align:center;padding:2rem">地圖載入失敗，請重新整理</p>';
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className='wm-wrapper'>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      {tooltip && (
        <div
          className='wm-tooltip'
          style={{ left: tooltip.x + 14, top: tooltip.y - 52 }}
        >
          <span>{tooltip.emoji}</span>
          <span>{tooltip.name}</span>
          {tooltip.sub && <span className='wm-tooltip-sub'>{tooltip.sub}</span>}
          <span className='wm-tooltip-hint'>
            {tooltip.hasArticle ? '📖 查看文章' : '✈️ 搜尋機票'}
          </span>
        </div>
      )}

      <div className='wm-legend'>
        <span className='wm-legend-item'>
          <span className='wm-legend-dot' style={{ background: '#4a7c59' }} />
          有站內文章
        </span>
        <span className='wm-legend-item'>
          <span className='wm-legend-dot' style={{ background: '#b0c4d8' }} />
          點擊搜尋機票
        </span>
      </div>
    </div>
  );
}

export default WorldMap;
