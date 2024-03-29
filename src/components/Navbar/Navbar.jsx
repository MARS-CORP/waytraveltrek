import Image from "next/image";
import Link from "next/link";
import { navbarItems } from "@utils/constants";
import { useRouter } from "next/router";
import { Close, Segment } from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();
  const activeNavLinkDesktop =
    "bg-yellow-500 ring ring-offset-2 ring-yellow-500 ring-offset-white/90";

  const handleToggleMenu = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <nav className="p-2 sticky top-0 w-full max-h-20 z-30 backdrop-blur-sm bg-white/50 shadow-md">
      <div className="flex justify-between items-center h-full">
        <Link href={"/"}>
          <a>
            <div className="relative w-16 h-16">
              <Image
                src={
                  "https://res.cloudinary.com/waytraveltrek/image/upload/v1677013211/waytraveltrek/logo_jvygjz.png"
                }
                alt="Logo"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </a>
        </Link>
        <ul className="hidden list-none md:flex md:items-center md:justify-center gap-4">
          {navbarItems.map((item) => (
            <li
              className={`font-bold tracking-wide px-3 py-1 rounded-full hover:ring hover:ring-offset-2 hover:ring-yellow-500 hover:ring-offset-white/90 ${
                router.asPath === item.url ? activeNavLinkDesktop : ""
              }`}
              key={item.id}
            >
              <Link href={item.url}>
                <a>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu de navegacion para mobiles */}
        <div className="md:hidden">
          <button onClick={handleToggleMenu} className="block">
            {toggleMenu ? (
              <Close className="cursor-pointer h-10 w-10 animate__animated animate__rollIn" />
            ) : (
              <Segment className="cursor-pointer h-10 w-10 animate__animated animate__rollIn" />
            )}
          </button>
        </div>

        <div
          className={`backdrop-blur-sm bg-white/95 w-64 min-h-screen absolute top-20 right-0 md:hidden shadow-md ${
            toggleMenu
              ? "animate__animated animate__bounceInDown"
              : "animate__animated animate__bounceOutUp"
          }`}
        >
          <ul className="list-none flex flex-col items-center justify-center md:hidden gap-4 mt-10">
            {navbarItems.map((item) => (
              <li
                className={`font-bold text-xl tracking-wide px-2 py-1 transition duration-300 ease-in-out hover:border-b-4 hover:border-b-yellow-500 ${
                  router.asPath === item.url
                    ? "border-b-4 border-b-yellow-500"
                    : " border-b-4 border-b-transparent"
                }`}
                key={item.id}
              >
                <Link href={item.url}>
                  <a>{item.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
