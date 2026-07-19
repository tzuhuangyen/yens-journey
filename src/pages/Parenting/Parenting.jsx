import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Parenting.css';

const parentingArticles = [
  {
    id: 1,
    category: '嬰兒睡眠',
    title: 'How We Finally Got Our Baby to Sleep Through the Night',
    excerpt:
      'After weeks of exhaustion, we found a gentle routine that actually worked. Here is everything we tried and what made the difference.',
    slug: 'baby-sleep-through-night',
  },
  {
    id: 2,
    category: '嬰兒睡眠',
    title: 'Nap Schedules That Worked for Us at Every Stage',
    excerpt:
      'From newborn chaos to toddler predictability — a honest look at how our nap routine evolved month by month.',
    slug: 'nap-schedules',
  },
  {
    id: 3,
    category: '副食品',
    title: 'Starting Solids in Europe: What I Learned',
    excerpt:
      'Introducing solids as a Taiwanese mum in Hungary came with surprises. Here is what I wish someone had told me.',
    slug: 'starting-solids-europe',
  },
  {
    id: 4,
    category: '副食品',
    title: 'Baby-Led Weaning vs Purées: Our Honest Experience',
    excerpt:
      'We tried both. Here is what worked, what did not, and what our baby actually preferred.',
    slug: 'blw-vs-purees',
  },
  {
    id: 5,
    category: '清醒窗活動',
    title: 'Simple Wake Window Activities for 0–6 Months',
    excerpt:
      'You do not need fancy toys. These simple, low-cost activities kept our baby engaged and happy during wake windows.',
    slug: 'wake-window-activities-0-6',
  },
  {
    id: 6,
    category: '清醒窗活動',
    title: 'Outdoor Activities for Babies in Budapest',
    excerpt:
      'Living in Europe means beautiful parks and markets. Here is how we make the most of outdoor time with a little one.',
    slug: 'outdoor-activities-budapest',
  },
];

const categories = ['All', '嬰兒睡眠', '副食品', '清醒窗活動'];

function Parenting() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? parentingArticles
      : parentingArticles.filter((a) => a.category === activeCategory);

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
                key={article.id}
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
