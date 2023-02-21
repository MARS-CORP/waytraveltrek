import { Header } from "@components/HeaderSection/Header";
import { OurServices } from "@components/OurServices/OurServices";
import { Destination } from "@components/DestinationSection/Destination";
import { RecommendedHotelList } from "@components/Hotel/RecommendedHotelList";
import { RecommendedCars } from "@components/Cars/RecommendedCars";
import { AcceptedPayments } from "@components/Payment/AcceptedPayments";
import HeroToLeft from "../HeroSection/HeroToLeft";
import HeroToRight from "../HeroSection/HeroToRight";
import { SectionTitle } from "@components/SectionTitle/SectionTitle";

const Home = () => {
  return (
    <>
      <Header />
      <main className="lg:max-w-screen-2xl mx-auto">
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

export { Home };
