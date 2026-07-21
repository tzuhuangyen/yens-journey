// src/components/WorldMap.jsx
import React, { useEffect, useRef, useState } from 'react';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';

// ── 有站內文章的國家 ──────────────────────────────────────────
const ARTICLE_MAP = {
  ch: '/destinations/switzerland',
  is: '/destinations/iceland',
  jp: '/destinations/japan',
  nz: '/destinations/new-zealand',
  pt: '/destinations/portugal',
  // 繼續補充...
};

// ── 每個國家的主要機場 IATA ───────────────────────────────────
const IATA_MAP = {
  af: 'KBL',
  al: 'TIA',
  dz: 'ALG',
  ad: 'BCN',
  ao: 'LAD',
  ag: 'ANU',
  ar: 'EZE',
  am: 'EVN',
  au: 'SYD',
  at: 'VIE',
  az: 'GYD',
  bs: 'NAS',
  bh: 'BAH',
  bd: 'DAC',
  bb: 'BGI',
  by: 'MSQ',
  be: 'BRU',
  bz: 'BZE',
  bj: 'COO',
  bt: 'PBH',
  bo: 'VVI',
  ba: 'SJJ',
  bw: 'GBE',
  br: 'GRU',
  bn: 'BWN',
  bg: 'SOF',
  bf: 'OUA',
  bi: 'BJM',
  cv: 'RAI',
  kh: 'PNH',
  cm: 'NSI',
  ca: 'YYZ',
  cf: 'BGF',
  td: 'NDJ',
  cl: 'SCL',
  cn: 'PEK',
  co: 'BOG',
  km: 'HAH',
  cd: 'FIH',
  cg: 'BZV',
  cr: 'SJO',
  hr: 'ZAG',
  cu: 'HAV',
  cy: 'LCA',
  cz: 'PRG',
  dk: 'CPH',
  dj: 'JIB',
  dm: 'DOM',
  do: 'SDQ',
  ec: 'UIO',
  eg: 'CAI',
  sv: 'SAL',
  gq: 'SSG',
  er: 'ASM',
  ee: 'TLL',
  sz: 'MTS',
  et: 'ADD',
  fj: 'SUV',
  fi: 'HEL',
  fr: 'CDG',
  ga: 'LBV',
  gm: 'BJL',
  ge: 'TBS',
  de: 'FRA',
  gh: 'ACC',
  gr: 'ATH',
  gd: 'GND',
  gt: 'GUA',
  gn: 'CKY',
  gw: 'OXB',
  gy: 'GEO',
  ht: 'PAP',
  hn: 'TGU',
  hu: 'BUD',
  is: 'KEF',
  in: 'DEL',
  id: 'CGK',
  ir: 'IKA',
  iq: 'BGW',
  ie: 'DUB',
  il: 'TLV',
  it: 'FCO',
  jm: 'KIN',
  jp: 'NRT',
  jo: 'AMM',
  kz: 'ALA',
  ke: 'NBO',
  ki: 'TRW',
  kw: 'KWI',
  kg: 'FRU',
  la: 'VTE',
  lv: 'RIX',
  lb: 'BEY',
  ls: 'MSU',
  lr: 'ROB',
  ly: 'TIP',
  li: 'ZRH',
  lt: 'VNO',
  lu: 'LUX',
  mg: 'TNR',
  mw: 'LLW',
  my: 'KUL',
  mv: 'MLE',
  ml: 'BKO',
  mt: 'MLA',
  mh: 'MAJ',
  mr: 'NKC',
  mu: 'MRU',
  mx: 'MEX',
  fm: 'PNI',
  md: 'KIV',
  mc: 'NCE',
  mn: 'ULN',
  me: 'TGD',
  ma: 'CMN',
  mz: 'MPM',
  mm: 'RGN',
  na: 'WDH',
  nr: 'INU',
  np: 'KTM',
  nl: 'AMS',
  nc: 'NOU',
  nz: 'AKL',
  ni: 'MGA',
  ne: 'NIM',
  ng: 'LOS',
  no: 'OSL',
  om: 'MCT',
  pk: 'KHI',
  pw: 'ROR',
  pa: 'PTY',
  pg: 'POM',
  py: 'ASU',
  pe: 'LIM',
  ph: 'MNL',
  pl: 'WAW',
  pt: 'LIS',
  pr: 'SJU',
  qa: 'DOH',
  ro: 'OTP',
  ru: 'SVO',
  rw: 'KGL',
  kn: 'SKB',
  lc: 'UVF',
  vc: 'SVD',
  ws: 'APW',
  sm: 'FCO',
  st: 'TMS',
  sa: 'RUH',
  sn: 'DKR',
  rs: 'BEG',
  sc: 'SEZ',
  sl: 'FNA',
  sg: 'SIN',
  sk: 'BTS',
  si: 'LJU',
  sb: 'HIR',
  so: 'MGQ',
  za: 'JNB',
  ss: 'JUB',
  es: 'MAD',
  lk: 'CMB',
  sd: 'KRT',
  sr: 'PBM',
  se: 'ARN',
  ch: 'ZRH',
  sy: 'DAM',
  tw: 'TPE',
  tj: 'DYU',
  tz: 'DAR',
  th: 'BKK',
  tl: 'DIL',
  tg: 'LFW',
  to: 'TBU',
  tt: 'POS',
  tn: 'TUN',
  tr: 'IST',
  tm: 'ASB',
  tv: 'FUN',
  ug: 'EBB',
  ua: 'KBP',
  ae: 'DXB',
  gb: 'LHR',
  us: 'JFK',
  uy: 'MVD',
  uz: 'TAS',
  vu: 'VLI',
  ve: 'CCS',
  vn: 'SGN',
  ye: 'SAH',
  zm: 'LUN',
  zw: 'HRE',
  xk: 'PRN',
};

