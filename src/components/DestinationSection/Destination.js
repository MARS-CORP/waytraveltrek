import DestinationList from './DestinationList';

export default function Destination() {
  const destinationData = [
    {
      id: 1,
      imageUrl: 'portada.webp',
      imageAlt: 'Texto que describe el destino',
      name: 'La Habana',
      description:
        'Lorem ipsum dolor sit amet volutpat aliquyam dignissim veniam elitr facilisis wisi facilisis aliquyam euismod et duo.',
    },
    {
      id: 2,
      imageUrl: 'portada.webp',
      imageAlt: 'Texto que describe el destino',
      name: 'Varadero',
      description:
        'Lorem ipsum dolor sit amet volutpat aliquyam dignissim veniam elitr facilisis wisi facilisis aliquyam euismod et duo.',
    },
    {
      id: 3,
      imageUrl: 'portada.webp',
      imageAlt: 'Texto que describe el destino',
      name: 'Cayo Santa Maria',
      description:
        'Lorem ipsum dolor sit amet volutpat aliquyam dignissim veniam elitr facilisis wisi facilisis aliquyam euismod et duo.',
    },
  ];
  return (
    <section className="px-2 grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-4">
      {destinationData.map((destination) => (
        <DestinationList key={destination.id} destination={destination} />
      ))}
    </section>
  );
}
