import Image from "next/image";
import React from "react";

const AcceptedPayments = () => {
  return (
    <div className="flex w-full snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-hidden gap-4">
      <div className="relative w-20 h-20 mx-auto snap-center">
        <Image
          src={
            "https://res.cloudinary.com/waytraveltrek/image/upload/v1677013208/waytraveltrek/visa_fmsmvq.png"
          }
          alt="Imagen representativa de visa"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-20 h-20 mx-auto snap-center">
        <Image
          src={
            "https://res.cloudinary.com/waytraveltrek/image/upload/v1677013208/waytraveltrek/mastercard_oz4jm5.png"
          }
          alt="Imagen representativa de mastercard"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-20 h-20 mx-auto snap-center">
        <Image
          src={
            "https://res.cloudinary.com/waytraveltrek/image/upload/v1677013205/waytraveltrek/amex_pwgupe.png"
          }
          alt="Imagen representativa de american express"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-20 h-20 mx-auto snap-center">
        <Image
          src={
            "https://res.cloudinary.com/waytraveltrek/image/upload/v1677013208/waytraveltrek/banktransfer_y4rx7z.png"
          }
          alt="Imagen representativa de trasnferencia bancaria"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export { AcceptedPayments };
