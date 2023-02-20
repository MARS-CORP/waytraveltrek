import { HotelCard } from "@components/Hotel/HotelCard";
import Link from "next/link";

const RecommendedHotelList = () => {
  const hotelData = [
    {
      id: 1,
      name: "Habana libre",
      imageUrl: "portada.webp",
      imageAlt: "Descripcion de la imagen",
      category: 5,
      qualification: 4.2,
      comments: 500,
      price: 80,
      description:
        "Lorem ipsum dolor sit amet consetetur tempor lobortis clita et. Invidunt nostrud commodo duo sadipscing. Iriure amet duis et no tempor molestie consetetur gubergren sanctus rebum et gubergren gubergren at elitr consequat ipsum et.",
    },
    {
      id: 2,
      name: "Melia Inernacional Varadero",
      imageUrl: "portada.webp",
      imageAlt: "Descripcion de la imagen",
      category: 5,
      qualification: 4.2,
      comments: 500,
      price: 80,
      description:
        "Lorem ipsum dolor sit amet consetetur tempor lobortis clita et. Invidunt nostrud commodo duo sadipscing. Iriure amet duis et no tempor molestie consetetur gubergren sanctus rebum et gubergren gubergren at elitr consequat ipsum et.",
    },
    {
      id: 3,
      name: "Blue Diamond Prado y Malecón",
      imageUrl: "portada.webp",
      imageAlt: "Descripcion de la imagen",
      category: 5,
      qualification: 4.2,
      comments: 500,
      price: 80,
      description:
        "Lorem ipsum dolor sit amet consetetur tempor lobortis clita et. Invidunt nostrud commodo duo sadipscing. Iriure amet duis et no tempor molestie consetetur gubergren sanctus rebum et gubergren gubergren at elitr consequat ipsum et.",
    },
  ];
  return (
    <section className="px-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {hotelData.map(
        ({
          id,
          name,
          imageUrl,
          imageAlt,
          category,
          qualification,
          comments,
          price,
          description,
        }) => (
          <Link href={"#"} key={id}>
            <a>
              <HotelCard
                name={name}
                imageUrl={imageUrl}
                imageAlt={imageAlt}
                category={category}
                qualification={qualification}
                comments={comments}
                price={price}
                description={description}
              />
            </a>
          </Link>
        )
      )}
    </section>
  );
};

export { RecommendedHotelList };
