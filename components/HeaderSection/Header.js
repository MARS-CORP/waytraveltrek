import Image from 'next/image';

function Header() {
  return (
    <div className="text-center">
      <Image
        src="/img/portada.webp"
        width={1200}
        height={800}
        layout="responsive"
      />
    </div>
  );
}

export default Header;
