import Image from 'next/image';

function Services({ item }) {
  return (
    <div className="relative max-w-xs md:max-w-lg max-h-80 rounded-xl shadow-md shrink-0 overflow-hidden">
      <Image
        src={`/img/${item.imageUrl}`}
        alt={item.imageAlt}
        width={320}
        height={240}
        className="object-cover"
      />
      <div className="flex justify-center items-center bg-pink-900 absolute bottom-0 w-full h-16 text-white font-semibold text-xl">
        <p>{item.serviceName}</p>
      </div>
    </div>
  );
}
export default Services;
