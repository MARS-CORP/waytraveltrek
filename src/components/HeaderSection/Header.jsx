import Image from "next/image";

const Header = () => {
  return (
    <header className="text-center relative h-screen w-full flex items-center justify-center md:grid md:grid-cols-3">
      <div className="relative w-full h-full md:col-span-2 md:rounded-md md:overflow-hidden">
        <Image
          src="/img/portada.webp"
          alt="Imagen de portada del sitio web"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />
      </div>
      <div className="absolute md:col-span-1 md:static md:h-full md:flex md:justify-center md:items-center">
        <div className="font-semibold text-yellow-500 mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-4xl">WayTravelTrek</h1>
          <span className="text-xl sm:text-2xl md:text-xl">
            Tu mejor amigo al viajar
          </span>
        </div>
      </div>
    </header>
  );
};

export { Header };
