import DestinationList from "@components/DestinationSection/DestinationList";

const Destination = () => {
  const destinationData = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677019472/waytraveltrek/gran-hotel-bristol-la_omp5np.jpg",
      imageAlt: "Texto que describe el destino",
      name: "La Habana",
      description:
        "Lorem ipsum dolor sit amet volutpat aliquyam dignissim veniam elitr facilisis wisi facilisis aliquyam euismod et duo.",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677019218/waytraveltrek/iberostar-bella-costa_2_owuoys.jpg",
      imageAlt: "Texto que describe el destino",
      name: "Varadero",
      description:
        "Lorem ipsum dolor sit amet volutpat aliquyam dignissim veniam elitr facilisis wisi facilisis aliquyam euismod et duo.",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677019483/waytraveltrek/memories-varadero-beach_7_tkrbfb.jpg",
      imageAlt: "Texto que describe el destino",
      name: "Cayo Santa Maria",
      description:
        "Lorem ipsum dolor sit amet volutpat aliquyam dignissim veniam elitr facilisis wisi facilisis aliquyam euismod et duo.",
    },
  ];
  return (
    <section className="px-2 grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-4">
      {destinationData?.map(({ id, imageUrl, imageAlt, name, description }) => (
        <DestinationList
          key={id}
          id={id}
          imageAlt={imageAlt}
          imageUrl={imageUrl}
          name={name}
          description={description}
        />
      ))}
    </section>
  );
};

export { Destination };
