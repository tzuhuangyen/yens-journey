import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import FlightSearchCTA from '../components/FlightSearchCTA/FlightSearchCTA';

export default function ArticleDetail() {
  const { articleId } = useParams();
  const article = articles[articleId];

  // 如果找不到這篇文章，顯示 404
  if (!article) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '5rem 1rem',
          fontFamily: 'sans-serif',
        }}
      >
        <h2>抱歉，找不到該文章 😢</h2>
        <Link
          to='/'
          style={{
            color: '#f59e0b',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          回到首頁
        </Link>
      </div>
    );
  }

  // 內聯樣式
  const styles = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
      backgroundImage: `url(${article.heroImage})`,
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
      fontSize: '2.25rem',
      fontWeight: '800',
      marginTop: '1rem',
      marginBottom: '1.5rem',
      lineHeight: '1.3',
    },
    heroDesc: {
      fontSize: '1.1rem',
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
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '2.5rem',
      border: '1px solid #f1f5f9',
    },
    h2: {
      fontSize: '1.6rem',
      fontWeight: '700',
      color: '#0f172a',
      borderLeft: '4px solid #f59e0b',
      paddingLeft: '0.75rem',
      marginBottom: '1.25rem',
      marginTop: '2.5rem',
    },
    p: {
      fontSize: '1.05rem',
      lineHeight: '1.7',
      color: '#475569',
      marginBottom: '1.5rem',
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
      fontSize: '1.2rem',
      fontWeight: '700',
      marginTop: '0.5rem',
      color: '#0f172a',
    },
    hotelCta: {
      backgroundColor: '#fffbeb',
      border: '1px solid #fde68a',
      borderRadius: '0.75rem',
      padding: '1.25rem',
      display: 'flex',
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
    footerCta: {
      borderTop: '1px solid #f1f5f9',
      paddingTop: '2rem',
      textAlign: 'center',
      marginTop: '3rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.heroBg}></div>
        <div style={styles.heroContent}>
          <span style={styles.badge}>2026 推薦攻略</span>
          <h1 style={styles.h1}>{article.title}</h1>
          <p style={styles.heroDesc}>{article.description}</p>
        </div>
      </div>

      <div style={styles.main}>
        <div style={styles.articleCard}>
          {/* 這裡我們可以直接放上匈牙利文章的內容，
              因為目前只有這篇，我們先把內容固定在這邊，
              但「結構」已經完全動態化了！ */}

          <section>
            <h2 style={styles.h2}>為什麼第一次歐洲自由行推薦匈牙利？</h2>
            <p style={styles.p}>
              如果你希望第一次歐洲自由行兼顧歷史、美景、溫泉、夜景與預算，布達佩斯會是CP值最高的城市之一。相較於西歐高昂的物價，中東歐的匈牙利不僅治安良好，物價更是親民，能讓你用極低的預算享受高規格的歐洲假期。
            </p>
          </section>

          <section>
            <h2 style={styles.h2}>如何前往布達佩斯？</h2>
            <p style={styles.p}>
              布達佩斯李斯特·費倫茨國際機場 ({article.defaultAirport})
              是匈牙利的主要門戶。從亞洲出發，通常可以選擇在杜拜、伊斯坦堡、法蘭克福或維也納轉機。
            </p>

            {/* 核心內嵌 CTA：機票搜尋框（會根據不同文章自動切換目的地！） */}
            <div style={styles.ctaBox}>
              <div style={styles.ctaHeader}>
                <span style={styles.ctaBadge}>機票比價工具</span>
                <h3 style={styles.ctaTitle}>✈ 搜尋前往該國的便宜機票</h3>
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
              <FlightSearchCTA defaultDestination={article.defaultAirport} />
            </div>
          </section>

          <section>
            <h2 style={styles.h2}>布達佩斯住宿區域推薦</h2>
            <p style={styles.p}>
              布達佩斯被多瑙河分為「布達」與「佩斯」兩側。對於第一次自由行的旅客，強烈建議選擇住在佩斯側（Pest），交通與生活機能都更方便。
            </p>

            <div style={styles.hotelCta}>
              <div>
                <h4 style={{ margin: 0, fontWeight: 'bold', color: '#78350f' }}>
                  🏨 尋找當地優質飯店與民宿
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
                href={article.hotelUrl}
                target='_blank'
                rel='noopener noreferrer'
                style={styles.buttonAmber}
              >
                搜尋住宿優惠 →
              </a>
            </div>
          </section>

          <section style={styles.footerCta}>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#0f172a',
                marginBottom: '0.5rem',
              }}
            >
              準備好開啟你的冒險了嗎？
            </h3>
            <p
              style={{
                ...styles.p,
                maxWidth: '600px',
                margin: '0 auto 1.5rem auto',
              }}
            >
              提前預訂機票與住宿，不僅能鎖定最優惠的價格，還能省去現場排隊的繁瑣步驟。
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
                href={article.hotelUrl}
                target='_blank'
                rel='noopener noreferrer'
                style={styles.buttonDark}
              >
                🏨 搜尋當地住宿
              </a>
              <a
                href={article.carUrl}
                target='_blank'
                rel='noopener noreferrer'
                style={styles.buttonGreen}
              >
                🚗 預訂自駕租車
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
