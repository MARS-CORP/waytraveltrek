import Cars from './Cars';

function RecommendedCars() {
  const cars = [
    {
      id: 1,
      name: 'Peugeot 301',
      imageUrl: '301.jpg',
      imageAlt: 'image description',
      category: 'Medio',
      description:
        'Lorem ipsum dolor sit amet ipsum commodo clita stet ea minim et. Ut et nulla augue doming aliquam stet at nonumy ut lorem vero augue.',
      characteristics: [
        {
          gear: 'M',
          air_conditioner: true,
          bags: 4,
          fuel_type: 'Gasolina',
        },
      ],
      reviews: 350,
      price: 85,
    },
    {
      id: 2,
      name: 'Peugeot 301',
      imageUrl: '301.jpg',
      imageAlt: 'image description',
      category: 'Medio',
      description:
        'Lorem ipsum dolor sit amet ipsum commodo clita stet ea minim et. Ut et nulla augue doming aliquam stet at nonumy ut lorem vero augue.',
      characteristics: [
        {
          gear: 'M',
          air_conditioner: true,
          bags: 4,
          fuel_type: 'Gasolina',
        },
      ],
      reviews: 400,
      price: 120,
    },
    {
      id: 3,
      name: 'Peugeot 301',
      imageUrl: '301.jpg',
      imageAlt: 'image description',
      category: 'Medio',
      description:
        'Lorem ipsum dolor sit amet ipsum commodo clita stet ea minim et. Ut et nulla augue doming aliquam stet at nonumy ut lorem vero augue.',
      characteristics: [
        {
          gear: 'M',
          air_conditioner: true,
          bags: 4,
          fuel_type: 'Gasolina',
        },
      ],
      reviews: 120,
      price: 95,
    },
  ];
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
      {cars.map((car) => (
        <Cars key={car.id} car={car} />
      ))}
    </section>
  );
}

export default RecommendedCars;
