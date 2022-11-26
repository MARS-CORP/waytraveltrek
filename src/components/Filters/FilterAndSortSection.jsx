import React from "react";
import { FilterAlt, Sort } from "@mui/icons-material";

const FilterAndSortSection = ({ setMounted }) => {
  const handleOpen = () => {
    setMounted((prevState) => (prevState = true));
  };

  return (
    <section className="w-full max-h-28 flex justify-between items-center px-6 my-8 md:hidden">
      <button
        onClick={handleOpen}
        role="button"
        className="flex justify-center items-center transition duration-300 ease-in-out hover:bg-slate-100 p-2 rounded-md"
      >
        <FilterAlt className="w-6 h-6 text-green-700" />
        <span className="font-semibold tracking-wider">Filtrar</span>
      </button>
      <button
        role="button"
        className="flex justify-center items-center transition duration-300 ease-in-out hover:bg-slate-100 p-2 rounded-md"
      >
        <Sort className="w-6 h-6 text-blue-700" />
        <span className="font-semibold tracking-wider">Ordenar</span>
      </button>
    </section>
  );
};

export { FilterAndSortSection };
