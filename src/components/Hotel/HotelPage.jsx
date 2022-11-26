import { SearchHotelForm } from "@components/SearchForm/SearchHotelForm";
import { HotelHeader } from "@components/Hotel/HotelHeader";
import { HotelList } from "@components/Hotel/HotelList";
import { FilterAndSortSection } from "@components/Filters/FilterAndSortSection";
import { FilterHotelsDesktop } from "@components/Filters/FilterHotelsDesktop";

const HotelPage = () => {
  return (
    <>
      <HotelHeader imageLink="portada.webp" imageAlt="Imagen de portada" />
      <SearchHotelForm />
      <main className="md:grid md:grid-cols-3 px-1">
        <FilterAndSortSection />
        <FilterHotelsDesktop />
        <HotelList />
      </main>
    </>
  );
};
export { HotelPage };
