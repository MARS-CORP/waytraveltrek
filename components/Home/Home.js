import RecommendedCars from '../Cars/RecommendedCars';
import Copyright from '../Copyright/Copyright';
import Destination from '../DestinationSection/Destination';
import Footer from '../Footer/Footer';
import Header from '../HeaderSection/Header';
import HeroToLeft from '../HeroSection/HeroToLeft';
import HeroToRight from '../HeroSection/HeroToRight';
import Hero from '../HeroSection/HeroToRight';
import RecommendedHotelList from '../Hotel/RecommendedHotelList';
import Navbar from '../Navbar/Navbar';
import OurServices from '../OurServices/OurServices';
import SectionTitle from '../SectionTitle/SectionTitle';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <SectionTitle sectionTitle="Nuestros servicios" />
        <OurServices />
        <SectionTitle sectionTitle="Destinos inolvidables" />
        <Destination />
        <HeroToLeft title="Vive experiencias unicas" />
        <SectionTitle sectionTitle="Hoteles recomendados" />
        <RecommendedHotelList />
        <HeroToRight title="Un camino por descubrir" />
        <SectionTitle sectionTitle="Autos recomendados" />
        <RecommendedCars />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
// flex flex-row overflow-x-scroll md:grid md:grid-cols-3 md:gap-4 lg:overflow-x-hidden

export default Home;
