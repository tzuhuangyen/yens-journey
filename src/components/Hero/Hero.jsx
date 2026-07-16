import Navbar from '../../layout/Navbar/Navbar';
import hero from '../../assets/hero.png';
import './Hero.css';

function Hero() {
  return (
    <section className='hero'>
      {/* Background Image */}
      <img src={hero} alt='Nordic landscape' className='hero-image' />

      {/* Dark Overlay */}
      <div className='hero-overlay'></div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className='hero-content'>
        <p className='hero-slogan'>
          Explore the World.
          <br />
          Learn Every Day.
        </p>

        <h1 className='hero-logo'>
          YEN <span>Journey</span>
        </h1>

        <h2 className='hero-title'>
          A Journey of Learning,
          <br />
          Travel & Life
        </h2>

        <p className='hero-description'>
          A Taiwanese mother living in Europe,
          <br />
          sharing travel, frontend development, AI and parenting.
        </p>

        <button className='hero-button'>Begin Your Journey →</button>
      </div>
    </section>
  );
}

export default Hero;
