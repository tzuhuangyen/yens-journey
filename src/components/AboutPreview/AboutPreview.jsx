import { Link } from 'react-router-dom';
import './AboutPreview.css';

const values = [
  { icon: '🌍', label: 'Explore', sub: '探索世界' },
  { icon: '📖', label: 'Learn', sub: '持續學習' },
  { icon: '✨', label: 'Share', sub: '分享知識' },
  { icon: '💛', label: 'Inspire', sub: '啟發他人' },
];

function AboutPreview() {
  return (
    <section className='about-preview'>
      <div className='ap-container'>
        {/* Left */}
        <div className='ap-left'>
          <p className='ap-eyebrow'>About Yen's Journey</p>
          <h2 className='ap-title'>
            Hi, I'm Yen.
          </h2>
          <p className='ap-body'>
            一位旅居歐洲的台灣媽媽與自學工程師。
            <br />
            旅行讓我們自由，學習讓我們成長，
            <br />
            分享讓這個世界變得更美好。
          </p>
          <Link to='/about' className='ap-button'>
            Read My Story →
          </Link>
        </div>

        {/* Right */}
        <div className='ap-right'>
          <div className='ap-values'>
            {values.map((v) => (
              <div key={v.label} className='ap-value-item'>
                <span className='ap-value-icon'>{v.icon}</span>
                <div>
                  <p className='ap-value-label'>{v.label}</p>
                  <p className='ap-value-sub'>{v.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
