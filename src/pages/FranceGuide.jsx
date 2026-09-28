import React from 'react';
import ViewCount from '../components/ViewCount';

export default function FranceGuide() {
  const styles = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#334155',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      paddingBottom: '4rem',
    },
    hero: {
      position: 'relative',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      padding: '5rem 1.5rem',
      textAlign: 'center',
      overflow: 'hidden',
    },
    heroBg: {
      position: 'absolute',
      inset: 0,
      opacity: 0.3,
      backgroundImage:
        "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    heroContent: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '800px',
      margin: '0 auto',
    },
    badge: {
      backgroundColor: '#f59e0b',
      color: '#0f172a',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      display: 'inline-block',
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginTop: '1rem',
      marginBottom: '1.5rem',
      lineHeight: '1.2',
    },
    heroDesc: {
      fontSize: '1.125rem',
      color: '#e2e8f0',
      lineHeight: '1.6',
    },
    main: {
      maxWidth: '800px',
      margin: '3rem auto 0 auto',
      padding: '0 1rem',
    },
    articleCard: {
      backgroundColor: '#ffffff',
      borderRadius: '1rem',
      boxShadow:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      padding: '2.5rem',
      border: '1px solid #f1f5f9',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#0f172a',
      borderLeft: '4px solid #f59e0b',
      paddingLeft: '0.75rem',
      marginBottom: '1.5rem',
      marginTop: '2.5rem',
    },
    p: {
      fontSize: '1.05rem',
      lineHeight: '1.7',
      color: '#475569',
      marginBottom: '1.5rem',
    },
    tableWrapper: {
      overflowX: 'auto',
      margin: '1.5rem 0',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      textAlign: 'left',
    },
    th: {
      backgroundColor: '#f1f5f9',
      color: '#334155',
      fontWeight: '600',
      padding: '0.75rem',
      border: '1px solid #e2e8f0',
    },
    td: {
      padding: '0.75rem',
      border: '1px solid #e2e8f0',
      color: '#475569',
    },
    ctaBox: {
      backgroundColor: '#f8fafc',
      padding: '1.5rem',
      borderRadius: '1rem',
      border: '1px solid #e2e8f0',
      margin: '2rem 0',
    },
    ctaHeader: {
      marginBottom: '1rem',
    },
    ctaBadge: {
      backgroundColor: '#dbeafe',
      color: '#1e40af',
      fontSize: '0.75rem',
      fontWeight: '600',
      padding: '0.125rem 0.5rem',
      borderRadius: '0.25rem',
    },
    ctaTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      marginTop: '0.5rem',
      color: '#0f172a',
    },
    grid3: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1rem',
      margin: '1.5rem 0',
    },
    gridCard: {
      backgroundColor: '#f8fafc',
      padding: '1.25rem',
      borderRadius: '0.75rem',
      border: '1px solid #f1f5f9',
    },
    gridCardTitle: {
      fontWeight: '700',
      fontSize: '1.1rem',
      color: '#0f172a',
      marginBottom: '0.5rem',
    },
    buttonDark: {
      backgroundColor: '#0f172a',
      color: '#ffffff',
      fontWeight: '700',
      padding: '0.75rem 1.25rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      display: 'inline-block',
    },
    buttonGreen: {
      backgroundColor: '#059669',
      color: '#ffffff',
      fontWeight: '700',
      padding: '0.75rem 1.25rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      display: 'inline-block',
    },
    timelineItem: {
      borderLeft: '2px solid #e2e8f0',
      paddingLeft: '1.5rem',
      position: 'relative',
      marginBottom: '1.5rem',
    },
    timelineDot: {
      position: 'absolute',
      left: '-9px',
      top: '4px',
      backgroundColor: '#f59e0b',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
    },
    faqItem: {
      backgroundColor: '#f8fafc',
      padding: '1rem',
      borderRadius: '0.75rem',
      marginBottom: '1rem',
    },
    footerCta: {
      borderTop: '1px solid #f1f5f9',
      paddingTop: '2rem',
      textAlign: 'center',
      marginTop: '3rem',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroBg}></div>
        <div style={styles.heroContent}>
          <span style={styles.badge}>2026 最新攻略</span>
          <div style={{ marginTop: '0.75rem' }}>
            <ViewCount />
          </div>
          <h1 style={styles.h1}>
            2026
            法國自由行攻略｜第一次去巴黎必看！景點、交通、住宿、行程完整整理
          </h1>
          <p style={styles.heroDesc}>
            本篇整理法國自由行重點，包含巴黎交通、住宿區域、熱門景點與預算規劃，並提供機票、住宿與行程的實用預訂入口。
          </p>
        </div>
      </div>

      {/* Article Container */}
      <div style={styles.main}>
        <div style={styles.articleCard}>
          {/* Why France */}
          <section>
            <h2 style={styles.h2}>為什麼第一次歐洲自由行推薦法國？</h2>
            <p style={styles.p}>
              如果你第一次規劃歐洲自由行，法國會是很經典的入門選擇。巴黎擁有世界級景點、成熟的大眾運輸、豐富美食與多樣住宿選擇，非常適合安排
              4 到 6 天的深度旅行。
            </p>
            <p style={styles.p}>
              對多數第一次去歐洲的旅人來說，法國的旅遊節奏、景點密度與城市體驗都很完整，可以一次感受到藝術、建築、美食與浪漫氛圍。
            </p>
          </section>

          {/* Best Season */}
          <section>
            <h2 style={styles.h2}>法國最佳旅遊季節</h2>
            <p style={styles.p}>
              法國四季各有特色，春天與秋天氣候最舒服，最適合散步與拍照。夏季是旺季，活動多但人潮也較多；冬季則適合看聖誕市集與享受城市氛圍。
            </p>

            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>月份</th>
                    <th style={styles.th}>推薦度</th>
                    <th style={styles.th}>特色原因</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.td}>3月 - 5月</td>
                    <td style={{ ...styles.td, color: '#f59e0b' }}>★★★★★</td>
                    <td style={styles.td}>
                      春季氣候舒適，適合城市散步與拍照。
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.td}>6月 - 8月</td>
                    <td style={{ ...styles.td, color: '#f59e0b' }}>★★★★☆</td>
                    <td style={styles.td}>
                      旺季熱鬧，但住宿與機票價格通常較高。
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.td}>9月 - 10月</td>
                    <td style={{ ...styles.td, color: '#f59e0b' }}>★★★★★</td>
                    <td style={styles.td}>
                      秋天最推薦，氣候涼爽且人潮相對減少。
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.td}>11月 - 2月</td>
                    <td style={{ ...styles.td, color: '#f59e0b' }}>★★★★☆</td>
                    <td style={styles.td}>
                      適合看節慶燈飾與聖誕市集，但天氣較冷。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Flight CTA */}
          <section>
            <h2 style={styles.h2}>如何前往巴黎？</h2>
            <p style={styles.p}>
              如果你是從台北出發，最常見的搜尋方式就是直接查詢台北飛巴黎的機票。若你想看巴黎整體票價，建議用巴黎作為搜尋目的地，若想直接鎖定主要機場，也可以以
              CDG 或 ORY 做進一步規劃。
            </p>

            <div style={styles.ctaBox}>
              <div style={styles.ctaHeader}>
                <span style={styles.ctaBadge}>機票比價工具</span>
                <h3 style={styles.ctaTitle}>✈ 搜尋台北飛巴黎的便宜機票</h3>
                <p
                  style={{
                    ...styles.p,
                    fontSize: '0.9rem',
                    margin: '0.25rem 0 1rem 0',
                  }}
                >
                  直接用 Aviasales 比較機票，快速查看適合你的航班與票價。
                </p>
              </div>
              <a
                href='https://aviasales.tp.st/CTNzh1lj'
                target='_blank'
                rel='noopener noreferrer'
                style={styles.buttonDark}
              >
                搜尋台北飛巴黎機票
              </a>
            </div>
          </section>

          {/* Accommodation */}
          <section>
            <h2 style={styles.h2}>巴黎住宿區域推薦</h2>
            <p style={styles.p}>
              第一次到巴黎，建議優先選擇交通方便的區域，例如第 1 區、第 4 區、第
              5 區，或是靠近地鐵站的飯店與公寓，能大幅提升旅遊效率。
            </p>

            <div style={styles.grid3}>
              <div style={styles.gridCard}>
                <h3 style={styles.gridCardTitle}>第 1 區</h3>
                <p style={{ ...styles.p, fontSize: '0.9rem', margin: 0 }}>
                  距離羅浮宮、杜樂麗花園近，適合第一次來巴黎的旅客。
                </p>
              </div>
              <div style={styles.gridCard}>
                <h3 style={styles.gridCardTitle}>第 4 區</h3>
                <p style={{ ...styles.p, fontSize: '0.9rem', margin: 0 }}>
                  靠近瑪黑區與巴黎聖母院，生活機能與觀光便利兼具。
                </p>
              </div>
              <div style={styles.gridCard}>
                <h3 style={styles.gridCardTitle}>第 5 區</h3>
                <p style={{ ...styles.p, fontSize: '0.9rem', margin: 0 }}>
                  拉丁區氛圍濃厚，餐廳、咖啡館與大學街景很有巴黎味。
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
              <a
                href='https://kkday.tp.st/nBSslO9U'
                target='_blank'
                rel='noopener noreferrer'
                style={styles.buttonDark}
              >
                🏨 透過 KKday 尋找巴黎精選住宿與飯店
              </a>
            </div>
          </section>

          {/* Itinerary */}
          <section>
            <h2 style={styles.h2}>巴黎經典 5 天 4 夜行程安排</h2>
            <div style={{ margin: '2rem 0' }}>
              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#0f172a',
                  }}
                >
                  Day 1：抵達與市區初體驗
                </h3>
                <p
                  style={{
                    ...styles.p,
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.95rem',
                  }}
                >
                  抵達機場 → 搭乘交通工具進市區 → 飯店 Check-in →
                  傍晚漫步塞納河畔。
                </p>
              </div>

              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#0f172a',
                  }}
                >
                  Day 2：經典地標巡禮
                </h3>
                <p
                  style={{
                    ...styles.p,
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.95rem',
                  }}
                >
                  艾菲爾鐵塔 → 戰神廣場 → 塞納河遊船 → 夜景拍攝。
                </p>
              </div>

              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#0f172a',
                  }}
                >
                  Day 3：羅浮宮與藝術散步
                </h3>
                <p
                  style={{
                    ...styles.p,
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.95rem',
                  }}
                >
                  羅浮宮 → 杜樂麗花園 → 香榭麗舍大道 → 凱旋門。
                </p>
              </div>

              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#0f172a',
                  }}
                >
                  Day 4：蒙馬特與在地生活
                </h3>
                <p
                  style={{
                    ...styles.p,
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.95rem',
                  }}
                >
                  蒙馬特高地 → 聖心堂 → 街頭咖啡館 → 晚餐享用法式料理。
                </p>
              </div>

              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#0f172a',
                  }}
                >
                  Day 5：最後採買與返程
                </h3>
                <p
                  style={{
                    ...styles.p,
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.95rem',
                  }}
                >
                  伴手禮採買 → 咖啡館早餐 → 前往機場返回台北。
                </p>
              </div>
            </div>
          </section>

          {/* Budget */}
          <section>
            <h2 style={styles.h2}>法國自由行預算估算 (台幣/人)</h2>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>項目</th>
                    <th style={styles.th}>省錢版</th>
                    <th style={styles.th}>一般版</th>
                    <th style={styles.th}>舒適版</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.td}>來回機票</td>
                    <td style={styles.td}>NT$ 25,000</td>
                    <td style={styles.td}>NT$ 33,000</td>
                    <td style={styles.td}>NT$ 48,000</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>住宿 (4晚)</td>
                    <td style={styles.td}>NT$ 12,000</td>
                    <td style={styles.td}>NT$ 20,000</td>
                    <td style={styles.td}>NT$ 36,000</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>餐飲美食</td>
                    <td style={styles.td}>NT$ 6,000</td>
                    <td style={styles.td}>NT$ 10,000</td>
                    <td style={styles.td}>NT$ 18,000</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>市區交通</td>
                    <td style={styles.td}>NT$ 1,500</td>
                    <td style={styles.td}>NT$ 3,000</td>
                    <td style={styles.td}>NT$ 5,000</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>門票與體驗</td>
                    <td style={styles.td}>NT$ 3,000</td>
                    <td style={styles.td}>NT$ 6,000</td>
                    <td style={styles.td}>NT$ 12,000</td>
                  </tr>
                  <tr
                    style={{ backgroundColor: '#fffbeb', fontWeight: 'bold' }}
                  >
                    <td style={styles.td}>預估總計</td>
                    <td style={styles.td}>NT$ 47,500</td>
                    <td style={{ ...styles.td, color: '#d97706' }}>
                      NT$ 72,000
                    </td>
                    <td style={styles.td}>NT$ 119,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 style={styles.h2}>常見問題 FAQ</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div style={styles.faqItem}>
                <h4
                  style={{
                    margin: '0 0 0.25rem 0',
                    fontWeight: 'bold',
                    color: '#0f172a',
                  }}
                >
                  Q：第一次去巴黎安全嗎？
                </h4>
                <p style={{ ...styles.p, margin: 0, fontSize: '0.9rem' }}>
                  A：觀光區整體可接受，但仍需注意地鐵、小偷與夜間偏僻區域。
                </p>
              </div>

              <div style={styles.faqItem}>
                <h4
                  style={{
                    margin: '0 0 0.25rem 0',
                    fontWeight: 'bold',
                    color: '#0f172a',
                  }}
                >
                  Q：需要申根簽證嗎？
                </h4>
                <p style={{ ...styles.p, margin: 0, fontSize: '0.9rem' }}>
                  A：台灣護照持有人通常可免簽短期停留，仍建議出發前確認最新入境規定。
                </p>
              </div>

              <div style={styles.faqItem}>
                <h4
                  style={{
                    margin: '0 0 0.25rem 0',
                    fontWeight: 'bold',
                    color: '#0f172a',
                  }}
                >
                  Q：英文在當地好用嗎？
                </h4>
                <p style={{ ...styles.p, margin: 0, fontSize: '0.9rem' }}>
                  A：景點、飯店與主要餐廳大多可用英文溝通。
                </p>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <div style={styles.footerCta}>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#0f172a',
                marginBottom: '0.5rem',
              }}
            >
              準備好開啟你的巴黎冒險了嗎？
            </h3>
            <p
              style={{
                ...styles.p,
                maxWidth: '600px',
                margin: '0 auto 1.5rem auto',
              }}
            >
              提前預訂機票、住宿與熱門體驗，不僅能鎖定更好的價格，也能讓整趟旅程更輕鬆順暢。
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
                href='https://aviasales.tp.st/CTNzh1lj'
                target='_blank'
                rel='noopener noreferrer'
                style={styles.buttonDark}
              >
                ✈ 搜尋台北飛巴黎機票
              </a>
              <a
                href='https://klook.tp.st/9Y4Rpfzp'
                target='_blank'
                rel='noopener noreferrer'
                style={styles.buttonGreen}
              >
                🎟️ 預訂巴黎熱門行程
              </a>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <a
                href='https://kkday.tp.st/nBSslO9U'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  ...styles.buttonDark,
                  backgroundColor: '#334155',
                }}
              >
                🏨 尋找巴黎住宿與飯店
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
