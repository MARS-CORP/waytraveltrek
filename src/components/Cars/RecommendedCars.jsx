import Cars from "@components/Cars/Cars";
import Link from "next/link";

const RecommendedCars = () => {
  const cars = [
    {
      id: 1,
      name: "Peugeot 301",
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677013329/waytraveltrek/301_nsmpvt.jpg",
      imageAlt: "image description",
      category: "Medio",
      description:
        "Lorem ipsum dolor sit amet ipsum commodo clita stet ea minim et. Ut et nulla augue doming aliquam stet at nonumy ut lorem vero augue.",
      characteristics: [
        {
          gear: "M",
          air_conditioner: true,
          bags: 4,
          fuel_type: "Gasolina",
        },
      ],
      reviews: 350,
      price: 85,
    },
    {
      id: 2,
      name: "Mercedes Benz",
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677018731/waytraveltrek/Mercedes_C_class_cttwy3.png",
      imageAlt: "image description",
      category: "Premium",
      description:
        "Lorem ipsum dolor sit amet ipsum commodo clita stet ea minim et. Ut et nulla augue doming aliquam stet at nonumy ut lorem vero augue.",
      characteristics: [
        {
          gear: "A",
          air_conditioner: true,
          bags: 4,
          fuel_type: "Gasolina",
        },
      ],
      reviews: 400,
      price: 120,
    },
    {
      id: 3,
      name: "Hyundai Sonata",
      imageUrl:
        "https://res.cloudinary.com/waytraveltrek/image/upload/v1677018592/waytraveltrek/Hyundai_sonata_omjggl.jpg",
      imageAlt: "image description",
      category: "Medio",
      description:
        "Lorem ipsum dolor sit amet ipsum commodo clita stet ea minim et. Ut et nulla augue doming aliquam stet at nonumy ut lorem vero augue.",
      characteristics: [
        {
          gear: "A",
          air_conditioner: true,
          bags: 4,
          fuel_type: "Gasolina",
        },
      ],
      reviews: 120,
      price: 95,
    },
  ];
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
      {cars?.map((car) => (
        <Link href={"#"} key={car.id}>
          <a>
            <Cars car={car} />
          </a>
        </Link>
      ))}
    </section>
  );
};

export { RecommendedCars };
