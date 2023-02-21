import { Remove, Star } from "@mui/icons-material";
import React from "react";

const FilterHotelsMobile = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-screen rounded-lg bg-slate-50 shadow-md p-4 z-40 animate__animated animate__fadeInDownBig">
      <div className="border-b-2 border-b-slate-500 py-2">
        <h3 className="font-semibold tracking-wider uppercase text-center">
          Filtros
        </h3>
      </div>

      <form className="mt-8">
        <h4 className="font-bold tracking-wide uppercase">Precio</h4>
        <div className="border-b-2 border-b-slate-500 py-4 grid grid-cols-5 gap-2 w-full">
          <div className="col-span-2">
            <label htmlFor="minPrice" className="sr-only">
              Price
            </label>
            <input
              type="text"
              className="mx-auto text-center rounded-md border border-slate-600 w-full shadow-md"
              id="minPrice"
              name="minPrice"
              placeholder="min"
            />
          </div>

          <div className="col-span-1 mx-auto">
            <Remove />
          </div>

          <div className="col-span-2">
            <label htmlFor="maxPrice" className="sr-only">
              Price
            </label>
            <input
              type="text"
              className="mx-auto text-center rounded-md border border-slate-600 w-full shadow-md"
              id="maxPrice"
              name="maxPrice"
              placeholder="max"
            />
          </div>
        </div>

        <h4 className="font-bold tracking-wide uppercase">Categor&iacute;a</h4>
        <div className="border-b-2 border-b-slate-500 py-4">
          <ul className="list-none grid grid-cols-3 gap-4">
            <li className="cursor-pointer bg-slate-200 transition duration-300 ease-in-out hover:bg-slate-900 hover:text-white rounded-md flex justify-center items-center p-1">
              <span className="font-bold">3</span>
              <Star className="text-yellow-500 w-5 h-5" />
            </li>
            <li className="cursor-pointer bg-slate-200 transition duration-300 ease-in-out hover:bg-slate-900 hover:text-white rounded-md flex justify-center items-center p-1">
              <span className="font-bold">4</span>
              <Star className="text-yellow-500 w-5 h-5" />
            </li>
            <li className="cursor-pointer bg-slate-200 transition duration-300 ease-in-out hover:bg-slate-900 hover:text-white rounded-md flex justify-center items-center p-1">
              <span className="font-bold">5</span>
              <Star className="text-yellow-500 w-5 h-5" />
            </li>
          </ul>
        </div>

        <h4 className="font-bold tracking-wide uppercase">Restricciones</h4>
        <div className="border-b-2 border-b-slate-500 py-4">
          <div className="">
            <label className="flex items-center" htmlFor="familyFriendly">
              <input
                type="checkbox"
                name="familyFriendly"
                value="familyFriendly"
              />
              <span className="ml-1">Todas las edades</span>
            </label>
          </div>
          <div className="">
            <label className="flex items-center" htmlFor="onlyAdults">
              <input type="checkbox" name="onlyAdults" value="solo adultos" />
              <span className="ml-1">Solo adultos</span>
            </label>
          </div>
          <div className="">
            <label className="flex items-center" htmlFor="petFriendly">
              <input type="checkbox" name="petFriendly" value="petFriendly" />
              <span className="ml-1">Amigable con mascotas</span>
            </label>
          </div>
          <div className="">
            <label className="flex items-center" htmlFor="gaysOnly">
              <input type="checkbox" name="gaysOnly" value="gaysOnly" />
              <span className="ml-1">Solo LGBTQ+</span>
            </label>
          </div>
        </div>

        <h4 className="font-bold tracking-wide uppercase">Tipo</h4>
        <div className="border-b-2 border-b-slate-500 py-4">
          <div className="">
            <label className="flex items-center" htmlFor="sunBeach">
              <input type="checkbox" name="sunBeach" value="sunBeach" />
              <span className="ml-1">Sol y playa</span>
            </label>
          </div>
          <div className="">
            <label className="flex items-center" htmlFor="city">
              <input type="checkbox" name="city" value="city" />
              <span className="ml-1">Ciudad</span>
            </label>
          </div>
          <div className="">
            <label className="flex items-center" htmlFor="nature">
              <input type="checkbox" name="nature" value="nature" />
              <span className="ml-1">Naturaleza y campos</span>
            </label>
          </div>
        </div>

        <h4 className="font-bold tracking-wide uppercase">
          Caracter&iacute;sticas de alojamiento
        </h4>
        <div className="border-b-2 border-b-slate-500 py-4">
          <div className="">
            <label className="flex items-center" htmlFor="allInclusive">
              <input type="checkbox" name="allInclusive" value="allInclusive" />
              <span className="ml-1">Todo inclu&iacute;do</span>
            </label>
          </div>
          <div className="">
            <label
              className="flex items-center"
              htmlFor="onlyBreakfastInclusive"
            >
              <input
                type="checkbox"
                name="onlyBreakfastInclusive"
                value="onlyBreakfastInclusive"
              />
              <span className="ml-1">S&oacute;lo desayuno</span>
            </label>
          </div>
          <div className="">
            <label className="flex items-center" htmlFor="byOrder">
              <input type="checkbox" name="byOrder" value="byOrder" />
              <span className="ml-1">S&oacute;lo pedido a la carta</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export { FilterHotelsMobile };
