import { Link } from 'react-router-dom';

import FlightSearchCTA from '../../components/FlightSearchCTA/FlightSearchCTA';
import {
  getFeaturedTravelArticles,
  getLatestTravelArticles,
} from '../../data/travelArticles';
import PopularRouteCards from '../../components/PopularRouteCards/PopularRouteCards';
import { popularRoutes } from '../../data/popularRoutes';

import './Travel.css';

function ArticleCard({ article }) {
  // 判斷是否為外部或特殊路由（例如匈牙利攻略）
  const isSpecialPath = article.slug.startsWith('/');
  const targetPath = isSpecialPath ? article.slug : `/travel/${article.slug}`;

  return (
    <Link to={targetPath} className='travel-article-card'>
      <span>{article.category}</span>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
    </Link>
  );
}

function Travel() {
  const latestArticles = getLatestTravelArticles();
  const featuredArticles = getFeaturedTravelArticles();

  // 手動將「匈牙利布達佩斯攻略」包裝成與你文章系統格式相同的物件
  const hungaryArticle = {
    slug: '/destinations/hungary', // 特殊路徑，會被 ArticleCard 識別
    category: 'Europe • Guide',
    title:
      '2026 布達佩斯自由行攻略 | 第一次去匈牙利必看！5天4夜行程、住宿、交通、景點、美食完整整理',
    excerpt:
      '第一次去匈牙利怎麼玩？本篇整理最新布達佩斯自由行攻略，包含5天4夜行程安排、住宿推薦、交通方式、景點、美食與預算，帶你輕鬆完成旅遊規劃。',
  };

  // 將匈牙利攻略塞入精選文章的最前面，確保它有最大曝光！
  const displayFeaturedArticles = [hungaryArticle, ...featuredArticles];

  return (
    <div className='travel-page'>
      <section className='travel-hero'>
        <div className='travel-hero-container'>
          <p className='travel-eyebrow'>Travel</p>
          <h1>Travel stories, guides, and flight ideas</h1>
          <p>
            Notes from Taiwan, Europe, and family trips abroad — with practical
            ideas for planning routes, comparing flights, and traveling slowly.
          </p>
        </div>
      </section>

      {/* 兩欄式主內容區 */}
      <div className='travel-main-layout'>
        {/* 左側：文章列表 */}
        <div className='travel-main-content'>
          <section className='travel-content-section'>
            <div className='travel-section-heading'>
              <p className='travel-eyebrow'>Latest Articles</p>
              <h2>Latest travel notes</h2>
            </div>

            <div className='travel-article-grid'>
              {latestArticles.map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
            </div>
          </section>

          <section className='travel-content-section featured-section'>
            <div className='travel-section-heading'>
              <p className='travel-eyebrow'>Featured Guides</p>
              <h2>Useful guides for planning better trips</h2>
            </div>

            <div className='travel-article-grid'>
              {displayFeaturedArticles.map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
            </div>
          </section>
        </div>

        {/* 右側：新增側邊欄 Sidebar (保持與 TravelArticle 側欄一致的極簡風格) */}
        <aside className='travel-sidebar'>
          {/* 側欄區塊 1：強烈推薦匈牙利攻略 */}
          <div className='sidebar-card highlight-card'>
            <p className='sidebar-eyebrow'>Must Read</p>
            <h3>布達佩斯 5 天 4 夜攻略</h3>
            <p>
              親自實測！從多瑙河畔的國會大廈到百年塞切尼溫泉，最詳細的交通票券與高
              CP 值住宿推薦。
            </p>
            <Link to='/destinations/hungary' className='sidebar-action-btn'>
              閱讀匈牙利攻略 →
            </Link>
          </div>

          {/* 側欄區塊 2：Travelpayouts 搜尋小工具預留區 */}
          <div className='sidebar-card travelpayouts-card'>
            <p className='sidebar-eyebrow'>Compare & Save</p>
            <h3>尋找便宜機票與住宿</h3>
            <p className='sidebar-desc'>
              使用下方工具即時比價，規劃你的下一趟旅程：
            </p>

            {/* 這裡可以放置 Travelpayouts 的 Widget */}
            <div className='travelpayouts-widget-placeholder'>
              <p>[ Travelpayouts Widget 預留位置 ]</p>
              <span className='widget-tag'>Booking.com</span>
              <span className='widget-tag'>Klook</span>
            </div>
          </div>
        </aside>
      </div>

      <section className='popular-routes-section'>
        <div className='travel-section-container'>
          <div className='travel-section-heading'>
            <p className='travel-eyebrow'>Popular Routes</p>
            <h2>Start with these flight routes</h2>
          </div>
          <PopularRouteCards routes={popularRoutes} />
        </div>
      </section>

      <FlightSearchCTA />
    </div>
  );
}

export default Travel;
