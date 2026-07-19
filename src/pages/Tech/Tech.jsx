import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tech.css';

const techArticles = [
  {
    id: 1,
    category: 'AI Tools',
    title: 'How I Use ChatGPT to Plan My Travel Itineraries',
    excerpt:
      'AI is changing the way I explore new cities. Here is how I integrate ChatGPT into my travel planning workflow.',
    slug: 'chatgpt-travel-planning',
  },
  {
    id: 2,
    category: 'AI Tools',
    title: 'My Favourite AI Tools in 2025',
    excerpt:
      'From writing assistants to image generators — a curated list of tools that actually made my life easier.',
    slug: 'favourite-ai-tools-2025',
  },
  {
    id: 3,
    category: 'Frontend',
    title: 'Building This Blog with React',
    excerpt:
      'A behind-the-scenes look at how YEN Journey was built — the stack, the decisions, and the lessons learned.',
    slug: 'building-blog-with-react',
  },
  {
    id: 4,
    category: 'Frontend',
    title: 'CSS Tips I Wish I Knew Earlier',
    excerpt:
      'Small but powerful CSS techniques that changed how I write styles — from custom properties to modern layout tricks.',
    slug: 'css-tips',
  },
  {
    id: 5,
    category: 'Python',
    title: 'Python for Beginners: Where I Started',
    excerpt:
      'My honest journey learning Python from zero — the resources, the struggles, and the small wins that kept me going.',
    slug: 'python-for-beginners',
  },
  {
    id: 6,
    category: 'Python',
    title: 'Automating My Life with Python Scripts',
    excerpt:
      'Small automation scripts that save me hours every week — and how you can build your own.',
    slug: 'python-automation',
  },
];

const categories = ['All', 'AI Tools', 'Frontend', 'Python'];

function Tech() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? techArticles
      : techArticles.filter((a) => a.category === activeCategory);

  return (
    <div className='tech-page'>
      {/* Hero */}
      <section className='tech-hero'>
        <div className='tech-hero-container'>
          <p className='tech-eyebrow'>Tech & Learning</p>
          <h1>
            Build. Learn.
            <br />
            <em>Repeat.</em>
          </h1>
          <p>
            Notes from a self-taught frontend developer exploring AI tools,
            writing Python scripts, and building things on the web.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className='tech-content-section'>
        <div className='tech-section-container'>
          {/* Category Filter */}
          <div className='tech-filter-bar'>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tech-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className='tech-article-grid'>
            {filtered.map((article) => (
              <Link
                key={article.id}
                to={`/tech/${article.slug}`}
                className='tech-article-card'
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

export default Tech;
