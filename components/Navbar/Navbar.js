import Image from 'next/image';

function Navbar() {
  return (
    <div className="p-6 flex justify-between space-x-4">
      <div>
        <Image
          src="https://res.cloudinary.com/waytraveltrek/image/upload/v1644211934/waytraveltrek/logo/Logo_WayTravelTrek_fwjpjv.png"
          alt="Waytraveltek logo"
          width={120}
          height={70}
          priority
        />
      </div>
      <div className="hidden md:block">
        <ul className="md:mt-6  mr-4 max-w-lg text-lg font-medium text-gray-700 cursor-pointer">
          <li className="inline-block mr-8 hover:text-red-800">Inicio</li>
          <li className="inline-block mr-8 hover:text-red-800">Hoteles</li>
          <li className="inline-block mr-8 hover:text-red-800">Autos</li>
          <li className="inline-block mr-8 hover:text-red-800">Contacto</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
