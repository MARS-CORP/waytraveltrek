import Copyright from '../Copyright/Copyright';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import HotelHeader from './HotelHeader';

function HotelPage() {
  return (
    <>
      <Navbar />
      <HotelHeader imageLink="portada.png" imageAlt="Imagen de portada" />
      <main></main>
      <Footer />
      <Copyright />
    </>
  );
}
export default HotelPage;
