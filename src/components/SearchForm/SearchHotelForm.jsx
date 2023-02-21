import Search from "@mui/icons-material/Search";
import { useState } from "react";

const SearchHotelForm = () => {
  const [destination, setDestination] = useState("");

  function handleChange(ev) {
    const { name, value, type, checked } = ev.target;
    setDestination((destination) => {
      return {
        ...destination,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <section className="relative flex justify-center items-center px-40 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center md:flex-row rounded shadow absolute backdrop-blur-sm bg-white/60 w-full max-h-60 bottom-20 px-10 py-4"
      >
        <input
          type="text"
          name="destination"
          className="rounded-full py-4 px-2 h-16 placeholder:text-slate-600 placeholder:font-semibold mb-6 md:mb-0 w-full font-semibold text-xl border-2"
          id="destinationInput"
          onChange={handleChange}
          placeholder="Busque su destino"
        />
        <button
          type="submit"
          className="bg-white rounded-full font-semibold text-xl p-4 md:hidden h-16 border"
        >
          <p>
            Buscar <Search />
          </p>
        </button>
        <button
          type="submit"
          className="bg-white rounded-full font-semibold text-xl hidden md:flex md:items-center md:justify-center h-16 w-16 ml-2 border"
        >
          <span>
            <Search />
          </span>
        </button>
      </form>
    </section>
  );
};

export { SearchHotelForm };
