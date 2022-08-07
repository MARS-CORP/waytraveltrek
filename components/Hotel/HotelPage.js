import Copyright from '../Copyright/Copyright';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import HotelHeader from './HotelHeader';
import HotelList from './HotelList';

function HotelPage() {
  return (
    <>
      <Navbar />
      <HotelHeader imageLink="portada.png" imageAlt="Imagen de portada" />
      <main>
        <HotelList />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
export default HotelPage;
