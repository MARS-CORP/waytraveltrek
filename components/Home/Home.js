import Destination from '../DestinationSection/Destination';
import Header from '../HeaderSection/Header';
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
      serviceName: 'Experiencias',
    },
  ];
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <SectionTitle sectionTitle="Nuestros servicios" />
        <section className="flex justify-items-center overflow-x-scroll px-2 md:grid md:grid-cols-3 gap-8">
          {data.map((item) => (
            <Services key={item.id} item={item} />
          ))}
        </section>
        <Destination />
      </main>
    </>
  );
}
// flex flex-row overflow-x-scroll md:grid md:grid-cols-3 md:gap-4 lg:overflow-x-hidden

export default Home;
