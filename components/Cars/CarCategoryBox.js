function CarCategoryBox(props) {
  return (
    <div className="absolute top-2 left-2 bg-yellow-500 p-2 rounded-full backdrop-blur-sm bg-opacity-40">
      <span className="text-sm font-semibold">{props.category}</span>
    </div>
  );
}

export default CarCategoryBox;
