import { buildPopularRouteUrl } from '../../utils/buildAviasalesUrl';
import './PopularRouteCards.css';

function PopularRouteCards({ routes }) {
  if (!routes || routes.length === 0) {
    return null;
  }

  return (
    <div className='popular-route-grid'>
      {routes.map((route) => (
        <a
          key={route.id}
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
  );
}

export default PopularRouteCards;
