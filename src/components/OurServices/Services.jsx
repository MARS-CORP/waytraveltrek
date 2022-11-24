import Image from "next/image";

function Services({ item }) {
  return (
    <div className="relative max-w-xs md:max-w-lg max-h-80 rounded-xl shadow-lg shrink-0 overflow-hidden cursor-pointer">
      <div className="relative h-60 w-80">
        <Image
          src={`/img/${item.imageUrl}`}
          alt={item.imageAlt}
          layout="fill"
          objectFit="cover"
          className="brightness-90 transition duration-700 hover:brightness-50 hover:scale-110"
        />
      </div>
      <div className="flex justify-center items-center bg-gradient-to-r from-yellow-500 to-orange-500 absolute bottom-0 w-full h-16 text-black font-bold text-xl">
        <p>{item.serviceName}</p>
      </div>
    </div>
  );
}
export default Services;
