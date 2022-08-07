function HeroCenter(props) {
  return (
    <div className="my-40">
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 overflow-hidden">
        <div className="w-full h-96">
          <img
            src="/img/playa.jpg"
            alt="Image description"
            className="w-full max-h-96 object-cover object-bottom lg:rounded-lg mx-auto lg:col-span-2"
          />
        </div>
        <div className="h-60 flex items-center justify-center p-8 backdrop-blur-md opacity-50">
          <p className="bg-clip-text text-center text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl lg:text-5xl font-extrabold">
            {props.title}
          </p>
        </div>
        <div className="w-full h-96">
          <img
            src="/img/faro.jpg"
            alt="Image description"
            className="w-full max-h-96 object-cover object-bottom lg:rounded-lg mx-auto lg:col-span-2"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroCenter;
