import { HotelCard } from "@components/Hotel/HotelCard";
import Link from "next/link";

const HotelList = () => {
  const hotelData = [
    {
      id: 1,
      name: "Habana libre",
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677019472/waytraveltrek/gran-hotel-bristol-la_omp5np.jpg",
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
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677019596/waytraveltrek/hotel-internacional-varadero_02_k9uzem.jpg",
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
      name: "Gran Manzana Kempinski",
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677019219/waytraveltrek/gran-hotel-manzana-kempinski_1_ay5zsf.jpg",
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
          <Link href={"hotels/1"} key={id}>
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
