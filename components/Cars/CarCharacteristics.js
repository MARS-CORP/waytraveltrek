function CarCharacteristics(props) {
  return (
    <>
      <span>{props.char.gear}</span>
      <span>
        {props.char.air_conditioner && props.char.air_conditioner ? 'A/C' : ''}
      </span>
      <span>{props.char.bags}💼</span>
      <span>{props.char.fuel_type}</span>
    </>
  );
}

export default CarCharacteristics;
