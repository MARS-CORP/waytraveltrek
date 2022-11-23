import Image from 'next/image';

function HotelHeader(props) {
  return (
    <div className="text-center">
      <img
        src={`/img/${props.imageLink}`}
        alt={props.imageAlt}
        className="w-full max-h-80 object-cover"
      />
    </div>
  );
}

export default HotelHeader;
