import Image from "next/image";

const HotelHeader = (props) => {
  return (
    <div className="text-center w-full h-screen">
      <div className="relative w-full h-full">
        <Image
          src={props.imageLink}
          alt={props.imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export { HotelHeader };