// ── 國家名稱（中文顯示用）────────────────────────────────────
const NAME_MAP = {
  af: '阿富汗',
  al: '阿爾巴尼亞',
  dz: '阿爾及利亞',
  ao: '安哥拉',
  ar: '阿根廷',
  am: '亞美尼亞',
  au: '澳洲',
  at: '奧地利',
  az: '亞塞拜然',
  bh: '巴林',
  bd: '孟加拉',
  by: '白俄羅斯',
  be: '比利時',
  bz: '貝里斯',
  bj: '貝南',
  bt: '不丹',
  bo: '玻利維亞',
  ba: '波士尼亞',
  bw: '波札那',
  br: '巴西',
  bn: '汶萊',
  bg: '保加利亞',
  bf: '布吉納法索',
  bi: '蒲隆地',
  kh: '柬埔寨',
  cm: '喀麥隆',
  ca: '加拿大',
  cf: '中非',
  td: '查德',
  cl: '智利',
  cn: '中國',
  co: '哥倫比亞',
  cd: '剛果民主共和國',
  cg: '剛果',
  cr: '哥斯大黎加',
  hr: '克羅埃西亞',
  cu: '古巴',
  cy: '賽普勒斯',
  cz: '捷克',
  dk: '丹麥',
  dj: '吉布地',
  do: '多明尼加',
  ec: '厄瓜多',
  eg: '埃及',
  sv: '薩爾瓦多',
  gq: '赤道幾內亞',
  er: '厄利垂亞',
  ee: '愛沙尼亞',
  et: '衣索比亞',
  fj: '斐濟',
  fi: '芬蘭',
  fr: '法國',
  ga: '加彭',
  gm: '甘比亞',
  ge: '喬治亞',
  de: '德國',
  gh: '迦納',
  gr: '希臘',
  gt: '瓜地馬拉',
  gn: '幾內亞',
  gy: '蓋亞那',
  ht: '海地',
  hn: '宏都拉斯',
  hu: '匈牙利',
  is: '冰島',
  in: '印度',
  id: '印尼',
  ir: '伊朗',
  iq: '伊拉克',
  ie: '愛爾蘭',
  il: '以色列',
  it: '義大利',
  jm: '牙買加',
  jp: '日本',
  jo: '約旦',
  kz: '哈薩克',
  ke: '肯亞',
  kw: '科威特',
  kg: '吉爾吉斯',
  la: '寮國',
  lv: '拉脫維亞',
  lb: '黎巴嫩',
  ls: '賴索托',
  lr: '賴比瑞亞',
  ly: '利比亞',
  lt: '立陶宛',
  lu: '盧森堡',
  mg: '馬達加斯加',
  mw: '馬拉威',
  my: '馬來西亞',
  mv: '馬爾地夫',
  ml: '馬利',
  mt: '馬爾他',
  mr: '茅利塔尼亞',
  mu: '模里西斯',
  mx: '墨西哥',
  md: '摩爾多瓦',
  mn: '蒙古',
  me: '蒙特內哥羅',
  ma: '摩洛哥',
  mz: '莫三比克',
  mm: '緬甸',
  na: '納米比亞',
  np: '尼泊爾',
  nl: '荷蘭',
  nc: '新喀里多尼亞',
  nz: '紐西蘭',
  ni: '尼加拉瓜',
  ne: '尼日',
  ng: '奈及利亞',
  no: '挪威',
  om: '阿曼',
  pk: '巴基斯坦',
  pa: '巴拿馬',
  pg: '巴布亞紐幾內亞',
  py: '巴拉圭',
  pe: '秘魯',
  ph: '菲律賓',
  pl: '波蘭',
  pt: '葡萄牙',
  pr: '波多黎各',
  qa: '卡達',
  ro: '羅馬尼亞',
  ru: '俄羅斯',
  rw: '盧安達',
  sa: '沙烏地阿拉伯',
  sn: '塞內加爾',
  rs: '塞爾維亞',
  sc: '塞席爾',
  sl: '獅子山',
  sg: '新加坡',
  sk: '斯洛伐克',
  si: '斯洛維尼亞',
  sb: '索羅門群島',
  so: '索馬利亞',
  za: '南非',
  ss: '南蘇丹',
  es: '西班牙',
  lk: '斯里蘭卡',
  sd: '蘇丹',
  sr: '蘇利南',
  se: '瑞典',
  ch: '瑞士',
  sy: '敘利亞',
  tw: '台灣',
  tj: '塔吉克',
  tz: '坦尚尼亞',
  th: '泰國',
  tl: '東帝汶',
  tg: '多哥',
  tn: '突尼西亞',
  tr: '土耳其',
  tm: '土庫曼',
  ug: '烏干達',
  ua: '烏克蘭',
  ae: '阿聯酋',
  gb: '英國',
  us: '美國',
  uy: '烏拉圭',
  uz: '烏茲別克',
  ve: '委內瑞拉',
  vn: '越南',
  ye: '葉門',
  zm: '尚比亞',
  zw: '辛巴威',
  xk: '科索沃',
};

