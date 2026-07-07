import Hero from '../../components/Hero/Hero';

function Home() {
  // 使用簡單的內聯樣式，避免需要 import CSS 檔案
  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
  };

  const introStyle = {
    padding: '5rem 1.5rem',
    textAlign: 'center',
    backgroundColor: 'white',
    borderTop: '1px solid #e2e8f0',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontFamily: '"Inter", sans-serif',
    fontSize: '2rem',
    color: '#0f172a',
    marginBottom: '1rem',
    letterSpacing: '-0.04em',
    fontWeight: '700',
  };

  const textStyle = {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1.1rem',
    lineStyle: '1.7',
    color: '#475569',
  };

  return (
    <div style={pageStyle}>
      <Hero />

      <section style={introStyle}>
        <div style={containerStyle}>
          <h2 style={titleStyle}>Welcome to Yen’s Journey</h2>
          <p style={textStyle}>
            Exploring the world through travel, diving deep into AI and Frontend
            development, and sharing honest notes on parenting across borders.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
