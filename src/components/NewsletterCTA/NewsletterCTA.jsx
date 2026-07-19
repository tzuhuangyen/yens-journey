import { useState } from 'react';
import './NewsletterCTA.css';

function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className='newsletter-cta'>
      <div className='nl-container'>
        {/* Left */}
        <div className='nl-left'>
          <p className='nl-eyebrow'>Newsletter</p>
          <h2 className='nl-title'>Let's stay in touch!</h2>
          <p className='nl-desc'>訂閱電子報，獲得最新文章與旅遊靈感。</p>

          {submitted ? (
            <p className='nl-success'>🎉 感謝訂閱！我們會盡快與你聯繫。</p>
          ) : (
            <form className='nl-form' onSubmit={handleSubmit}>
              <input
                type='email'
                placeholder='Your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='nl-input'
                required
              />
              <button type='submit' className='nl-button'>
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Right - Benefits */}
        <div className='nl-right'>
          {[
            { icon: '📰', label: 'New Articles', sub: '最新文章通知' },
            { icon: '💡', label: 'Exclusive Tips', sub: '實用技巧與資源' },
            { icon: '🌍', label: 'Real Stories', sub: '真實故事分享' },
          ].map((item) => (
            <div key={item.label} className='nl-benefit'>
              <span className='nl-benefit-icon'>{item.icon}</span>
              <div>
                <p className='nl-benefit-label'>{item.label}</p>
                <p className='nl-benefit-sub'>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsletterCTA;
