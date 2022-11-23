import Copyright from '../Copyright/Copyright';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SearchHotelForm from '../SearchForm/SearchHotelForm';
import HotelHeader from './HotelHeader';
import HotelList from './HotelList';

function HotelPage() {
  return (
    <>
      <Navbar />
      <HotelHeader imageLink="portada.webp" imageAlt="Imagen de portada" />
      <div className="relative flex justify-center items-center px-40 w-full">
        <SearchHotelForm />
      </div>
      <main>
        <HotelList />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
export default HotelPage;
