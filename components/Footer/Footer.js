import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-3 border-t mt-20 gap-4 py-10 text-center lg:text-left">
      <div className="mx-auto mb-4">
        <Image
          src={`/img/logo.webp`}
          alt="Imagen del logo"
          width={250}
          height={150}
          layout="fixed"
          className="object-cover"
        />
      </div>
      <div className="mx-auto mb-4">
        <h4 className="font-bold text-xl mb-2">Nuestros Servicios</h4>
        <ul className="text-slate-500">
          <li>
            <Link href="/hotels">
              <a>Hoteles</a>
            </Link>
          </li>
          <li>
            <Link href="/cars">
              <a>Autos de renta</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto mb-4">
        <h4 className="font-bold text-xl mb-2">Cont&aacute;ctenos</h4>
        <ul className="text-slate-500">
          <li className="inline-block">
            <Link href="/contact">
              <Image
                src={`/img/email.webp`}
                alt="email icon"
                width={48}
                height={48}
              />
            </Link>
          </li>
          <li className="inline-block ml-4">
            <Link href="/contact">
              <Image
                src={`/img/fb.webp`}
                alt="facebook icon"
                width={48}
                height={48}
              />
            </Link>
          </li>
          <li className="inline-block ml-4">
            <Link href="/contact">
              <Image
                src={`/img/insta.webp`}
                alt="instagram icon"
                width={48}
                height={48}
              />
            </Link>
          </li>
          <li className="inline-block ml-4">
            <Link href="/contact">
              <Image
                src={`/img/tw.webp`}
                alt="twitter icon"
                width={48}
                height={48}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
