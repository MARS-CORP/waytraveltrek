import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [activeTab, setActiveTab] = useState({
    homeLinkState: true,
    hotelLinkState: false,
    carLinkState: false,
    contactLinkState: false,
  });

  const background =
    'bg-black text-white rounded-3xl inline-block mr-8 hover:bg-black hover:rounded-3xl  px-4 py-2 hover:text-white';

  function handleActive(ev) {
    let target = ev.target;
    setActiveTab((prevState) => {
      // if (target.innerText === 'Inicio') {
      //   return {
      //     ...prevState,
      //     homeLinkState: !prevState.homeLinkState,
      //   };
      // } else if (target.innerText === 'Hoteles') {
      //   return {
      //     ...prevState,
      //     hotelLinkState: !prevState.homeLinkState,
      //   };
      // } else if (target.innerText === 'Autos') {
      //   return {
      //     ...prevState,
      //     carLinkState: !prevState.carLinkState,
      //   };
      // } else {
      //   return {
      //     ...prevState,
      //     contactLinkState: !prevState.contactLinkState,
      //   };
      // }
      return {
        ...prevState,
      };
    });
    console.log(activeTab);
  }

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
          <li
            onClick={handleActive}
            className={
              activeTab.homeLinkState
                ? background
                : 'inline-block mr-8 hover:bg-black hover:rounded-3xl  px-4 py-2 hover:text-white'
            }
          >
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li
            onClick={handleActive}
            className={
              activeTab.hotelLinkState
                ? background
                : 'inline-block mr-8 hover:bg-black hover:rounded-3xl  px-4 py-2 hover:text-white'
            }
          >
            <Link href="/hotels">
              <a>Hoteles</a>
            </Link>
          </li>
          <li
            onClick={handleActive}
            className={
              activeTab.carLinkState
                ? background
                : 'inline-block mr-8 hover:bg-black hover:rounded-3xl  px-4 py-2 hover:text-white'
            }
          >
            <Link href="#">
              <a>Autos</a>
            </Link>
          </li>
          <li
            onClick={handleActive}
            className={
              activeTab.contactLinkState
                ? background
                : 'inline-block mr-8 hover:bg-black hover:rounded-3xl  px-4 py-2 hover:text-white'
            }
          >
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
