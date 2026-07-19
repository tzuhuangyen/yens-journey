import Hero from '../../components/Hero/Hero';
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories';
import LatestPosts from '../../components/LatestPosts/LatestPosts';
import AboutPreview from '../../components/AboutPreview/AboutPreview';
import TravelInspiration from '../../components/TravelInspiration/TravelInspiration';
import NewsletterCTA from '../../components/NewsletterCTA/NewsletterCTA';
import Footer from '../../layout/Footer/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <LatestPosts />
      <AboutPreview />
      <TravelInspiration />
      <NewsletterCTA />
    </>
  );
}

export default HomePage;
