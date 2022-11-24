import { AcUnit, Luggage, Settings } from "@mui/icons-material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";

const CarCharacteristics = (props) => {
  return (
    <>
      <span className="flex items-center font-semibold">
        <Settings /> {props.char.gear}
      </span>
      <span className="flex items-center font-semibold">
        <AcUnit />
        {props.char.air_conditioner && props.char.air_conditioner ? "A/C" : ""}
      </span>
      <span className="flex items-center font-semibold">
        <Luggage /> {props.char.bags}
      </span>
      <span className="flex items-center font-semibold">
        <LocalGasStationIcon /> {props.char.fuel_type}
      </span>
    </>
  );
};

export { CarCharacteristics };
