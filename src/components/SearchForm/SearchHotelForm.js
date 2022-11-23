import Search from '@mui/icons-material/Search';
import { useState } from 'react';

function SearchHotelForm() {
  const [destination, setDestination] = useState('');

  function handleChange(ev) {
    const { name, value, type } = ev.target;
    setDestination((prevDestination) => {
      return {
        ...prevDestination,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
    console.log('State has change');
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    console.log('Form has been submitted');
  }

  console.log(destination);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center md:flex-row rounded shadow absolute bg-white w-full h-60 -top-32 p-12"
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
  );
}

export default SearchHotelForm;
