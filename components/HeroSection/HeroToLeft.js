function HeroToLeft(props) {
  return (
    <div className="my-20">
      <div className="relative h-96 flex justify-center items-center lg:grid lg:grid-cols-3 overflow-hidden">
        <img
          src="/img/playa.jpg"
          alt="Image description"
          className="w-full max-h-96 object-cover object-bottom lg:rounded-lg mx-auto lg:col-span-2"
        />
        <div className="bg-slate-900 h-32 rounded-lg absolute flex items-center justify-center p-8 backdrop-blur-md opacity-50 lg:hidden">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 text-2xl font-bold">
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
