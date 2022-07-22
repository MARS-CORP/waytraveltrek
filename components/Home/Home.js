import Destination from '../DestinationSection/Destination';
import Header from '../HeaderSection/Header';
import HotelCard from '../Hotel/HotelCard';
import Navbar from '../Navbar/Navbar';
import Services from '../OurServices/Services';
import SectionTitle from '../SectionTitle/SectionTitle';

function Home() {
  const data = [
    {
      id: 1,
      imageUrl: 'portada.png',
      imageAlt: 'Texto de descripcion de imagen',
      serviceName: 'Hoteles',
    },
    {
      id: 2,
      imageUrl: 'portada.png',
      imageAlt: 'Texto de descripcion de imagen',
      serviceName: 'Autos de Renta',
    },
    {
      id: 3,
      imageUrl: 'portada.png',
      imageAlt: 'Texto de descripcion de imagen',
      serviceName: 'Casas de Renta',
    },
  ];

  const destinationData = [
    {
      id: 1,
      imageUrl: 'portada.png',
      imageAlr: 'Texto que describe el destino',
      name: 'La Habana',
      description:
        'Lorem ipsum dolor sit amet volutpat aliquyam dignissim veniam elitr facilisis wisi facilisis aliquyam euismod et duo.',
    },
    {
      id: 2,
      imageUrl: 'portada.png',
      imageAlr: 'Texto que describe el destino',
      name: 'Varadero',
      description:
        'Lorem ipsum dolor sit amet volutpat aliquyam dignissim veniam elitr facilisis wisi facilisis aliquyam euismod et duo.',
    },
    {
      id: 3,
      imageUrl: 'portada.png',
      imageAlr: 'Texto que describe el destino',
      name: 'Cayo Santa Maria',
      description:
        'Lorem ipsum dolor sit amet volutpat aliquyam dignissim veniam elitr facilisis wisi facilisis aliquyam euismod et duo.',
    },
  ];

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
    <>
      <Navbar />
      <Header />
      <main>
        <SectionTitle sectionTitle="Nuestros servicios" />
        <section className="flex justify-items-center overflow-x-scroll lg:overflow-auto px-2 md:grid md:grid-cols-3 gap-8">
          {data.map((item) => (
            <Services key={item.id} item={item} />
          ))}
        </section>
        <SectionTitle sectionTitle="Destinos inolvidables" />
        <section className="px-2 grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-4">
          {destinationData.map((destination) => (
            <Destination key={destination.id} destination={destination} />
          ))}
        </section>
        <SectionTitle sectionTitle="Hoteles recomendados" />
        <section className="px-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {hotelData.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </section>
        <SectionTitle sectionTitle="Autos recomendados" />
      </main>
    </>
  );
}
// flex flex-row overflow-x-scroll md:grid md:grid-cols-3 md:gap-4 lg:overflow-x-hidden

export default Home;
