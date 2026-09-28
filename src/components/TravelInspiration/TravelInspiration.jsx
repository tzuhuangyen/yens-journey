import { useNavigate, Link } from 'react-router-dom';
import { buildAviasalesUrl } from '../../utils/buildAviasalesUrl';
import { getPublishedDestinations } from '../../data/destinations';
import WorldMap from './WorldMap';
import './TravelInspiration.css';

function getDefaultDepartDate() {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date.toISOString().split('T')[0];
}

function TravelInspiration() {
  const navigate = useNavigate();
  const defaultDate = getDefaultDepartDate();

  // ✅ 自動取得最新 5 篇目的地攻略，不用再手動維護單一卡片
  const featuredDestinations = getPublishedDestinations().slice(0, 5);

  const handleCountryClick = ({ type, url, iata }) => {
    if (type === 'article') {
      navigate(url);
    } else if (type === 'flight') {
      const flightUrl = buildAviasalesUrl({
        origin: 'TPE',
        destination: iata,
        departDate: defaultDate,
        returnDate: null,
      });
      window.open(flightUrl, '_blank');
    }
  };

  return (
    <section className='travel-inspiration'>
      <div className='ti-container'>
        <div className='ti-header'>
          <div>
            <p className='ti-eyebrow'>Travel Inspiration</p>
            <h2 className='ti-title'>探索世界的渴望</h2>
          </div>
        </div>

        {/* 地圖 */}
        <WorldMap onCountryClick={handleCountryClick} />

        {/* ✅ 自動產生 3-5 篇目的地攻略卡片 */}
        <div className='ti-destination-grid'>
          {featuredDestinations.map((d) => (
            <Link
              key={d.slug}
              to={`/destinations/${d.slug}`}
              className='ti-destination-card'
            >
              <div
                className='ti-destination-image'
                style={{ backgroundImage: `url('${d.image}')` }}
              />
              <div className='ti-destination-content'>
                <span className='ti-destination-tag'>{d.city}</span>
                <h3 className='ti-destination-title'>{d.title}</h3>
                <p className='ti-destination-excerpt'>{d.excerpt}</p>
                <span className='ti-destination-link'>閱讀完整攻略 →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelInspiration;
