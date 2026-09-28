import { Link, Navigate, useParams } from 'react-router-dom';

import FlightSearchCTA from '../../components/FlightSearchCTA/FlightSearchCTA';
import PopularRouteCards from '../../components/PopularRouteCards/PopularRouteCards';
import {
  getFeaturedTravelArticles,
  getTravelArticleBySlug,
} from '../../data/travelArticles';
import { getPopularRoutesByIds } from '../../data/popularRoutes';

import './TravelArticle.css';

function formatDisplayDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return '';

  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

function TravelArticle() {
  const { slug } = useParams();

  const article = getTravelArticleBySlug(slug);

  if (!article) {
    return <Navigate to='/travel' replace />;
  }

  const relatedArticles = getFeaturedTravelArticles()
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  const relatedRoutes = getPopularRoutesByIds(article.relatedRouteIds || []);

  return (
    <article className='travel-article-page'>
      <header className='travel-article-hero'>
        <div className='travel-article-hero-container'>
          <Link to='/travel' className='back-to-travel'>
            ← 回到旅遊文章
          </Link>

          {article.heroLabel && (
            <p className='travel-article-eyebrow'>{article.heroLabel}</p>
          )}

          <h1>{article.title}</h1>

          <div className='travel-article-meta'>
            {article.category && <span>{article.category}</span>}
            {article.date && <span>{formatDisplayDate(article.date)}</span>}
            {article.readingTime && <span>{article.readingTime}</span>}
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className='travel-article-tags' aria-label='Article tags'>
              {article.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}

          {article.excerpt && <p>{article.excerpt}</p>}
        </div>
      </header>

      <div className='travel-article-layout'>
        <div className='travel-article-content'>
          {Array.isArray(article.content) && article.content.length > 0 ? (
            article.content.map((block, index) => {
              if (!block || typeof block !== 'object') return null;

              if (block.type === 'heading') {
                return <h2 key={`${block.type}-${index}`}>{block.text}</h2>;
              }

              if (block.type === 'paragraph') {
                return <p key={`${block.type}-${index}`}>{block.text}</p>;
              }

              return null;
            })
          ) : (
            <p>No content available.</p>
          )}
        </div>

        <aside className='travel-article-sidebar'>
          <div className='sidebar-card'>
            <p className='sidebar-eyebrow'>Travel Tip</p>

            <h3>Compare routes before booking</h3>

            <p>
              Prices and layovers can change quickly. Check different dates and
              nearby airports before you decide.
            </p>

            <a href='#related-routes'>View related routes</a>
          </div>
        </aside>
      </div>

      {relatedRoutes.length > 0 && (
        <section className='article-routes-section' id='related-routes'>
          <div className='article-routes-container'>
            <div className='article-routes-heading'>
              <p className='travel-article-eyebrow'>Related Routes</p>
              <h2>Flight routes for this guide</h2>
            </div>

            <PopularRouteCards routes={relatedRoutes} />
          </div>
        </section>
      )}

      {relatedArticles.length > 0 && (
        <section className='related-travel-section'>
          <div className='related-travel-container'>
            <div className='related-travel-heading'>
              <p className='travel-article-eyebrow'>Related Guides</p>
              <h2>Keep planning your trip</h2>
            </div>

            <div className='related-travel-grid'>
              {relatedArticles.map((relatedArticle) => (
                <Link
                  to={`/travel/${relatedArticle.slug}`}
                  className='related-travel-card'
                  key={relatedArticle.slug}
                >
                  <span>{relatedArticle.category}</span>
                  <h3>{relatedArticle.title}</h3>
                  <p>{relatedArticle.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div id='flight-search'>
        <FlightSearchCTA />
      </div>
    </article>
  );
}

export default TravelArticle;
