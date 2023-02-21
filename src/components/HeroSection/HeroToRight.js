import Image from 'next/image';

function HeroToRight(props) {
  return (
    <div className="my-40">
      <div className="relative h-96 flex justify-center items-center lg:grid lg:grid-cols-3 overflow-hidden">
        <div className="bg-slate-100 h-32 rounded-lg absolute flex items-center justify-center p-8 backdrop-brightness-75 cursor-pointer opacity-70 lg:hidden z-10 transition duration-500 hover:backdrop-blur-none hover:opacity-100 hover:animate-pulse">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 text-2xl font-bold">
            {props.title}
          </p>
        </div>
        <div className="lg:flex items-center justify-center p-8 hidden lg:col-span-2">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 text-5xl xl:text-7xl font-bold">
            {props.title}
          </p>
        </div>
        <div className="relative h-96 w-full ">
          <Image
            src={
              'https://res.cloudinary.com/waytraveltrek/image/upload/v1677013723/waytraveltrek/faro_bmejvv.jpg'
            }
            alt="Image description"
            layout="fill"
            objectFit="cover"
            className="lg:rounded-lg mx-auto"
          />
        </div>
        {/* <img
          src="/img/faro.webp"
          alt="Image description"
          className="w-full max-h-96 object-cover object-bottom lg:rounded-lg mx-auto"
        /> */}
      </div>
    </div>
  );
}

export default HeroToRight;
