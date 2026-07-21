import { useNavigate } from 'react-router-dom';
import { buildAviasalesUrl } from '../../utils/buildAviasalesUrl';
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

  const handleCountryClick = ({ type, url, iata }) => {
    if (type === 'article') {
      navigate(url);
    } else if (type === 'flight') {
      const flightUrl = buildAviasalesUrl({
        origin: 'TPE', // ✅ 固定值，不用 state
        destination: iata,
        departDate: defaultDate, // ✅ 用已定義的 defaultDate
        returnDate: null, // ✅ 明確傳 null
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
      </div>
    </section>
  );
}

export default TravelInspiration;
