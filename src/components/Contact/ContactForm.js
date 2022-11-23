import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ContactForm() {
  const [contact, setContact] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    isAgree: false,
  });

  function handleChange(ev) {
    const { name, value, type, checked } = ev.target;

    setContact((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Formulario enviado');
    console.log(contact);
  }

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-10">Contacto</h1>
      <div className="text-center mb-20">
        <p>
          Lorem ipsum dolor sit amet rebum sadipscing dolore. Labore et rebum
          vero diam dolor labore liber liber est kasd elitr duis. Eirmod ex
          lorem eos nulla et consetetur aliquyam lorem. Et nonumy dolor. Elitr
          lorem enim vero accumsan diam volutpat rebum eum laoreet gubergren et
          consequat amet ipsum eos et ad. Esse magna gubergren placerat diam
          illum kasd dolor lorem sit eos ut ut et consetetur enim odio. Tempor
          justo takimata at eos lobortis rebum volutpat dolore ea. Dolor
          consequat lorem kasd dolor takimata luptatum. Vero ut ad voluptua
          praesent sit et ipsum sea eros in duis gubergren sit. Rebum no diam
          vulputate vulputate. Voluptua rebum autem tempor. Esse est vel vero
          nulla tempor stet clita augue rebum vero voluptua no aliquyam.
          Lobortis sanctus no sea molestie at aliquyam et nostrud sit sanctus
          duo ipsum sadipscing ut consetetur duo accusam dolor. Vel dolor ipsum
          gubergren dolor sit dolor takimata placerat. Labore takimata iriure
          velit ipsum justo est molestie odio stet sadipscing hendrerit
          consetetur. Labore justo sit et kasd justo sanctus suscipit clita
          ullamcorper labore dolor. Tation lorem eu sadipscing eos consetetur
          et. Et placerat clita consetetur consectetuer aliquyam. Blandit labore
          et dolor sea aliquyam amet ut dolore sed sit iusto consectetuer. Amet
          nonumy ipsum sit labore clita molestie nonumy dolor. Erat diam ut
          hendrerit dolor esse at imperdiet autem facilisis dolor. Ut tempor
          sadipscing est minim.
        </p>
      </div>
      <div className="h-full flex justify-center items-center">
        <div className="bg-white rounded shadow-lg w-full lg:grid lg:grid-cols-3 mx-10 p-8">
          <div className="w-full h-full hidden lg:flex lg:justify-center lg:items-center border-r-2">
            <div className="relative w-20 h-20 col-span-1">
              <Image
                src={'/img/logo.webp'}
                alt="Logo del sitio web"
                className="z-10"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/img/logo.webp"
              />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full h-full lg:col-span-2 flex justify-center items-center p-2 sm:py-6 sm:px-10"
          >
            <div className="mx-auto">
              <h2 className="text-center text-2xl lg:text-3xl xl:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 mb-8">
                Formulario de contacto
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-center col-span-2 lg:col-span-1">
                  <label htmlFor="name" className="font-semibold">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-slate-50 border rounded-xl px-2"
                    name="name"
                    onChange={handleChange}
                    value={contact.name}
                  />
                </div>
                <div className="flex flex-col justify-center col-span-2 lg:col-span-1">
                  <label htmlFor="lastName" className="font-semibold">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="bg-slate-50 border rounded-xl px-2"
                    name="lastName"
                    onChange={handleChange}
                    value={contact.lastName}
                  />
                </div>
                <div className="flex flex-col justify-center col-span-2">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-slate-50 border rounded-xl px-2"
                    name="email"
                    onChange={handleChange}
                    value={contact.email}
                  />
                </div>
                <div className="flex flex-col justify-center col-span-2 sm:col-span-1">
                  <label htmlFor="phoneNumber" className="font-semibold">
                    Tel&eacute;fono
                  </label>
                  <input
                    type="number"
                    id="phoneNumber"
                    className="bg-slate-50 border rounded-xl px-2"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={contact.phoneNumber}
                  />
                </div>
                <div className="flex flex-col justify-center col-span-2">
                  <label htmlFor="message" className="font-semibold">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    className="bg-slate-50 border rounded-xl px-2"
                    name="message"
                    onChange={handleChange}
                    value={contact.message}
                    rows={5}
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <label htmlFor="agreeCheck" className="font-semibold">
                    <input
                      id="agreeCheck"
                      type="checkbox"
                      name="isAgree"
                      onChange={handleChange}
                      checked={contact.isAgree}
                    />{' '}
                    <span>
                      Confirmo que he le&iacute;do y estoy de acuerdo con las
                      <Link href="#">
                        <a className="text-blue-600">
                          {' '}
                          Pol&iacute;ticas de Privacidad
                        </a>
                      </Link>{' '}
                      y los{' '}
                      <Link href="#">
                        <a className="text-blue-600">
                          T&eacute;rminos y Condiciones del sitio
                        </a>
                      </Link>
                      .
                    </span>
                  </label>
                </div>
                <div className="flex flex-col justify-center col-span-2 mt-4">
                  <button
                    type="submit"
                    className="text-xl font-bold tracking-wide bg-gradient-to-r from-blue-500 to-green-500 rounded-full py-2 transition duration-700 hover:from-blue-600 hover:to-green-600 hover:ring-2 hover:ring-offset-2"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-center font-bold text-2xl mb-16">
          Mantente conectado
        </h2>
        <div className="flex justify-evenly items-center">
          <div className="relative w-20 h-20 bg-slate-900 rounded-xl backdrop-blur-md bg-opacity-50"></div>
          <div className="relative w-20 h-20 bg-slate-900 rounded-xl backdrop-blur-md bg-opacity-50"></div>
          <div className="relative w-20 h-20 bg-slate-900 rounded-xl backdrop-blur-md bg-opacity-50"></div>
          <div className="relative w-20 h-20 bg-slate-900 rounded-xl backdrop-blur-md bg-opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
