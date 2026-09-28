import { Link } from 'react-router-dom';

import FlightSearchCTA from '../../components/FlightSearchCTA/FlightSearchCTA';
import {
  getFeaturedTravelArticles,
  travelArticles,
} from '../../data/travelArticles';
import PopularRouteCards from '../../components/PopularRouteCards/PopularRouteCards';
import { popularRoutes } from '../../data/popularRoutes';
import { getPublishedDestinations } from '../../data/destinations';
import './Travel.css';

// 把 destinations 轉成跟 travelArticles 相容的格式，方便一起排序、渲染
const destinationEntries = getPublishedDestinations().map((d) => ({
  slug: d.slug,
  title: d.title,
  excerpt: d.excerpt,
  date: d.date,
  category: d.city,
  image: d.image,
  type: 'latest',
  isExternalGuide: true, // 標記這是走 /destinations/ 而不是 /travel/
}));

// ✅ 合併並依日期排序，Italy / France / Hungary 都會自動出現在這裡
const allLatestArticles = [
  ...destinationEntries,
  ...travelArticles.filter((a) => a.type === 'latest'),
].sort((a, b) => new Date(b.date) - new Date(a.date));

function ArticleCard({ article }) {
  const targetPath = article.isExternalGuide
    ? `/destinations/${article.slug}`
    : `/travel/${article.slug}`;

  return (
    <Link to={targetPath} className='travel-article-card'>
      <span>{article.category}</span>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
    </Link>
  );
}

function ArticleListItem({ article }) {
  const to = article.isExternalGuide
    ? `/destinations/${article.slug}`
    : `/travel/${article.slug}`;

  return (
    <Link to={to} className='travel-list-item'>
      {article.image && (
        <div
          className='travel-list-item-image'
          style={{ backgroundImage: `url('${article.image}')` }}
        />
      )}
      <div className='travel-list-item-content'>
        <span className='travel-list-item-category'>{article.category}</span>
        <h3 className='travel-list-item-title'>{article.title}</h3>
        <p className='travel-list-item-excerpt'>{article.excerpt}</p>
        <span className='travel-list-item-date'>{article.date}</span>
      </div>
      <span className='travel-list-item-arrow'>→</span>
    </Link>
  );
}

function Travel() {
  const featuredArticles = getFeaturedTravelArticles();

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

      <div className='travel-main-layout'>
        <div className='travel-main-content'>
          {/* ✅ Latest Articles 改成條列式，並且包含所有目的地攻略 */}
          <section className='travel-content-section'>
            <div className='travel-section-heading'>
              <p className='travel-eyebrow'>Latest Articles</p>
              <h2>Latest travel notes</h2>
            </div>

            <div className='travel-article-list'>
              {allLatestArticles.map((article) => (
                <ArticleListItem article={article} key={article.slug} />
              ))}
            </div>
          </section>

          {/* Featured Guides 維持卡片式，主打精選內容 */}
          <section className='travel-content-section featured-section'>
            <div className='travel-section-heading'>
              <p className='travel-eyebrow'>Featured Guides</p>
              <h2>Useful guides for planning better trips</h2>
            </div>

            <div className='travel-article-grid'>
              {featuredArticles.map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
            </div>
          </section>
        </div>

        <aside className='travel-sidebar'>
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

          <div className='sidebar-card travelpayouts-card'>
            <p className='sidebar-eyebrow'>Compare & Save</p>
            <h3>尋找便宜機票與住宿</h3>
            <p className='sidebar-desc'>
              使用下方工具即時比價，規劃你的下一趟旅程：
            </p>
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
