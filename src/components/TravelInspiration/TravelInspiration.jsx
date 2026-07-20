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

  function handleCountryClick(dest) {
    // 有站內文章 → 站內跳轉
    if (dest.articleUrl) {
      navigate(dest.articleUrl);
      return;
    }

    // 沒有文章 → 開新分頁跳 Aviasales
    const url = buildAviasalesUrl({
      origin: 'TPE',
      destination: dest.iataCode,
      departDate: defaultDate,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  }

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

        {/* 圖例 */}
        <div className='ti-legend'>
          <span className='ti-legend-dot ti-legend-dot--active' />
          <span>可點擊目的地</span>
        </div>
      </div>
    </section>
  );
}

export default TravelInspiration;
