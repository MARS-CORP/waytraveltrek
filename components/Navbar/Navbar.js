import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="p-6 flex justify-between space-x-4 backdrop-blur-lg bg-opacity-30">
      <div className="relative h-16 w-24 md:h-20 md:w-32">
        <Image
          src="/img/logo.webp"
          alt="Waytraveltek logo"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="hidden md:block">
        <ul className="md:mt-6  mr-4 max-w-lg text-lg font-medium text-gray-700 cursor-pointer">
          <li className="inline-block mr-8 hover:text-red-800">
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li className="inline-block mr-8 hover:text-red-800">
            <Link href="/hotels">
              <a>Hoteles</a>
            </Link>
          </li>
          <li className="inline-block mr-8 hover:text-red-800">
            <Link href="#">
              <a>Autos</a>
            </Link>
          </li>
          <li className="inline-block mr-8 hover:text-red-800">
            <Link href="/contact">
              <a>Contacto</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="block md:hidden mt-2">
        <div className="relative w-10 h-10">
          <Image
            src="/img/menu.webp"
            alt="Menu icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
