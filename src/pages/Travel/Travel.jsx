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
  return (
    <Link to={`/travel/${article.slug}`} className='travel-article-card'>
      <span>{article.category}</span>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
    </Link>
  );
}

function Travel() {
  const latestArticles = getLatestTravelArticles();
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

      <section className='travel-content-section'>
        <div className='travel-section-container'>
          <div className='travel-section-heading'>
            <p className='travel-eyebrow'>Latest Articles</p>
            <h2>Latest travel notes</h2>
          </div>

          <div className='travel-article-grid'>
            {latestArticles.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className='travel-content-section featured-section'>
        <div className='travel-section-container'>
          <div className='travel-section-heading'>
            <p className='travel-eyebrow'>Featured Guides</p>
            <h2>Useful guides for planning better trips</h2>
          </div>

          <div className='travel-article-grid'>
            {featuredArticles.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>

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