const WIDTH = 960;
const HEIGHT = 500;

export default function WorldMap({
  origin = 'TPE',
  departDate,
  returnDate,
  onCountryClick,
}) {
  const svgRef = useRef(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    name: '',
    hasArticle: false,
  });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((r) => r.json())
      .then((world) => {
        const feats = feature(world, world.objects.countries).features;
        setCountries(feats);
      });
  }, []);

  const projection = geoNaturalEarth1()
    .scale(153)
    .translate([WIDTH / 2, HEIGHT / 2]);
  const pathGen = geoPath().projection(projection);

  const numericToAlpha2 = (numericId) => {
    const map = {
      '004': 'af',
      '008': 'al',
      '012': 'dz',
      '024': 'ao',
      '032': 'ar',
      '051': 'am',
      '036': 'au',
      '040': 'at',
      '031': 'az',
      '048': 'bh',
      '050': 'bd',
      112: 'by',
      '056': 'be',
      '084': 'bz',
      204: 'bj',
      '064': 'bt',
      '068': 'bo',
      '070': 'ba',
      '072': 'bw',
      '076': 'br',
      '096': 'bn',
      100: 'bg',
      854: 'bf',
      108: 'bi',
      116: 'kh',
      120: 'cm',
      124: 'ca',
      140: 'cf',
      148: 'td',
      152: 'cl',
      156: 'cn',
      170: 'co',
      180: 'cd',
      178: 'cg',
      188: 'cr',
      191: 'hr',
      192: 'cu',
      196: 'cy',
      203: 'cz',
      208: 'dk',
      262: 'dj',
      214: 'do',
      218: 'ec',
      818: 'eg',
      222: 'sv',
      226: 'gq',
      232: 'er',
      233: 'ee',
      231: 'et',
      242: 'fj',
      246: 'fi',
      250: 'fr',
      266: 'ga',
      270: 'gm',
      268: 'ge',
      276: 'de',
      288: 'gh',
      300: 'gr',
      320: 'gt',
      324: 'gn',
      328: 'gy',
      332: 'ht',
      340: 'hn',
      348: 'hu',
      352: 'is',
      356: 'in',
      360: 'id',
      364: 'ir',
      368: 'iq',
      372: 'ie',
      376: 'il',
      380: 'it',
      388: 'jm',
      392: 'jp',
      400: 'jo',
      398: 'kz',
      404: 'ke',
      414: 'kw',
      417: 'kg',
      418: 'la',
      428: 'lv',
      422: 'lb',
      426: 'ls',
      430: 'lr',
      434: 'ly',
      440: 'lt',
      442: 'lu',
      450: 'mg',
      454: 'mw',
      458: 'my',
      462: 'mv',
      466: 'ml',
      470: 'mt',
      478: 'mr',
      480: 'mu',
      484: 'mx',
      498: 'md',
      496: 'mn',
      499: 'me',
      504: 'ma',
      508: 'mz',
      104: 'mm',
      516: 'na',
      524: 'np',
      528: 'nl',
      540: 'nc',
      554: 'nz',
      558: 'ni',
      562: 'ne',
      566: 'ng',
      578: 'no',
      512: 'om',
      586: 'pk',
      591: 'pa',
      598: 'pg',
      600: 'py',
      604: 'pe',
      608: 'ph',
      616: 'pl',
      620: 'pt',
      630: 'pr',
      634: 'qa',
      642: 'ro',
      643: 'ru',
      646: 'rw',
      682: 'sa',
      686: 'sn',
      688: 'rs',
      690: 'sc',
      694: 'sl',
      702: 'sg',
      703: 'sk',
      705: 'si',
      '090': 'sb',
      706: 'so',
      710: 'za',
      728: 'ss',
      724: 'es',
      144: 'lk',
      729: 'sd',
      740: 'sr',
      752: 'se',
      756: 'ch',
      760: 'sy',
      158: 'tw',
      762: 'tj',
      834: 'tz',
      764: 'th',
      626: 'tl',
      768: 'tg',
      788: 'tn',
      792: 'tr',
      795: 'tm',
      800: 'ug',
      804: 'ua',
      784: 'ae',
      826: 'gb',
      840: 'us',
      858: 'uy',
      860: 'uz',
      862: 've',
      704: 'vn',
      887: 'ye',
      894: 'zm',
      716: 'zw',
      383: 'xk',
    };
    return map[String(numericId).padStart(3, '0')] || null;
  };

  const handleMouseEnter = (e, alpha2) => {
    const name = NAME_MAP[alpha2] || alpha2?.toUpperCase();
    const hasArticle = !!ARTICLE_MAP[alpha2];
    const rect = svgRef.current.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      name,
      hasArticle,
    });
  };

  const handleMouseMove = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }));
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const handleClick = (alpha2) => {
    if (!alpha2) return;
    if (ARTICLE_MAP[alpha2]) {
      onCountryClick?.({ type: 'article', url: ARTICLE_MAP[alpha2] });
    } else if (IATA_MAP[alpha2]) {
      onCountryClick?.({ type: 'flight', iata: IATA_MAP[alpha2], alpha2 });
    }
  };

  const legendItems = [
    { color: '#2e7d52', label: '點擊前往旅遊文章' },
    { color: '#a8c4d4', label: '點擊搜尋機票' },
  ];

  return (
    <div>
      {/* 地圖區塊 */}
      <div className='wm-wrapper' style={{ position: 'relative' }}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          {countries.map((feat, index) => {
            const alpha2 = numericToAlpha2(feat.id);
            const hasArticle = !!ARTICLE_MAP[alpha2];
            // ── 方案一：沒有文章一律藍色，不再有灰色 ──
            const fill = hasArticle ? '#2e7d52' : '#a8c4d4';

            return (
              <path
                key={index}
                d={pathGen(feat)}
                fill={fill}
                stroke='#fff'
                strokeWidth={0.5}
                style={{
                  cursor:
                    hasArticle || IATA_MAP[alpha2] ? 'pointer' : 'default',
                }}
                onMouseEnter={(e) => handleMouseEnter(e, alpha2)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(alpha2)}
              />
            );
          })}
        </svg>

        {/* Tooltip */}
        {tooltip.visible && (
          <div
            style={{
              position: 'absolute',
              left: tooltip.x + 12,
              top: tooltip.y - 28,
              background: 'rgba(0,0,0,0.75)',
              color: '#fff',
              padding: '4px 10px',
              borderRadius: 6,
              fontSize: 13,
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              zIndex: 10,
            }}
          >
            {tooltip.name}
            {tooltip.hasArticle && (
              <span style={{ marginLeft: 6, fontSize: 11, opacity: 0.8 }}>
                📖 有文章
              </span>
            )}
          </div>
        )}
      </div>

      {/* 圖例 ── 在 wm-wrapper 外面，不受 overflow 影響 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          marginTop: 12,
          fontSize: 13,
          color: '#333',
          paddingLeft: 4,
        }}
      >
        {legendItems.map(({ color, label }) => (
          <span
            key={label}
            style={{ display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 12,
                height: 12,
                background: color,
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
