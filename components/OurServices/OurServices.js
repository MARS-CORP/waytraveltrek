import Services from './Services';

export default function OurServices() {
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

  return (
    <section className="flex justify-items-center overflow-x-scroll lg:overflow-auto px-2 md:grid md:grid-cols-3 gap-8">
      {data.map((item) => (
        <Services key={item.id} item={item} />
      ))}
    </section>
  );
}
