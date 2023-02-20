import { SearchHotelForm } from "@components/SearchForm/SearchHotelForm";
import { HotelHeader } from "@components/Hotel/HotelHeader";
import { HotelList } from "@components/Hotel/HotelList";
import { FilterAndSortSection } from "@components/Filters/FilterAndSortSection";
import { FilterHotelsDesktop } from "@components/Filters/FilterHotelsDesktop";
import { FilterHotelsMobile } from "@components/Filters/FilterHotelsMobile";
import { ModalFilter } from "@components/Modal/ModalFilter";
import { useState } from "react";
import { CloseModal } from "@components/Modal/CloseModal";

const HotelPage = ({ hotels }) => {
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <HotelHeader imageLink="portada.webp" imageAlt="Imagen de portada" />
      <SearchHotelForm />
      <main className="md:grid md:grid-cols-3 px-1">
        <FilterAndSortSection setMounted={setMounted} />
        <FilterHotelsDesktop />
        <ModalFilter mounted={mounted}>
          <CloseModal setMounted={setMounted} />
          <FilterHotelsMobile />
        </ModalFilter>
        <HotelList hotels={hotels} />
      </main>
    </>
  );
};
export { HotelPage };
