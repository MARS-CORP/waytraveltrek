import Image from 'next/image';

function Header() {
  return (
    <div className="text-center">
      <Image
        src="https://res.cloudinary.com/waytraveltrek/image/upload/v1644208393/waytraveltrek/cover/DSC06705_pndxmo.png"
        width={1200}
        height={800}
        layout="responsive"
      />
    </div>
  );
}

export default Header;
