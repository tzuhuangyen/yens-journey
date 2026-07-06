import { Link, Navigate, useParams } from 'react-router-dom';

import FlightSearchCTA from '../../components/FlightSearchCTA/FlightSearchCTA';
import {
  getFeaturedTravelArticles,
  getTravelArticleBySlug,
} from '../../data/travelArticles';

import './TravelArticle.css';

function formatDisplayDate(dateString) {
  const date = new Date(dateString);

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

  return (
    <article className='travel-article-page'>
      <header className='travel-article-hero'>
        <div className='travel-article-hero-container'>
          <Link to='/travel' className='back-to-travel'>
            ← Back to Travel
          </Link>

          <p className='travel-article-eyebrow'>{article.heroLabel}</p>

          <h1>{article.title}</h1>

          <div className='travel-article-meta'>
            <span>{article.category}</span>
            <span>{formatDisplayDate(article.date)}</span>
          </div>

          <p>{article.excerpt}</p>
        </div>
      </header>

      <div className='travel-article-layout'>
        <div className='travel-article-content'>
          {article.content.map((block, index) => {
            if (block.type === 'heading') {
              return <h2 key={`${block.type}-${index}`}>{block.text}</h2>;
            }

            return <p key={`${block.type}-${index}`}>{block.text}</p>;
          })}
        </div>

        <aside className='travel-article-sidebar'>
          <div className='sidebar-card'>
            <p className='sidebar-eyebrow'>Travel Tip</p>

            <h3>Compare routes before booking</h3>

            <p>
              Prices and layovers can change quickly. Check different dates and
              nearby airports before you decide.
            </p>

            <a href='#flight-search'>Search flights</a>
          </div>
        </aside>
      </div>

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
