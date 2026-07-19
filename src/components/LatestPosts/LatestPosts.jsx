import { Link } from 'react-router-dom';
import './LatestPosts.css';

const posts = [
  {
    id: 1,
    category: 'Travel',
    title: '10 Days in the Swiss Alps: A Complete Guide',
    excerpt: '瑞士阿爾卑斯山的完整旅行攻略，從交通到住宿一次搞定。',
    date: 'May 20, 2026',
    path: '/travel/swiss-alps',
  },
  {
    id: 2,
    category: 'Tech',
    title: "What I'm Learning About Web Development",
    excerpt: '從零開始的前端學習之路，記錄每一個突破與成長。',
    date: 'May 15, 2026',
    path: '/tech/web-dev-journey',
  },
  {
    id: 3,
    category: 'Parenting',
    title: 'A Day in My Life as a Mom & Developer',
    excerpt: '在歐洲當媽媽同時自學程式，如何找到屬於自己的平衡。',
    date: 'May 10, 2026',
    path: '/parenting/mom-developer-life',
  },
  {
    id: 4,
    category: 'Travel',
    title: 'Weekend Getaway in Hallstatt, Austria',
    excerpt: '奧地利哈修塔特一日遊，走進童話般的湖邊小鎮。',
    date: 'May 5, 2026',
    path: '/travel/hallstatt',
  },
];

function LatestPosts() {
  return (
    <section className='latest-posts'>
      <div className='lp-container'>
        <div className='lp-header'>
          <div>
            <p className='lp-eyebrow'>Latest Posts</p>
            <h2 className='lp-title'>最新文章</h2>
          </div>
          <Link to='/travel' className='lp-view-all'>
            View All Posts →
          </Link>
        </div>

        <div className='lp-grid'>
          {posts.map((post) => (
            <Link to={post.path} key={post.id} className='lp-card'>
              <div className='lp-card-body'>
                <span className='lp-category'>{post.category}</span>
                <h3 className='lp-card-title'>{post.title}</h3>
                <p className='lp-card-excerpt'>{post.excerpt}</p>
              </div>
              <p className='lp-date'>{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
