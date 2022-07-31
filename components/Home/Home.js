import RecommendedCars from '../Cars/RecommendedCars';
import Cars from '../Cars/RecommendedCars';
import Destination from '../DestinationSection/Destination';
import Header from '../HeaderSection/Header';
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
        <SectionTitle sectionTitle="Hoteles recomendados" />
        <RecommendedHotelList />
        <SectionTitle sectionTitle="Autos recomendados" />
        <RecommendedCars />
        <SectionTitle sectionTitle="Experiencias recomendadas" />
      </main>
    </>
  );
}
// flex flex-row overflow-x-scroll md:grid md:grid-cols-3 md:gap-4 lg:overflow-x-hidden

export default Home;
