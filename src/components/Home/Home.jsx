import { Header } from "@components/HeaderSection/Header";
import { OurServices } from "@components/OurServices/OurServices";
import { Destination } from "@components/DestinationSection/Destination";
import { RecommendedHotelList } from "@components/Hotel/RecommendedHotelList";
import { RecommendedCars } from "@components/Cars/RecommendedCars";
import HeroCenter from "../HeroSection/HeroCenter";
import HeroToLeft from "../HeroSection/HeroToLeft";
import HeroToRight from "../HeroSection/HeroToRight";
import Hero from "../HeroSection/HeroToRight";
import Navbar from "../Navbar/Navbar";
import AcceptedPayments from "../Payment/AcceptedPayments";
import SectionTitle from "../SectionTitle/SectionTitle";

const Home = ({ destinations }) => {
  console.log(destinations);
  return (
    <>
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
        {/* <HeroCenter title="Un camino, mil destinos" /> */}
        <SectionTitle sectionTitle="M&eacute;todos de pago aceptados" />
        <AcceptedPayments />
      </main>
    </>
  );
};
// flex flex-row overflow-x-scroll md:grid md:grid-cols-3 md:gap-4 lg:overflow-x-hidden

export { Home };
