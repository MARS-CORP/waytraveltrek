import Image from 'next/image';

function HeroToLeft(props) {
  return (
    <div className="my-40">
      <div className="relative h-96 w-full flex justify-center items-center lg:grid lg:grid-cols-3 overflow-hidden">
        <div className="relative h-96 w-full lg:col-span-2">
          <Image
            src="/img/playa.webp"
            alt="Image description"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            className="lg:rounded-lg mx-auto lg:col-span-2 lg:object-contain"
          />
        </div>
        <div className="bg-slate-50 h-32 rounded-lg absolute flex items-center justify-center p-8 backdrop-blur-md opacity-50 transition duration-500 hover:backdrop-blur-none hover:opacity-100 lg:hidden cursor-pointer">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 text-2xl font-bold blur-none">
            {props.title}
          </p>
        </div>
        <div className="lg:flex items-center justify-center p-8 hidden">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 text-5xl xl:text-7xl font-bold">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroToLeft;
