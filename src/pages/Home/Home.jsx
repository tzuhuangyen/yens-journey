import Hero from '../../components/Hero/Hero';
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories';
import LatestPosts from '../../components/LatestPosts/LatestPosts';
import AboutPreview from '../../components/AboutPreview/AboutPreview';
import TravelInspiration from '../../components/TravelInspiration/TravelInspiration';
import NewsletterCTA from '../../components/NewsletterCTA/NewsletterCTA';
import Footer from '../../layout/Footer/Footer';
import FlightSearchCTA from '../../components/FlightSearchCTA/FlightSearchCTA';
function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <LatestPosts />
      <AboutPreview />
      <TravelInspiration />
      <FlightSearchCTA />
      <NewsletterCTA />
    </>
  );
}

export default HomePage;
