import { Link } from 'react-router-dom';

import FlightSearchCTA from '../../components/FlightSearchCTA/FlightSearchCTA';
import {
  getFeaturedTravelArticles,
  getLatestTravelArticles,
} from '../../data/travelArticles';
import { buildPopularRouteUrl } from '../../utils/buildAviasalesUrl';

import './Travel.css';

const popularRoutes = [
  {
    label: 'Taipei to Tokyo',
    origin: 'TPE',
    destination: 'NRT',
    description:
      'A classic Taiwan to Japan route for city trips, cherry blossoms, and family travel.',
  },
  {
    label: 'Taipei to Osaka',
    origin: 'TPE',
    destination: 'KIX',
    description:
      'Great for Kansai trips, Kyoto, Nara, Universal Studios, and food-focused travel.',
  },
  {
    label: 'Taipei to Seoul',
    origin: 'TPE',
    destination: 'ICN',
    description:
      'A short and flexible route for culture, food, shopping, and weekend trips.',
  },
  {
    label: 'Taipei to Bangkok',
    origin: 'TPE',
    destination: 'BKK',
    description:
      'A warm-weather route for food, hotels, family trips, and easy city breaks.',
  },
  {
    label: 'Budapest to Taipei',
    origin: 'BUD',
    destination: 'TPE',
    description:
      'Useful for planning long-haul trips between Central Europe and Taiwan.',
  },
  {
    label: 'Vienna to Taipei',
    origin: 'VIE',
    destination: 'TPE',
    description:
      'A practical route option for travelers based in Austria, Hungary, or nearby countries.',
  },
];

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

          <div className='popular-route-grid'>
            {popularRoutes.map((route) => (
              <a
                key={route.label}
                className='popular-route-card'
                href={buildPopularRouteUrl({
                  origin: route.origin,
                  destination: route.destination,
                })}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div>
                  <span>
                    {route.origin} → {route.destination}
                  </span>

                  <h3>{route.label}</h3>

                  <p>{route.description}</p>
                </div>

                <strong>Search route</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FlightSearchCTA />
    </div>
  );
}

export default Travel;
