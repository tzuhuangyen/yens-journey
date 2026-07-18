import { Link } from 'react-router-dom';
import './About.css';

const journey = [
  { label: 'From Taiwan', desc: 'Born and raised in Taiwan' },
  { label: 'Move to Europe', desc: 'A new chapter begins in Budapest' },
  { label: 'Frontend Developer', desc: 'Building things for the web' },
  { label: 'AI Enthusiast', desc: 'Exploring what AI can do' },
  { label: 'Mother', desc: 'The most important role of all' },
  { label: 'YEN Journey', desc: 'Sharing it all, one story at a time' },
];

const writings = [
  {
    category: 'Travel',
    title: 'Explore Europe',
    desc: 'Stories, guides, and slow travel notes from across the continent.',
    to: '/travel',
  },
  {
    category: 'Tech',
    title: 'Learn New Technology',
    desc: 'Frontend development, AI tools, and things I build along the way.',
    to: '/tech',
  },
  {
    category: 'Parenting',
    title: 'Growing Together',
    desc: 'Raising a child in Europe — the joys, the chaos, and the small moments.',
    to: '/parenting',
  },
];

const values = [
  { word: 'Curiosity', emoji: '🔍' },
  { word: 'Learning', emoji: '📖' },
  { word: 'Sharing', emoji: '🌿' },
  { word: 'Kindness', emoji: '🤍' },
];

function About() {
  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-eyebrow">About</p>
          <h1>A Taiwanese mother<br /><em>living in Europe.</em></h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="about-intro-section">
        <div className="about-container">
          <div className="about-intro-text">
            <h2>Hi, I'm Yen.</h2>
            <p>
              Welcome to YEN Journey, where I share my experiences of traveling
              across Europe, learning new technologies, building web applications,
              and embracing motherhood. This is not a polished magazine — it's a
              living journal of curiosity, growth, and the beautiful messiness of
              life across cultures.
            </p>
          </div>
        </div>
      </section>

      {/* ── My Story ── */}
      <section className="about-story-section">
        <div className="about-container about-story-grid">

          {/* Left: Photo placeholder */}
          <div className="about-story-photo">
            <div className="about-photo-placeholder">
              <span>Your Photo</span>
            </div>
          </div>

          {/* Right: Journey Timeline */}
          <div className="about-story-timeline">
            <p className="about-eyebrow">My Story</p>
            <h2>How I got here</h2>
            <div className="about-timeline">
              {journey.map((step, i) => (
                <div className="about-timeline-item" key={i}>
                  <div className="about-timeline-dot" />
                  <div>
                    <strong>{step.label}</strong>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── What I Write ── */}
      <section className="about-writing-section">
        <div className="about-container">
          <div className="about-section-heading">
            <p className="about-eyebrow">What I Write</p>
            <h2>Stories worth sharing</h2>
          </div>
          <div className="about-writing-grid">
            {writings.map((item) => (
              <Link to={item.to} className="about-writing-card" key={item.category}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── My Values ── */}
      <section className="about-values-section">
        <div className="about-container">
          <div className="about-section-heading">
            <p className="about-eyebrow">My Values</p>
            <h2>What drives me</h2>
          </div>
          <div className="about-values-grid">
            {values.map((v) => (
              <div className="about-value-item" key={v.word}>
                <span className="about-value-emoji">{v.emoji}</span>
                <strong>{v.word}</strong>
              </div>
            ))}
          </div>
          <p className="about-values-quote">
            "I believe learning never stops, and every journey is worth sharing."
          </p>
        </div>
      </section>

      {/* ── Let's Connect ── */}
      <section className="about-connect-section">
        <div className="about-container">
          <div className="about-section-heading">
            <p className="about-eyebrow">Let's Connect</p>
            <h2>Find me here</h2>
          </div>
          <div className="about-connect-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="about-connect-btn">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="about-connect-btn">
              LinkedIn
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="about-connect-btn">
              Instagram
            </a>
            <a href="mailto:hello@yenjourney.com" className="about-connect-btn">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta-section">
        <div className="about-container about-cta-inner">
          <p className="about-eyebrow">Ready to Explore?</p>
          <h2>Begin Your Journey</h2>
          <Link to="/travel" className="about-cta-button">
            Start Exploring
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;
