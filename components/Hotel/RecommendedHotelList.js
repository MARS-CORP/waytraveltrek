import HotelCard from './HotelCard';

export default function RecommendedHotelList() {
  const hotelData = [
    {
      id: 1,
      name: 'Habana libre',
      imageUrl: 'portada.png',
      imageAlt: 'Descripcion de la imagen',
      category: 5,
      qualification: 4.2,
      comments: 500,
      price: 80,
    },
    {
      id: 2,
      name: 'Melia Inernacional Varadero',
      imageUrl: 'portada.png',
      imageAlt: 'Descripcion de la imagen',
      category: 5,
      qualification: 4.2,
      comments: 500,
      price: 80,
    },
    {
      id: 3,
      name: 'Blue Diamond Prado y Malecón',
      imageUrl: 'portada.png',
      imageAlt: 'Descripcion de la imagen',
      category: 5,
      qualification: 4.2,
      comments: 500,
      price: 80,
    },
  ];
  return (
    <section className="px-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {hotelData.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </section>
  );
}
