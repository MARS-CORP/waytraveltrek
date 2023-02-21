import Services from "@components/OurServices/Services";

const OurServices = () => {
  const data = [
    {
      id: 1,
      imageUrl: "portada.webp",
      imageAlt: "Texto de descripcion de imagen",
      serviceName: "Hoteles",
      linkTo: "/hotels",
    },
    {
      id: 2,
      imageUrl: "portada.webp",
      imageAlt: "Texto de descripcion de imagen",
      serviceName: "Autos de Renta",
      linkTo: "#",
    },
    {
      id: 3,
      imageUrl: "portada.webp",
      imageAlt: "Texto de descripcion de imagen",
      serviceName: "Casas de Renta",
      linkTo: "#",
    },
  ];

  return (
    <section className="">
      <div className="scrollbar-hide snap-x mx-auto snap-mandatory w-full overflow-x-scroll flex px-6 gap-6 md:grid md:grid-cols-3 md:overflow-hidden">
        {data?.map(({ id, imageUrl, imageAlt, serviceName, linkTo }) => (
          <Services
            key={id}
            id={id}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            serviceName={serviceName}
            linkTo={linkTo}
          />
        ))}
      </div>
      {/* <div className="snap-x mx-auto snap-mandatory h-screen fl">

      </div> */}
    </section>
  );
};

export { OurServices };
