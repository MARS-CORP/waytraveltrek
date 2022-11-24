import { AcUnit, Luggage, Settings } from "@mui/icons-material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";

const CarCharacteristics = (props) => {
  return (
    <div className="w-full flex justify-between items-center py-2">
      <span className="flex items-center font-semibold">
        <Settings className="text-gray-600" /> {props.char.gear}
      </span>
      <span className="flex items-center font-semibold">
        <AcUnit className="text-cyan-600" />
        {props.char.air_conditioner && props.char.air_conditioner ? "A/C" : ""}
      </span>
      <span className="flex items-center font-semibold">
        <Luggage className="text-amber-900" /> {props.char.bags}
      </span>
      <span className="flex items-center font-semibold">
        <LocalGasStationIcon className="text-green-700" />{" "}
        {props.char.fuel_type}
      </span>
    </div>
  );
};

export { CarCharacteristics };
