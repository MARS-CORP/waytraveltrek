import Image from "next/image";

const HotelHeader = (props) => {
  return (
    <div className="text-center">
      <img
        src={`/img/${props.imageLink}`}
        alt={props.imageAlt}
        className="w-full max-h-80 object-cover"
      />
    </div>
  );
};

export { HotelHeader };
