import SearchHotelForm from "../SearchForm/SearchHotelForm";
import HotelHeader from "./HotelHeader";
import HotelList from "./HotelList";

const HotelPage = () => {
  return (
    <>
      <HotelHeader imageLink="portada.webp" imageAlt="Imagen de portada" />
      <div className="relative flex justify-center items-center px-40 w-full">
        <SearchHotelForm />
      </div>
      <main>
        <HotelList />
      </main>
    </>
  );
};
export { HotelPage };
