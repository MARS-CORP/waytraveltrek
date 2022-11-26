import Image from "next/image";

const HotelHeader = (props) => {
  return (
    <header className="text-center w-full h-screen">
      <div className="relative w-full h-full">
        <Image
          src={`/img/${props.imageLink}`}
          alt={props.imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </header>
  );
};

export { HotelHeader };
