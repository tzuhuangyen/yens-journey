import { Link } from 'react-router-dom';
import './TravelInspiration.css';

const destinations = [
  { name: 'Switzerland', sub: '瑞士', emoji: '🏔️' },
  { name: 'Iceland', sub: '冰島', emoji: '🌋' },
  { name: 'Japan', sub: '日本', emoji: '⛩️' },
  { name: 'New Zealand', sub: '紐西蘭', emoji: '🌿' },
  { name: 'Portugal', sub: '葡萄牙', emoji: '🌊' },
];

function TravelInspiration() {
  return (
    <section className='travel-inspiration'>
      <div className='ti-container'>
        <div className='ti-header'>
          <div>
            <p className='ti-eyebrow'>Travel Inspiration</p>
            <h2 className='ti-title'>探索世界的渴望</h2>
          </div>
          <Link to='/travel' className='ti-view-all'>
            View All →
          </Link>
        </div>

        <div className='ti-grid'>
          {destinations.map((dest) => (
            <Link to='/travel' key={dest.name} className='ti-card'>
              <div className='ti-card-inner'>
                <span className='ti-emoji'>{dest.emoji}</span>
                <p className='ti-name'>{dest.name}</p>
                <p className='ti-sub'>{dest.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelInspiration;
