import Image from 'next/image';
import React from 'react';

export default function AcceptedPayments() {
  return (
    <div className="flex items-center justify-center overflow-x-scroll lg:overflow-auto px-2 lg:grid lg:grid-cols-4 gap-4">
      <div className="relative w-24 h-24 mx-auto">
        <Image
          src={'/img/visa.png'}
          alt="Imagen representativa de visa"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-24 h-24 mx-auto">
        <Image
          src={'/img/mastercard.png'}
          alt="Imagen representativa de mastercard"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-24 h-24 mx-auto">
        <Image
          src={'/img/amex.png'}
          alt="Imagen representativa de american express"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-24 h-24 mx-auto">
        <Image
          src={'/img/banktransfer.png'}
          alt="Imagen representativa de trasnferencia bancaria"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
