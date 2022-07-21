import Image from 'next/image';

function Services({ item }) {
  return (
    // relative max-w-xs max-h-96 rounded-xl overflow-hidden shadow-xl shrink-0 grow-0 md:w-full md:flex-col md:items-center md:justify-center mr-4
    <div className="relative max-w-xs md:max-w-lg max-h-80 rounded-xl shadow-md shrink-0 overflow-hidden">
      <Image
        src={`/img/${item.imageUrl}`}
        alt={item.imageAlt}
        width={320}
        height={240}
        className="object-cover"
      />
      {/* text-white font-semibold absolute bg-pink-900 bottom-0 w-full h-16 text-center p-2 */}
      <div className="flex justify-center items-center bg-pink-900 absolute bottom-0 w-full h-16 text-white font-semibold text-xl">
        <p>{item.serviceName}</p>
      </div>
    </div>

    // <div className="relative max-w-xs max-h-96 rounded-xl overflow-hidden my-8 shrink-0 grow-0 mr-4 md:w-full md:flex md:flex-col md:items-center md:justify-center">
    //   <Image
    //     src={`/img/${item.imageUrl}`}
    //     alt={item.imageAlt}
    //     width={390}
    //     height={330}
    //     className="object-cover rounded-xl"
    //     layout="responsive"
    //   />
    //   <div className="text-white font-semibold absolute bg-pink-900 bottom-0 w-full h-16 text-center p-2">
    //     <p>{item.serviceName}</p>
    //   </div>
    // </div>
  );
}
export default Services;
