import { Link } from 'react-router-dom';
import './FeaturedCategories.css';

const categories = [
  {
    label: 'Travel',
    sub: '旅行探索',
    path: '/travel',
    emoji: '✈️',
    desc: '歐洲生活與世界旅行',
  },
  {
    label: 'Tech',
    sub: '學習成長',
    path: '/tech',
    emoji: '💻',
    desc: '前端開發與 AI 工具',
  },
  {
    label: 'Parenting',
    sub: '育兒日常',
    path: '/parenting',
    emoji: '🌿',
    desc: '媽媽視角的生活與成長',
  },
  {
    label: 'About',
    sub: '關於我',
    path: '/about',
    emoji: '🧭',
    desc: '我的故事與品牌理念',
  },
];

function FeaturedCategories() {
  return (
    <section className='featured-categories'>
      <div className='fc-container'>
        <div className='fc-header'>
          <p className='fc-eyebrow'>Explore by Category</p>
          <h2 className='fc-title'>找到你感興趣的主題</h2>
        </div>

        <div className='fc-grid'>
          {categories.map((cat) => (
            <Link to={cat.path} key={cat.label} className='fc-card'>
              <span className='fc-emoji'>{cat.emoji}</span>
              <p className='fc-card-eyebrow'>{cat.sub}</p>
              <h3 className='fc-card-title'>{cat.label}</h3>
              <p className='fc-card-desc'>{cat.desc}</p>
              <span className='fc-arrow'>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
