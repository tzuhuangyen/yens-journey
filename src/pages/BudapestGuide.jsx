import React from 'react';
import FlightSearchCTA from '../components/FlightSearchCTA/FlightSearchCTA';

export default function BudapestGuide() {
  // 內聯樣式定義，確保在沒有 Tailwind 的環境下也能完美呈現
  const styles = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#334155',
      backgroundColor: '#f8fafc',
      minHeight: '100/vh',
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
        "url('https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=1200&q=80')",
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
    hotelCta: {
      backgroundColor: '#fffbeb',
      border: '1px solid #fde68a',
      borderRadius: '0.75rem',
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      margin: '2rem 0',
    },
    buttonAmber: {
      backgroundColor: '#f59e0b',
      color: '#0f172a',
      fontWeight: '700',
      padding: '0.75rem 1.25rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'background-color 0.2s',
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
          <h1 style={styles.h1}>
            2026
            布達佩斯自由行攻略｜第一次去匈牙利必看！5天4夜行程、住宿、交通、景點、美食完整整理
          </h1>
          <p style={styles.heroDesc}>
            第一次去匈牙利怎麼玩？本篇整理最新布達佩斯自由行攻略，包含5天4夜行程安排、住宿推薦、交通方式、景點、美食與預算，帶你輕鬆完成旅遊規劃。
          </p>
        </div>
      </div>

      {/* Article Container */}
      <div style={styles.main}>
        <div style={styles.articleCard}>
          {/* 為什麼選擇匈牙利 */}
          <section>
            <h2 style={styles.h2}>為什麼第一次歐洲自由行推薦匈牙利？</h2>
            <p style={styles.p}>
              如果你希望第一次歐洲自由行兼顧歷史、美景、溫泉、夜景與預算，布達佩斯會是CP值最高的城市之一。相較於西歐高昂的物價，中東歐的匈牙利不僅治安良好，物價更是親民，能讓你用極低的預算享受高規格的歐洲假期。
            </p>

            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>城市</th>
                    <th style={styles.th}>每日預算 (估計)</th>
                    <th style={styles.th}>CP值推薦度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.td}>巴黎 (Paris)</td>
                    <td style={styles.td}>約 250 歐元</td>
                    <td style={styles.td}>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>倫敦 (London)</td>
                    <td style={styles.td}>約 220 歐元</td>
                    <td style={styles.td}>★★★☆☆</td>
                  </tr>
                  <tr
                    style={{ backgroundColor: '#fffbeb', fontWeight: 'bold' }}
                  >
                    <td style={styles.td}>布達佩斯 (Budapest)</td>
                    <td style={{ ...styles.td, color: '#d97706' }}>
                      約 90–140 歐元
                    </td>
                    <td style={{ ...styles.td, color: '#d97706' }}>★★★★★</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 旅遊季節 */}
          <section>
            <h2 style={styles.h2}>匈牙利最佳旅遊季節</h2>
            <p style={styles.p}>
              布達佩斯四季分明，春秋兩季氣候最為怡人，12月的聖誕市集更是歐洲最美市集之一。以下是各月份的推薦指數與原因：
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
                      春暖花開，氣候最舒適，適合漫步探索。
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.td}>6月 - 8月</td>
                    <td style={{ ...styles.td, color: '#f59e0b' }}>★★★★☆</td>
                    <td style={styles.td}>
                      日照時間長，活動與節慶最多，但夏季氣溫較高。
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.td}>9月 - 10月</td>
                    <td style={{ ...styles.td, color: '#f59e0b' }}>★★★★★</td>
                    <td style={styles.td}>
                      最推薦！秋景迷人，氣候涼爽，避開暑期人潮。
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.td}>11月 - 12月</td>
                    <td style={{ ...styles.td, color: '#f59e0b' }}>★★★★☆</td>
                    <td style={styles.td}>
                      12月有全歐洲最美的聖誕市集，冬季氛圍濃厚。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 如何前往布達佩斯 & 內嵌機票搜尋 */}
          <section>
            <h2 style={styles.h2}>如何前往布達佩斯？</h2>
            <p style={styles.p}>
              布達佩斯李斯特·費倫茨國際機場 (BUD)
              是匈牙利的主要門戶。從亞洲出發，通常可以選擇在杜拜、伊斯坦堡、法蘭克福或維也納轉機。此外，如果你正在進行中歐多國旅行，從維也納搭乘
              OBB 火車前往布達佩斯也僅需 2.5 小時。
            </p>

            {/* 核心內嵌 CTA：機票搜尋框 */}
            <div style={styles.ctaBox}>
              <div style={styles.ctaHeader}>
                <span style={styles.ctaBadge}>機票比價工具</span>
                <h3 style={styles.ctaTitle}>✈ 搜尋前往布達佩斯的便宜機票</h3>
                <p
                  style={{
                    ...styles.p,
                    fontSize: '0.9rem',
                    margin: '0.25rem 0 0 0',
                  }}
                >
                  利用 Aviasales
                  比較全球數百家航空公司，一鍵找出最劃算的轉機時間與票價。
                </p>
              </div>
              {/* 直接渲染機票搜尋組件 */}
              <FlightSearchCTA defaultDestination='BUD' />
            </div>
          </section>

          {/* 住宿推薦 */}
          <section>
            <h2 style={styles.h2}>布達佩斯住宿區域推薦</h2>
            <p style={styles.p}>
              布達佩斯被多瑙河分為「布達」與「佩斯」兩側。對於第一次自由行的旅客，強烈建議選擇住在**佩斯側（Pest）**，交通與生活機能都更方便：
            </p>

            <div style={styles.grid3}>
              <div style={styles.gridCard}>
                <h3 style={styles.gridCardTitle}>第五區 (Belváros)</h3>
                <p
                  style={{
                    ...styles.p,
                    fontSize: '0.85rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <strong>適合：</strong>第一次自由行
                </p>
                <p style={{ ...styles.p, fontSize: '0.9rem', margin: 0 }}>
                  市中心精華區，治安極佳，步行即可達多個主要景點與地鐵樞紐。
                </p>
              </div>
              <div style={styles.gridCard}>
                <h3 style={styles.gridCardTitle}>第七區 (Erzsébetváros)</h3>
                <p
                  style={{
                    ...styles.p,
                    fontSize: '0.85rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <strong>適合：</strong>年輕人、夜生活
                </p>
                <p style={{ ...styles.p, fontSize: '0.9rem', margin: 0 }}>
                  著名的廢墟酒吧區，充滿文青咖啡廳，房價相對親民。
                </p>
              </div>
              <div style={styles.gridCard}>
                <h3 style={styles.gridCardTitle}>第一區 (布達城堡區)</h3>
                <p
                  style={{
                    ...styles.p,
                    fontSize: '0.85rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <strong>適合：</strong>蜜月、喜愛安靜
                </p>
                <p style={{ ...styles.p, fontSize: '0.9rem', margin: 0 }}>
                  環境清幽，風景極美，早晨能獨享沒有遊客的漁人堡美景。
                </p>
              </div>
            </div>

            <div style={styles.hotelCta}>
              <div>
                <h4 style={{ margin: 0, fontWeight: 'bold', color: '#78350f' }}>
                  🏨 尋找布達佩斯優質飯店與民宿
                </h4>
                <p
                  style={{
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.9rem',
                    color: '#92400e',
                  }}
                >
                  一鍵比價 Booking.com、Agoda 與 Expedia 的最新空房優惠。
                </p>
              </div>
              <a
                href='https://tp.media/r?marker=755271&trs=297495&p=2075&u=https%3A%2F%2Fhotellook.com'
                target='_blank'
                rel='noopener noreferrer'
                style={styles.buttonAmber}
              >
                搜尋住宿優惠 →
              </a>
            </div>
          </section>

          {/* 5天4夜行程規劃 */}
          <section>
            <h2 style={styles.h2}>經典 5 天 4 夜行程安排</h2>
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
                  Day 1：抵達與多瑙河初體驗
                </h3>
                <p
                  style={{
                    ...styles.p,
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.95rem',
                  }}
                >
                  抵達機場 → 搭乘 100E 巴士直達市區 → 飯店 Check-in →
                  傍晚漫步「鏈橋」→ 搭乘多瑙河遊船欣賞世界級夜景。
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
                  Day 2：探索歷史布達側
                </h3>
                <p
                  style={{
                    ...styles.p,
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.95rem',
                  }}
                >
                  搭乘復古纜車上山 → 布達城堡 → 馬加什教堂 →
                  漁人堡（俯瞰國會大廈最佳視角）→ 晚餐享用匈牙利傳統牛肉湯。
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
                  Day 3：佩斯側經典地標與溫泉體驗
                </h3>
                <p
                  style={{
                    ...styles.p,
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.95rem',
                  }}
                >
                  聖史蒂芬大教堂 → 宏偉的匈牙利國會大廈導覽 → 搭乘地鐵 M1
                  線（歐洲最古老地鐵之一）→ 塞切尼溫泉浴場放鬆。
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
                  Day 4：在地生活與廢墟酒吧
                </h3>
                <p
                  style={{
                    ...styles.p,
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.95rem',
                  }}
                >
                  中央市場採購伴手禮（紅椒粉、鵝肝醬）→ 瓦茨街逛街 →
                  傍晚前往第七區著名的 Szimpla Kert 廢墟酒吧體驗獨特夜生活。
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
                  Day 5：藝術小鎮或紀念品採購
                </h3>
                <p
                  style={{
                    ...styles.p,
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.95rem',
                  }}
                >
                  （可選）半日遊近郊藝術小鎮 聖安德烈 (Szentendre) →
                  回市區享用紐約咖啡館下午茶 → 啟程機場。
                </p>
              </div>
            </div>
          </section>

          {/* 預算表 */}
          <section>
            <h2 style={styles.h2}>💰 布達佩斯自由行預算估算 (台幣/人)</h2>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>項目</th>
                    <th style={styles.th}>省錢背包客</th>
                    <th style={styles.th}>一般標準版</th>
                    <th style={styles.th}>舒適享受版</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.td}>來回機票</td>
                    <td style={styles.td}>NT$ 25,000</td>
                    <td style={styles.td}>NT$ 32,000</td>
                    <td style={styles.td}>NT$ 45,000</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>雙人房住宿 (4晚)</td>
                    <td style={styles.td}>NT$ 9,000</td>
                    <td style={styles.td}>NT$ 15,000</td>
                    <td style={styles.td}>NT$ 25,000</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>餐飲美食</td>
                    <td style={styles.td}>NT$ 5,000</td>
                    <td style={styles.td}>NT$ 7,000</td>
                    <td style={styles.td}>NT$ 12,000</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>市區交通</td>
                    <td style={styles.td}>NT$ 1,500</td>
                    <td style={styles.td}>NT$ 2,500</td>
                    <td style={styles.td}>NT$ 4,000</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>門票與體驗</td>
                    <td style={styles.td}>NT$ 3,000</td>
                    <td style={styles.td}>NT$ 5,000</td>
                    <td style={styles.td}>NT$ 9,000</td>
                  </tr>
                  <tr
                    style={{ backgroundColor: '#fffbeb', fontWeight: 'bold' }}
                  >
                    <td style={styles.td}>預估總計</td>
                    <td style={styles.td}>NT$ 43,500</td>
                    <td style={{ ...styles.td, color: '#d97706' }}>
                      NT$ 61,500
                    </td>
                    <td style={styles.td}>NT$ 95,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Section */}
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
                  Q：布達佩斯自由行安全嗎？
                </h4>
                <p style={{ ...styles.p, margin: 0, fontSize: '0.9rem' }}>
                  A：非常安全！在歐洲各大首都中，布達佩斯的治安名列前茅，只要保持基本警覺，深夜在主要街道行走也相當安全。
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
                  Q：需要申請簽證嗎？
                </h4>
                <p style={{ ...styles.p, margin: 0, fontSize: '0.9rem' }}>
                  A：匈牙利屬於申根公約國，台灣護照持有人可享有免簽證入境待遇（180天內最長可停留90天）。
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
                  Q：英文在當地能通嗎？
                </h4>
                <p style={{ ...styles.p, margin: 0, fontSize: '0.9rem' }}>
                  A：在主要景點、飯店、熱門餐廳與地鐵站，英文普及率非常高，溝通完全沒有問題。
                </p>
              </div>
            </div>
          </section>

          {/* 底部總結與最終導流 */}
          <section style={styles.footerCta}>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#0f172a',
                marginBottom: '0.5rem',
              }}
            >
              準備好開啟你的匈牙利冒險了嗎？
            </h3>
            <p
              style={{
                ...styles.p,
                maxWidth: '600px',
                margin: '0 auto 1.5rem auto',
              }}
            >
              提前預訂機票與住宿，不僅能鎖定最優惠的價格，還能省去現場排隊的繁瑣步驟，讓你的布達佩斯自由行更加從容完美。
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
                href='https://tp.media/r?marker=755271&trs=297495&p=2075&u=https%3A%2F%2Fhotellook.com'
                target='_blank'
                rel='noopener noreferrer'
                style={styles.buttonDark}
              >
                🏨 搜尋布達佩斯住宿
              </a>
              <a
                href='https://tp.media/r?marker=755271&trs=297495&p=3257&u=https%3A%2F%2Fwww.discovercars.com'
                target='_blank'
                rel='noopener noreferrer'
                style={styles.buttonGreen}
              >
                🚗 預訂歐洲自駕租車
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
