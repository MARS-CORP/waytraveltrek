import { HotelCard } from "@components/Hotel/HotelCard";
import Link from "next/link";

const HotelList = () => {
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
        "Lorem ipsum dolor sit amet consetetur tempor lobortis clita et. Invidunt nostrud commodo duo sadipscing.",
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
        "Lorem ipsum dolor sit amet consetetur tempor lobortis clita et. Invidunt nostrud commodo duo sadipscing.",
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
        "Lorem ipsum dolor sit amet consetetur tempor lobortis clita et. Invidunt nostrud commodo duo sadipscing.",
    },
  ];
  return (
    <section className="px-2 grid grid-cols-1 gap-8 my-20 md:col-span-2">
      {hotelData?.map(
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
                id={id}
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

export { HotelList };
