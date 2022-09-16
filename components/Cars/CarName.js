function CarName(props) {
  return (
    <h3 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 font-bold">
      {props.name}
    </h3>
  );
}

export default CarName;
