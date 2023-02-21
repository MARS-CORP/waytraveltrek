import Image from "next/image";

export default function DestinationList({
  imageUrl,
  imageAlt,
  name,
  description,
}) {
  return (
    <div className="max-w-xs sm:max-w-md md:max-w-2xl md:max-h-60 lg:max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          <div className="relative h-48 w-full md:h-full md:w-48">
            <Image
              src={imageUrl}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="p-8">
          <h3 className="uppercase tracking-wide text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 font-bold">
            {name}
          </h3>
          <div className="max-h-36 w-full">
            <p className="mt-2 text-black">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
