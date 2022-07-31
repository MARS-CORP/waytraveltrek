function CarPrice(props) {
  return (
    <div className="flex flex-col items-end mt-4">
      <span className="text-xl font-semibold text-violet-500">Desde</span>
      <div className="">
        <span className="font-semibold text-3xl">${props.price}</span>
        <span className="ml-1">USD</span>
      </div>
    </div>
  );
}

export default CarPrice;
