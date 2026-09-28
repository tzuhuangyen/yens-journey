import React from 'react';
import GuideTemplate from '../components/GuideTemplate/GuideTemplate';
import { guideStyles as s } from '../components/GuideTemplate/guideStyles';
import FlightSearchCTA from '../components/FlightSearchCTA/FlightSearchCTA';

export default function ItalyGuide() {
  return (
    <GuideTemplate
      badge='2026 最新攻略'
      title='義大利自由行攻略｜第一次去義大利必看！7天6夜行程、住宿、交通、景點、美食完整整理'
      description='第一次去義大利怎麼玩？本篇整理最新義大利自由行攻略，包含羅馬、佛羅倫斯、威尼斯行程安排、住宿推薦、交通方式、景點、美食與預算，帶你輕鬆完成旅遊規劃。'
      heroImage='https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80'
    >
      {/* 為什麼選擇義大利 */}
      <section>
        <h2 style={s.h2}>為什麼義大利是歐洲自由行首選？</h2>
        <p style={s.p}>
          義大利擁有全歐洲最多的世界遺產，從羅馬帝國遺跡、文藝復興藝術到迷人的水都威尼斯，短短一趟旅程就能體驗跨越千年的歷史風貌。無論是美食、時尚還是藝術愛好者，義大利都能滿足你對歐洲旅行的所有想像。
        </p>

        <div style={s.tableWrapper}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>城市</th>
                <th style={s.th}>每日預算 (估計)</th>
                <th style={s.th}>特色</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.td}>羅馬 (Rome)</td>
                <td style={s.td}>約 100–150 歐元</td>
                <td style={s.td}>古羅馬遺跡、梵蒂岡</td>
              </tr>
              <tr>
                <td style={s.td}>佛羅倫斯 (Florence)</td>
                <td style={s.td}>約 90–130 歐元</td>
                <td style={s.td}>文藝復興藝術之都</td>
              </tr>
              <tr style={{ backgroundColor: '#fffbeb', fontWeight: 'bold' }}>
                <td style={s.td}>威尼斯 (Venice)</td>
                <td style={{ ...s.td, color: '#d97706' }}>約 120–180 歐元</td>
                <td style={{ ...s.td, color: '#d97706' }}>浪漫水都</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 旅遊季節 */}
      <section>
        <h2 style={s.h2}>義大利最佳旅遊季節</h2>
        <p style={s.p}>
          義大利四季皆有不同魅力，春秋氣候最為舒適，適合長時間步行觀光；夏季炎熱但活動最多；冬季遊客較少，適合喜歡清靜旅行的人。
        </p>
        <div style={s.tableWrapper}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>月份</th>
                <th style={s.th}>推薦度</th>
                <th style={s.th}>特色原因</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.td}>4月 - 6月</td>
                <td style={{ ...s.td, color: '#f59e0b' }}>★★★★★</td>
                <td style={s.td}>春季氣候宜人，適合長距離步行觀光。</td>
              </tr>
              <tr>
                <td style={s.td}>7月 - 8月</td>
                <td style={{ ...s.td, color: '#f59e0b' }}>★★★☆☆</td>
                <td style={s.td}>旅遊旺季、氣溫高，人潮與物價都較高。</td>
              </tr>
              <tr>
                <td style={s.td}>9月 - 10月</td>
                <td style={{ ...s.td, color: '#f59e0b' }}>★★★★★</td>
                <td style={s.td}>最推薦！氣候涼爽舒適，人潮減少。</td>
              </tr>
              <tr>
                <td style={s.td}>11月 - 3月</td>
                <td style={{ ...s.td, color: '#f59e0b' }}>★★★☆☆</td>
                <td style={s.td}>淡季價格親民，但部分戶外景點縮短開放時間。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 如何前往義大利 & 機票 CTA */}
      <section>
        <h2 style={s.h2}>如何前往義大利？</h2>
        <p style={s.p}>
          義大利主要國際機場為羅馬菲烏米奇諾機場 (FCO) 與米蘭馬爾彭薩機場
          (MXP)。從亞洲出發，通常可選擇在杜拜、伊斯坦堡、法蘭克福或卡達轉機。若已在歐洲旅行，也可搭乘火車輕鬆往返鄰近國家。
        </p>

        <div style={s.ctaBox}>
          <div style={s.ctaHeader}>
            <span style={s.ctaBadge}>機票比價工具</span>
            <h3 style={s.ctaTitle}>✈ 搜尋前往義大利的便宜機票</h3>
            <p style={{ ...s.p, fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>
              利用 Aviasales
              比較全球數百家航空公司，一鍵找出最劃算的轉機時間與票價。
            </p>
          </div>
          <FlightSearchCTA destination='FCO' />
        </div>
      </section>

      {/* 住宿推薦 */}
      <section>
        <h2 style={s.h2}>義大利住宿城市推薦</h2>
        <p style={s.p}>
          建議以「羅馬 → 佛羅倫斯 →
          威尼斯」作為主要住宿基地，三個城市之間交通便利，可用火車串聯整趟行程：
        </p>

        <div style={s.grid3}>
          <div style={s.gridCard}>
            <h3 style={s.gridCardTitle}>羅馬 (Rome)</h3>
            <p style={{ ...s.p, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <strong>適合：</strong>第一次自由行
            </p>
            <p style={{ ...s.p, fontSize: '0.9rem', margin: 0 }}>
              古蹟密集，建議住在中央車站 Termini 或西班牙廣場周邊，交通最方便。
            </p>
          </div>
          <div style={s.gridCard}>
            <h3 style={s.gridCardTitle}>佛羅倫斯 (Florence)</h3>
            <p style={{ ...s.p, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <strong>適合：</strong>藝術愛好者
            </p>
            <p style={{ ...s.p, fontSize: '0.9rem', margin: 0 }}>
              市中心步行可達所有主要景點，適合悠閒漫步感受文藝氣息。
            </p>
          </div>
          <div style={s.gridCard}>
            <h3 style={s.gridCardTitle}>威尼斯 (Venice)</h3>
            <p style={{ ...s.p, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <strong>適合：</strong>蜜月、拍照愛好者
            </p>
            <p style={{ ...s.p, fontSize: '0.9rem', margin: 0 }}>
              建議住在本島感受水都氛圍，早晨可獨享沒有遊客的運河美景。
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <a
            href='https://kkday.tp.st/nBSslO9U'
            target='_blank'
            rel='noopener noreferrer'
            style={s.buttonDark}
          >
            🏨 透過 KKday 尋找義大利精選住宿與飯店
          </a>
        </div>
      </section>

      {/* 7天6夜行程規劃 */}
      <section>
        <h2 style={s.h2}>經典 7 天 6 夜行程安排</h2>
        <div style={{ margin: '2rem 0' }}>
          <div style={s.timelineItem}>
            <div style={s.timelineDot}></div>
            <h3
              style={{
                margin: 0,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#0f172a',
              }}
            >
              Day 1-2：羅馬經典古蹟巡禮
            </h3>
            <p style={{ ...s.p, margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>
              抵達機場 → 飯店 Check-in → 羅馬競技場、古羅馬廣場 →
              梵蒂岡博物館、聖彼得大教堂 → 傍晚許願池、萬神殿散步。
            </p>
          </div>
          <div style={s.timelineItem}>
            <div style={s.timelineDot}></div>
            <h3
              style={{
                margin: 0,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#0f172a',
              }}
            >
              Day 3-4：佛羅倫斯藝術之旅
            </h3>
            <p style={{ ...s.p, margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>
              高速火車前往佛羅倫斯 → 烏菲茲美術館 → 聖母百花大教堂 →
              米開朗基羅廣場俯瞰全城 → 品嚐正宗托斯卡尼牛排。
            </p>
          </div>
          <div style={s.timelineItem}>
            <div style={s.timelineDot}></div>
            <h3
              style={{
                margin: 0,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#0f172a',
              }}
            >
              Day 5-6：威尼斯水都體驗
            </h3>
            <p style={{ ...s.p, margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>
              火車前往威尼斯 → 聖馬可廣場、嘆息橋 → 貢多拉遊船體驗 → 彩色島
              Burano 半日遊。
            </p>
          </div>
          <div style={s.timelineItem}>
            <div style={s.timelineDot}></div>
            <h3
              style={{
                margin: 0,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#0f172a',
              }}
            >
              Day 7：採購與返程
            </h3>
            <p style={{ ...s.p, margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>
              早晨市場採購伴手禮（義大利麵、橄欖油）→ 前往機場，結束旅程。
            </p>
          </div>
        </div>
      </section>

      {/* 預算表 */}
      <section>
        <h2 style={s.h2}>💰 義大利自由行預算估算 (台幣/人)</h2>
        <div style={s.tableWrapper}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>項目</th>
                <th style={s.th}>省錢背包客</th>
                <th style={s.th}>一般標準版</th>
                <th style={s.th}>舒適享受版</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.td}>來回機票</td>
                <td style={s.td}>NT$ 28,000</td>
                <td style={s.td}>NT$ 36,000</td>
                <td style={s.td}>NT$ 50,000</td>
              </tr>
              <tr>
                <td style={s.td}>雙人房住宿 (6晚)</td>
                <td style={s.td}>NT$ 15,000</td>
                <td style={s.td}>NT$ 25,000</td>
                <td style={s.td}>NT$ 40,000</td>
              </tr>
              <tr>
                <td style={s.td}>城市間火車票</td>
                <td style={s.td}>NT$ 3,000</td>
                <td style={s.td}>NT$ 4,500</td>
                <td style={s.td}>NT$ 6,000</td>
              </tr>
              <tr>
                <td style={s.td}>餐飲美食</td>
                <td style={s.td}>NT$ 8,000</td>
                <td style={s.td}>NT$ 12,000</td>
                <td style={s.td}>NT$ 20,000</td>
              </tr>
              <tr>
                <td style={s.td}>門票與體驗</td>
                <td style={s.td}>NT$ 5,000</td>
                <td style={s.td}>NT$ 8,000</td>
                <td style={s.td}>NT$ 14,000</td>
              </tr>
              <tr style={{ backgroundColor: '#fffbeb', fontWeight: 'bold' }}>
                <td style={s.td}>預估總計</td>
                <td style={s.td}>NT$ 59,000</td>
                <td style={{ ...s.td, color: '#d97706' }}>NT$ 85,500</td>
                <td style={s.td}>NT$ 130,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 style={s.h2}>常見問題 FAQ</h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <div style={s.faqItem}>
            <h4
              style={{
                margin: '0 0 0.25rem 0',
                fontWeight: 'bold',
                color: '#0f172a',
              }}
            >
              Q：義大利自由行安全嗎？
            </h4>
            <p style={{ ...s.p, margin: 0, fontSize: '0.9rem' }}>
              A：整體安全，但熱門觀光區（如羅馬車站、地鐵）需留意扒手，建議財物分開放置並提高警覺。
            </p>
          </div>
          <div style={s.faqItem}>
            <h4
              style={{
                margin: '0 0 0.25rem 0',
                fontWeight: 'bold',
                color: '#0f172a',
              }}
            >
              Q：需要申請簽證嗎？
            </h4>
            <p style={{ ...s.p, margin: 0, fontSize: '0.9rem' }}>
              A：義大利屬於申根公約國，台灣護照持有人可享有免簽證入境待遇（180天內最長可停留90天）。
            </p>
          </div>
          <div style={s.faqItem}>
            <h4
              style={{
                margin: '0 0 0.25rem 0',
                fontWeight: 'bold',
                color: '#0f172a',
              }}
            >
              Q：城市間交通該怎麼安排？
            </h4>
            <p style={{ ...s.p, margin: 0, fontSize: '0.9rem' }}>
              A：義大利高速火車（Trenitalia /
              Italo）非常便利，建議提前線上訂票可享早鳥優惠價格。
            </p>
          </div>
        </div>
      </section>

      {/* 底部總結與最終導流 */}
      <div style={s.footerCta}>
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#0f172a',
            marginBottom: '0.5rem',
          }}
        >
          準備好開啟你的義大利文藝復興之旅了嗎？
        </h3>
        <p style={{ ...s.p, maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
          提前預訂熱門行程與租車，不僅能鎖定最優惠的價格，還能省去現場排隊的繁瑣步驟，讓你的義大利自由行更加從容完美。
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href='https://klook.tp.st/9Y4Rpfzp'
            target='_blank'
            rel='noopener noreferrer'
            style={s.buttonDark}
          >
            🎟️ 透過 Klook 預訂義大利熱門行程
          </a>
          <a
            href='https://getrentacar.tp.st/WyrqeWb5'
            target='_blank'
            rel='noopener noreferrer'
            style={s.buttonGreen}
          >
            🚗 預訂歐洲自駕租車
          </a>
        </div>
      </div>
    </GuideTemplate>
  );
}
