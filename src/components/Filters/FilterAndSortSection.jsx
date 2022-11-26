import React from "react";
import { FilterAlt, Sort } from "@mui/icons-material";

const FilterAndSortSection = () => {
  return (
    <section className="w-full max-h-28 flex justify-between items-center px-6 my-8 md:hidden">
      <button role="button" className="flex justify-center items-center">
        <FilterAlt className="w-6 h-6 text-green-700" />
        <span className="font-semibold tracking-wider">Filtrar</span>
      </button>
      <button role="button" className="flex justify-center items-center">
        <Sort className="w-6 h-6 text-blue-700" />
        <span className="font-semibold tracking-wider">Ordenar</span>
      </button>
    </section>
  );
};

export { FilterAndSortSection };
