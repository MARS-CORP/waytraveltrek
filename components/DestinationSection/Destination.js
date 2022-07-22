import Image from 'next/image';

function Destination({ destination }) {
  return (
    <div className="max-w-xs sm:max-w-md md:max-w-2xl md:max-h-60 lg:max-w-4xl mx-auto bg-slate-50 rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={`/img/${destination.imageUrl}`}
            alt={destination.imageAlt}
          />
        </div>
        <div className="p-8">
          <h3 className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
            {destination.name}
          </h3>
          <div className="max-h-36 w-full">
            <p className="mt-2 text-slate-500">{destination.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
