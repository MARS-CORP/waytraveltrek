import Image from 'next/image';

function Destination() {
  return (
    <div className="p-4 my-5">
      <h2 className="font-semibold text-slate-900 text-4xl">
        Encuentra tu mejor destino
      </h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-4xl mt-12">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/img/portada.png"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
              <h3 className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                La Habana
              </h3>
              <p className="mt-2 text-slate-500">
                oh gsohfwsiofhiof oifeifh ofgowifhiorgheuih gh eriughwe igiqg
                qgiquow giqg wiqg
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-12">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/img/portada.png"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
              <h3 className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                La Habana
              </h3>
              <p className="mt-2 text-slate-500">
                oh gsohfwsiofhiof oifeifh ofgowifhiorgheuih gh eriughwe igiqg
                qgiquow giqg wiqg
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-12">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/img/portada.png"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
              <h3 className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                La Habana
              </h3>
              <p className="mt-2 text-slate-500">
                oh gsohfwsiofhiof oifeifh ofgowifhiorgheuih gh eriughwe igiqg
                qgiquow giqg wiqg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
