import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-3 border-t mt-20 gap-4 py-10 text-center lg:text-left">
      <div className="mx-auto mb-4">
        <div className="relative w-36 h-32">
          <Image
            src={`/img/logo.webp`}
            alt="Imagen del logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="mx-auto mb-4">
        <h3 className="font-bold text-2xl mb-2">Nuestros Servicios</h3>
        <ul className="text-slate-700 font-semibold text-lg tracking-wide">
          <li className="mb-2">
            <Link href="/hotels">
              <a>Hoteles</a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/cars">
              <a>Autos de renta</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto mb-4">
        <h3 className="font-bold text-2xl mb-2">Cont&aacute;ctenos</h3>
        <ul className="text-slate-700 font-semibold text-lg tracking-wide">
          <li className="inline-block">
            <Link href="/contact">
              <div className="relative w-12 h-12">
                <Image
                  src={`/img/email.webp`}
                  alt="email icon"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
          </li>
          <li className="inline-block ml-4">
            <Link href="/contact">
              <div className="relative w-12 h-12">
                <Image
                  src={`/img/fb.webp`}
                  alt="facebook icon"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
          </li>
          <li className="inline-block ml-4">
            <Link href="/contact">
              <div className="relative w-12 h-12">
                <Image
                  src={`/img/insta.webp`}
                  alt="instagram icon"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
          </li>
          <li className="inline-block ml-4">
            <Link href="/contact">
              <div className="relative w-12 h-12">
                <Image
                  src={`/img/tw.webp`}
                  alt="twitter icon"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
