import React from "react";
import { Close } from "@mui/icons-material";

const CloseModal = ({ setMounted }) => {
  const handleClose = () => {
    setMounted((prevState) => (prevState = false));
  };

  return (
    <button onClick={handleClose} className="absolute top-2 right-2 z-50">
      <Close className="w-6 h-6 text-red-600 transition duration-300 ease-in-out hover:text-red-700" />
    </button>
  );
};

export { CloseModal };
