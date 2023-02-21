import Image from "next/image";
import Link from "next/link";
import { navbarItems } from "@utils/constants";
import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 border-t mt-20 gap-4 py-10 text-center md:text-left">
      <div className="mx-auto mb-4">
        <Link href={"/"}>
          <a>
            <div className="relative w-36 h-32">
              <Image
                src={`https://res.cloudinary.com/waytraveltrek/image/upload/v1677013211/waytraveltrek/logo_jvygjz.png`}
                alt="Imagen del logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="mx-auto mb-4">
        <h3 className="font-bold text-2xl mb-2">Nuestros Servicios</h3>
        <ul className="list-none">
          {navbarItems.map((item) => (
            <li
              className="text-slate-900 font-semibold text-lg tracking-wide transition duration-300 ease-in-out hover:text-slate-600 hover:underline hover:underline-offset-2"
              key={item.id}
            >
              <Link href={item.url}>
                <a>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mb-4">
        <h3 className="font-bold text-2xl mb-2">Cont&aacute;ctenos</h3>
        <ul className="text-slate-900 font-semibold text-lg tracking-wide">
          <li className="inline-block">
            <Link href="/contact">
              {/* <div className="relative w-12 h-12">
                <Image
                  src={`/img/email.webp`}
                  alt="email icon"
                  layout="fill"
                  objectFit="cover"
                />
              </div> */}
              <a>
                <Email className="w-8 h-8 transition duration-300 ease-in-out hover:text-violet-600" />
              </a>
            </Link>
          </li>
          <li className="inline-block ml-4">
            <Link href="/contact">
              {/* <div className="relative w-12 h-12">
                <Image
                  src={`/img/fb.webp`}
                  alt="facebook icon"
                  layout="fill"
                  objectFit="cover"
                />
              </div> */}
              <a>
                <Facebook className="w-8 h-8 transition duration-300 ease-in-out hover:text-blue-700" />
              </a>
            </Link>
          </li>
          <li className="inline-block ml-4">
            <Link href="/contact">
              {/* <div className="relative w-12 h-12">
                <Image
                  src={`/img/insta.webp`}
                  alt="instagram icon"
                  layout="fill"
                  objectFit="cover"
                />
              </div> */}
              <a>
                <Instagram className="w-8 h-8 transition duration-300 ease-in-out hover:text-pink-600" />
              </a>
            </Link>
          </li>
          <li className="inline-block ml-4">
            <Link href="/contact">
              {/* <div className="relative w-12 h-12">
                <Image
                  src={`/img/tw.webp`}
                  alt="twitter icon"
                  layout="fill"
                  objectFit="cover"
                />
              </div> */}
              <a>
                <Twitter className="w-8 h-8 transition duration-300 ease-in-out hover:text-cyan-600" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
