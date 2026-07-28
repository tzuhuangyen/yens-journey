import { useNavigate, Link } from 'react-router-dom';
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
        departDate: defaultDate, // ✅ 用已定義 of defaultDate
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

        {/* 新增：地圖下方的精選文章傳送門 */}
        <div className='ti-featured-post-container'>
          <div className='ti-featured-card'>
            <div className='ti-featured-badge'>Featured Guide</div>
            <div className='ti-featured-content'>
              <span className='ti-featured-category'>Europe • Hungary</span>
              <h3 className='ti-featured-title'>
                2026 布達佩斯自由行攻略 |
                第一次去匈牙利必看！5天4夜行程、住宿、交通、景點、美食完整整理
              </h3>
              <p className='ti-featured-excerpt'>
                多瑙河畔的璀璨明珠、百年塞切尼溫泉、高 CP
                值的復古廢墟酒吧。這份親自實測的 5 天 4
                夜懶人包，帶你用最聰明、最划算的方式玩轉布達佩斯！
              </p>
              <Link to='/destinations/hungary' className='ti-featured-btn'>
                閱讀完整攻略 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelInspiration;
