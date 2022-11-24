import Image from "next/image";
import React from "react";

const AcceptedPayments = () => {
  return (
    <div className="flex w-full snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-hidden gap-4">
      <div className="relative w-20 h-20 mx-auto snap-center">
        <Image
          src={"/img/visa.png"}
          alt="Imagen representativa de visa"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-20 h-20 mx-auto snap-center">
        <Image
          src={"/img/mastercard.png"}
          alt="Imagen representativa de mastercard"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-20 h-20 mx-auto snap-center">
        <Image
          src={"/img/amex.png"}
          alt="Imagen representativa de american express"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-20 h-20 mx-auto snap-center">
        <Image
          src={"/img/banktransfer.png"}
          alt="Imagen representativa de trasnferencia bancaria"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export { AcceptedPayments };
