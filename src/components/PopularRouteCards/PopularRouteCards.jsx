import './PopularRouteCards.css';
import { buildAviasalesUrl } from '../../utils/buildAviasalesUrl';

// 自動產生 30 天後的日期
function getDefaultDepartDate() {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
}

function PopularRouteCards({ routes }) {
  if (!routes || routes.length === 0) return null;

  const defaultDate = getDefaultDepartDate();

  return (
    <div className='popular-route-grid'>
      {routes.map((route) => (
        <a
          key={route.id}
          className='popular-route-card'
          href={buildAviasalesUrl({
            origin: route.origin,
            destination: route.destination,
            departureDate: defaultDate,
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
