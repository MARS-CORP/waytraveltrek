import Services from "@components/OurServices/Services";

const OurServices = () => {
  const data = [
    {
      id: 1,
      imageUrl: "portada.webp",
      imageAlt: "Texto de descripcion de imagen",
      serviceName: "Hoteles",
    },
    {
      id: 2,
      imageUrl: "portada.webp",
      imageAlt: "Texto de descripcion de imagen",
      serviceName: "Autos de Renta",
    },
    {
      id: 3,
      imageUrl: "portada.webp",
      imageAlt: "Texto de descripcion de imagen",
      serviceName: "Casas de Renta",
    },
  ];

  return (
    <section className="">
      <div className="snap-x mx-auto snap-mandatory w-full overflow-x-scroll flex px-6 gap-6 md:grid md:grid-cols-3 md:overflow-hidden">
        {data.map((item) => (
          <Services key={item.id} item={item} />
        ))}
      </div>
      {/* <div className="snap-x mx-auto snap-mandatory h-screen fl">

      </div> */}
    </section>
  );
};

export { OurServices };
