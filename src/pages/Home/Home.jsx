import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

import './Home.css';

function Home() {
  return (
    <main className='container py-5'>
      <h1>YEN Journey</h1>

      <p>Explore the World.</p>
      <p>Learn Every Day.</p>

      <h2>
        A Journey of
        Learning, Travel & Life
      </h2>

      <p>一位住在歐洲的台灣媽媽， 分享旅行、前端開發、AI與育兒生活。</p>

      <button className='btn btn-dark'>Begin Your Journey</button>
    </main>
  );
}

export default Home;
