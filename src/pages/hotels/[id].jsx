import React, { useState } from "react";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Carousel } from "react-responsive-carousel";
import {
  AddCircleOutline,
  AttachMoneyOutlined,
  BeachAccessOutlined,
  ChevronRight,
  CloseOutlined,
  LocalBarOutlined,
  LocalGroceryStoreOutlined,
  PoolOutlined,
  RemoveCircleOutline,
  SpaOutlined,
  SportsTennisOutlined,
  WifiOutlined,
} from "@mui/icons-material";
import { DateRange, DateRangePicker } from "react-date-range";
import { format } from "date-fns";

const HotelDetails = () => {
  const [bookingForm, setBookingForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    passport: "",
    flightNumber: "",
  });

  const [inputDateRange, setInputDateRange] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedEndDate} - ${formattedStartDate}`;

  const ranges = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleBooking = (e) => {
    const { name, type, checked, value } = e.target;

    setBookingForm((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectDates = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleInputDateRange = (e) => {
    // const { value } = e.target;
    // setInputDateRange((prevState) => (prevState = value));
    setInputDateRange(true);
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    console.log(bookingForm);
  };

  return (
    <>
      <Head>
        <title>Waytraveltrek</title>
        <meta
          name="description"
          content="Waytraveltrek's website. Hotels page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className="lg:max-w-screen-2xl p-8">
          {/* Seccion del carousel de imagenes y descripcion corta del hotel */}
          <section className="bg-white/95 w-full rounded-lg p-4 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="">
                <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                  Hotel name
                </h1>
                <p className="mb-4 font-semibold text-sm tracking-wide">
                  Destino
                  <ChevronRight className="w-5 h-5" />
                  <span>3 noches</span>
                  <ChevronRight className="w-5 h-5" />
                  <span>2 adultos</span>
                  <ChevronRight className="w-5 h-5" />
                  <span>0 ni&ntilde;os</span>
                </p>
              </div>

              <p className="md:self-start -mt-4 mb-6 md:m-0">
                <span className="text-2xl font-semibold ">$40</span> / noche
              </p>
            </div>
            {/* Carousel de imagenes */}
            <div className="">
              <div className="">
                <Carousel
                  autoPlay={true}
                  emulateTouch={true}
                  infiniteLoop={true}
                  useKeyboardArrows={true}
                  showStatus={false}
                >
                  <div className="h-[350px] relative">
                    <img
                      loading="lazy"
                      src="/img/portada.webp"
                      alt="imagen 1"
                      className="h-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="h-[350px] relative">
                    <img
                      loading="lazy"
                      src="/img/playa.webp"
                      alt="imagen 2"
                      className="h-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="h-[350px] relative">
                    <img
                      loading="lazy"
                      src="/img/faro.webp"
                      alt="imagen 3"
                      className="h-full rounded-lg object-cover"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </section>

          {/* Seccion de la descripcion larga del hotel */}
          <section className="py-8">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">
              Descripci&oacute;n
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto, dolor soluta! Officiis quidem at ea, dolorum
              repellendus incidunt accusamus. Alias culpa aliquam nobis ipsum
              voluptatibus tempora iusto aut officiis porro. Cum fugit culpa
              vero, expedita molestias ab quisquam repellat, unde numquam cumque
              quos consequuntur aliquid itaque id laborum. Molestias eveniet
              voluptas ab non ipsum? Perspiciatis est dicta illum laboriosam
              quis. Hic architecto, suscipit molestiae ipsa repudiandae
              voluptatum! Dolorem animi tempore fuga hic illum laudantium dicta
              consequatur eveniet, quasi ipsum perspiciatis voluptate
              perferendis vel recusandae optio quisquam nulla repellat nemo id.
              Quidem nobis architecto, blanditiis aliquid nihil nemo eveniet ea
              suscipit consequuntur voluptatem tempore illum id excepturi
              explicabo, fugiat iure sint laborum ab sunt deleniti quasi
              nesciunt! Dicta assumenda maiores eos?
            </p>
          </section>

          <hr className="bg-grey-600 w-full h-1 my-12" />

          {/* Seccion de servicios del lugar */}
          <section>
            <div>
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-4">
                Lo que ofrece este lugar
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2">
                <article className="flex items-center gap-x-4">
                  <WifiOutlined />{" "}
                  <span className="font-light">Wifi gratis</span>
                </article>
                <article className="flex items-center gap-x-4">
                  <AttachMoneyOutlined />{" "}
                  <span className="font-light">Casa de cambio</span>
                </article>
                <article className="flex items-center gap-x-4">
                  <LocalGroceryStoreOutlined />{" "}
                  <span className="font-light">Tiendas</span>
                </article>
                <article className="flex items-center gap-x-4">
                  <PoolOutlined /> <span className="font-light">Piscina</span>
                </article>
                <article className="flex items-center gap-x-4">
                  <BeachAccessOutlined />{" "}
                  <span className="font-light">Playa</span>
                </article>
                <article className="flex items-center gap-x-4">
                  <LocalBarOutlined /> <span className="font-light">Bar</span>
                </article>
                <article className="flex items-center gap-x-4">
                  <SportsTennisOutlined />{" "}
                  <span className="font-light">Actividades al aire libre</span>
                </article>
                <article className="flex items-center gap-x-4">
                  <SpaOutlined /> <span className="font-light">Spa</span>
                </article>
              </div>
            </div>
          </section>

          <hr className="bg-grey-600 w-full h-1 my-12" />

          {/* Seccion de datos para la reserva */}
          <section className="relative p-4">
            <div className="bg-white/95 rounded-lg shadow-lg p-4 max-w-sm lg:max-w-2xl mx-auto">
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-6 text-center sm:text-left">
                Datos de la reserva
              </h2>

              <form
                onSubmit={handleSubmitBooking}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8"
              >
                <div className="">
                  <div className="mx-auto">
                    <label className="sr-only" htmlFor="firstName">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="w-full rounded-lg pl-2 py-1 shadow-md outline-none"
                      placeholder="Nombre"
                      onChange={handleBooking}
                      value={bookingForm.firstName}
                    />
                  </div>
                </div>
                <div>
                  <div className="mx-auto">
                    <label className="sr-only" htmlFor="lastName">
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="w-full rounded-lg pl-2 py-1 shadow-md outline-none"
                      placeholder="Apellido"
                      onChange={handleBooking}
                      value={bookingForm.lastName}
                    />
                  </div>
                </div>
                <div>
                  <div className="mx-auto">
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full rounded-lg pl-2 py-1 shadow-md outline-none"
                      placeholder="Email"
                      onChange={handleBooking}
                      value={bookingForm.email}
                    />
                  </div>
                </div>
                <div>
                  <div className="mx-auto">
                    <label className="sr-only" htmlFor="phoneNumber">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="w-full rounded-lg pl-2 py-1 shadow-md outline-none"
                      placeholder="Telefono (opcional)"
                      onChange={handleBooking}
                      value={bookingForm.phoneNumber}
                    />
                  </div>
                </div>
                <div>
                  <div className="mx-auto">
                    <label className="sr-only" htmlFor="passport">
                      Pasaporte
                    </label>
                    <input
                      type="text"
                      name="passport"
                      id="passport"
                      className="w-full rounded-lg pl-2 py-1 shadow-md outline-none"
                      placeholder="Pasaporte"
                      onChange={handleBooking}
                      value={bookingForm.passport}
                    />
                  </div>
                </div>
                <div>
                  <div className="mx-auto">
                    <label className="sr-only" htmlFor="flightNumber">
                      Vuelo
                    </label>
                    <input
                      type="text"
                      name="flightNumber"
                      id="flightNumber"
                      className="w-full rounded-lg pl-2 py-1 shadow-md outline-none"
                      placeholder="# Vuelo"
                      onChange={handleBooking}
                      value={bookingForm.flightNumber}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mx-auto">
                    <label className="sr-only" htmlFor="date">
                      fecha
                    </label>
                    <input
                      type="text"
                      name="date"
                      id="date"
                      className="w-full rounded-lg pl-2 py-1 shadow-md outline-none"
                      placeholder="Llegada - Salida"
                      onClick={handleInputDateRange}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="font-semibold px-2 py-1 bg-yellow-500 rounded-md text-center transition duration-300 ease-out hover:bg-yellow-600 hover:scale-110"
                  >
                    Reservar
                  </button>
                </div>

                <br />
                <div className="sm:col-span-2">
                  <hr className="bg-grey-600 w-full h-1 my-8" />

                  <div>
                    <article className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">
                        $40 x 3 noches
                      </span>
                      <span className="text-gray-600 text-sm">$120</span>
                    </article>
                    <article className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">
                        Primer ni&ntilde;o
                      </span>
                      <span className="text-gray-600 text-sm">$35</span>
                    </article>
                    <article className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">
                        Segundo ni&ntilde;o
                      </span>
                      <span className="text-gray-600 text-sm">Gratis</span>
                    </article>
                    <article className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">
                        Recogida en aeropuerto
                      </span>
                      <span className="text-gray-600 text-sm">$35</span>
                    </article>
                  </div>

                  <hr className="bg-grey-600 w-full h-1 my-4" />
                  <article className="flex items-center justify-between">
                    <span className="text-gray-600 text-lg font-semibold">
                      Total a pagar
                    </span>
                    <span className="text-gray-600 text-lg font-semibold">
                      $190
                    </span>
                  </article>
                </div>

                {/* Calendario de reservas */}
                {inputDateRange && (
                  <div className="hidden lg:absolute lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-4 bottom-0 left-0 right-0 z-10 bg-white shadow-lg rounded-lg p-8">
                    <button
                      onClick={() => {
                        setInputDateRange(false);
                      }}
                      className="self-end"
                    >
                      <CloseOutlined />
                    </button>
                    <DateRangePicker
                      ranges={[ranges]}
                      minDate={new Date()}
                      rangeColors={["#fbbf24"]}
                      months={2}
                      direction="horizontal"
                      onChange={handleSelectDates}
                      preventSnapRefocus={true}
                    />
                    <div className="flex items-center gap-x-4 self-end">
                      <p>Adultos (13 a&ntilde;os o m&aacute;s )</p>
                      <div className="flex items-center gap-x-2">
                        <button
                          disabled={adults <= 0}
                          onClick={() => {
                            setAdults((prevState) => prevState - 1);
                          }}
                          className={
                            adults <= 0
                              ? "text-gray-400 cursor-not-allowed"
                              : "text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                          }
                        >
                          <RemoveCircleOutline />
                        </button>
                        <span>{adults}</span>
                        <button
                          onClick={() => {
                            setAdults((prevState) => prevState + 1);
                          }}
                          className="text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                        >
                          <AddCircleOutline />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-x-4 self-end">
                      <p>Ni&ntilde;os (De 2 a 12 a&ntilde;os)</p>
                      <div className="flex items-center gap-x-2">
                        <button
                          disabled={children <= 0}
                          onClick={() => {
                            setChildren((prevState) => prevState - 1);
                          }}
                          className={
                            children <= 0
                              ? "text-gray-400 cursor-not-allowed"
                              : "text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                          }
                        >
                          <RemoveCircleOutline />
                        </button>
                        <span>{children}</span>
                        <button
                          onClick={() => {
                            setChildren((prevState) => prevState + 1);
                          }}
                          className="text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                        >
                          <AddCircleOutline />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-x-4 self-end">
                      <p>Beb&eacute;s (de 0 a 2 a&ntilde;os)</p>
                      <div className="flex items-center gap-x-2">
                        <button
                          disabled={babies <= 0}
                          onClick={() => {
                            setBabies((prevState) => prevState - 1);
                          }}
                          className={
                            babies <= 0
                              ? "text-gray-400 cursor-not-allowed"
                              : "text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                          }
                        >
                          <RemoveCircleOutline />
                        </button>
                        <span>{babies}</span>
                        <button
                          onClick={() => {
                            setBabies((prevState) => prevState + 1);
                          }}
                          className="text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                        >
                          <AddCircleOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Menu de calendario de reservas solo para mobiles */}
                <div
                  className={`fixed bottom-0 left-0 bg-white w-full p-4 border-t z-50 lg:hidden ${
                    inputDateRange ? "max-h-full" : "max-h-16"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p
                      onClick={() => {
                        setInputDateRange((prevState) => !prevState);
                      }}
                      className="underline underline-offset-1 text-gray-700 font-semibold cursor-pointer"
                    >
                      Ver fechas del viaje
                    </p>
                    <button
                      onClick={() => {
                        setInputDateRange((prevState) => !prevState);
                      }}
                      className="bg-yellow-500 text-white font-semibold rounded-lg px-2 py-1"
                    >
                      Ver fechas
                    </button>
                  </div>

                  {/* Calendarion de reservas para mobiles */}
                  <div className="flex flex-col items-center justify-center gap-y-4 p-8 lg:hidden">
                    <DateRange
                      ranges={[ranges]}
                      minDate={new Date()}
                      rangeColors={["#fbbf24"]}
                      months={1}
                      direction="vertical"
                      onChange={handleSelectDates}
                      preventSnapRefocus={true}
                    />
                    <div className="w-80">
                      <div className="flex items-center justify-between gap-x-4">
                        <p>Adultos (13 a&ntilde;os o m&aacute;s )</p>
                        <div className="flex items-center gap-x-2">
                          <button
                            disabled={adults <= 0}
                            onClick={() => {
                              setAdults((prevState) => prevState - 1);
                            }}
                            className={
                              adults <= 0
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                            }
                          >
                            <RemoveCircleOutline />
                          </button>
                          <span>{adults}</span>
                          <button
                            onClick={() => {
                              setAdults((prevState) => prevState + 1);
                            }}
                            className="text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                          >
                            <AddCircleOutline />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-x-4">
                        <p>Ni&ntilde;os (De 2 a 12 a&ntilde;os)</p>
                        <div className="flex items-center gap-x-2">
                          <button
                            disabled={children <= 0}
                            onClick={() => {
                              setChildren((prevState) => prevState - 1);
                            }}
                            className={
                              children <= 0
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                            }
                          >
                            <RemoveCircleOutline />
                          </button>
                          <span>{children}</span>
                          <button
                            onClick={() => {
                              setChildren((prevState) => prevState + 1);
                            }}
                            className="text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                          >
                            <AddCircleOutline />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-x-4">
                        <p>Beb&eacute;s (de 0 a 2 a&ntilde;os)</p>
                        <div className="flex items-center gap-x-2">
                          <button
                            disabled={babies <= 0}
                            onClick={() => {
                              setBabies((prevState) => prevState - 1);
                            }}
                            className={
                              babies <= 0
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                            }
                          >
                            <RemoveCircleOutline />
                          </button>
                          <span>{babies}</span>
                          <button
                            onClick={() => {
                              setBabies((prevState) => prevState + 1);
                            }}
                            className="text-gray-600 transition duration-300 ease-out hover:text-gray-800"
                          >
                            <AddCircleOutline />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>

          <hr className="bg-grey-600 w-full h-1 my-12" />

          {/* Seccion de comentarios */}
          <section>
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-6">
              Comentarios
            </h2>

            <div className="grid grid-cols-1 gap-y-8 max-h-[500px] overflow-auto scrollbar-hide">
              <div className="w-full bg-white/95 rounded-md shadow-lg p-4 border ">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold tracking-wide">John Doe</h3>
                  <span className="font-light">Hace 2 minutos</span>
                </div>
                <div className="mb-4">
                  <p>
                    Evaluaci&oacute;n:{" "}
                    <span className="font-semibold"> 4.4/5</span>
                  </p>
                </div>

                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi voluptates ipsam ducimus sequi? Iste veritatis vero,
                    officia fuga quae magni, possimus laboriosam voluptatibus
                    saepe inventore at culpa accusantium asperiores quo!
                  </p>
                </div>
              </div>

              <div className="w-full bg-white/95 rounded-md shadow-lg p-4 border ">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold tracking-wide">John Doe</h3>
                  <span className="font-light">Hace 2 minutos</span>
                </div>
                <div className="mb-4">
                  <p>
                    Evaluaci&oacute;n:{" "}
                    <span className="font-semibold"> 4.4/5</span>
                  </p>
                </div>

                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi voluptates ipsam ducimus sequi? Iste veritatis vero,
                    officia fuga quae magni, possimus laboriosam voluptatibus
                    saepe inventore at culpa accusantium asperiores quo!
                  </p>
                </div>
              </div>

              <div className="w-full bg-white/95 rounded-md shadow-lg p-4 border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold tracking-wide">John Doe</h3>
                  <span className="font-light">Hace 2 minutos</span>
                </div>
                <div className="mb-4">
                  <p>
                    Evaluaci&oacute;n:{" "}
                    <span className="font-semibold"> 4.4/5</span>
                  </p>
                </div>

                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi voluptates ipsam ducimus sequi? Iste veritatis vero,
                    officia fuga quae magni, possimus laboriosam voluptatibus
                    saepe inventore at culpa accusantium asperiores quo!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HotelDetails;
