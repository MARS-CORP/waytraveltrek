import Image from 'next/image';

function Header() {
  return (
    <div className="text-center relative h-screen w-full flex items-center justify-center lg:justify-start">
      <Image
        src="/img/portada.webp"
        alt="Imagen de portada del sitio web"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
        priority
      />
      <div className="absolute lg:left-8">
        <div className="font-semibold text-yellow-500 mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
            WayTravelTrek
          </h1>
          <span className="text-xl sm:text-2xl lg:text-3xl">
            Tu mejor amigo al viajar
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
