import Services from "@components/OurServices/Services";

const OurServices = () => {
  const data = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677019217/waytraveltrek/rooftop-terrace-at-gran_tjbk1m.jpg",
      imageAlt: "Texto de descripcion de imagen",
      serviceName: "Hoteles",
      linkTo: "/hotels",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677013329/waytraveltrek/301_nsmpvt.jpg",
      imageAlt: "Imagen de un auto",
      serviceName: "Autos de Renta",
      linkTo: "#",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677019213/waytraveltrek/photo0jpg_ezl5lc.jpg",
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
