import { useState } from 'react';
import { Link } from 'react-router-dom';
import { staticParentingArticles } from '../../data/parentingArticles'; // 1. 引入外部資料
import './Parenting.css';

const categories = ['All', '嬰兒睡眠', '副食品', '清醒窗活動'];

function Parenting() {
  const [activeCategory, setActiveCategory] = useState('All');

  // 2. 使用引入的 staticParentingArticles 資料
  const filtered =
    activeCategory === 'All'
      ? staticParentingArticles
      : staticParentingArticles.filter((a) => a.category === activeCategory);

  return (
    <div className='parenting-page'>
      {/* Hero */}
      <section className='parenting-hero'>
        <div className='parenting-hero-container'>
          <p className='parenting-eyebrow'>Parenting</p>
          <h1>
            Growing
            <br />
            <em>Together.</em>
          </h1>
          <p>
            Honest notes on raising a baby in Europe — sleep, food, play, and
            all the beautiful chaos in between.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className='parenting-content-section'>
        <div className='parenting-section-container'>
          {/* Category Filter */}
          <div className='parenting-filter-bar'>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`parenting-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className='parenting-article-grid'>
            {filtered.map((article) => (
              <Link
                key={article.id || article.slug}
                to={`/parenting/${article.slug}`}
                className='parenting-article-card'
              >
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Parenting;
