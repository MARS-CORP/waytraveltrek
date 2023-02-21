const CarPrice = (props) => {
  return (
    <div className="flex flex-col items-end mt-4">
      <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 font-bold">
        Desde
      </span>
      <div className="">
        <span className="font-bold text-3xl">${props.price}</span>
        <span className="ml-1">USD</span>
      </div>
    </div>
  );
};

export { CarPrice };
