import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="p-6 flex justify-between space-x-4 backdrop-blur-lg bg-opacity-30">
      <div>
        <Image
          src="/img/logo.webp"
          alt="Waytraveltek logo"
          width={120}
          height={70}
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
            <Link href="/cars">
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
        <Image src="/img/menu.webp" alt="Menu icon" width={50} height={50} />
      </div>
    </div>
  );
}

export default Navbar;
