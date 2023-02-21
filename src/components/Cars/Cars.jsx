import { CarName } from "@components/Cars/CarName";
import { CarCharacteristics } from "@components/Cars/CarCharacteristics";
import { CarDescription } from "@components/Cars/CarDescription";
import { CarReviewSection } from "@components/Cars/CarReviewSection";
import { CarPrice } from "@components/Cars/CarPrice";
import { CarCategoryBox } from "@components/Cars/CarCategoryBox";
import Image from "next/image";

function Cars({ car }) {
  return (
    <div className="relative max-w-md sm:max-w-lg md:max-w-2xl overflow-hidden shadow-md rounded-lg mx-auto">
      <div className="md:flex">
        <div className="md:shrink-0">
          <div className="relative w-full h-48 md:h-full md:w-48">
            <Image
              src={car.imageUrl}
              alt={car.imageAlt}
              layout="fill"
              objectFit="cover"
              className="brightness-90 transition duration-700 hover:brightness-50 hover:scale-110"
            />
          </div>
        </div>
        <div className="p-4">
          <CarName name={car.name} />
          <div className="mt-2">
            <div className="mt-5 flex justify-around items-center">
              {car.characteristics.map((item, index) => (
                <CarCharacteristics key={index} char={item} />
              ))}
            </div>
          </div>
          <CarDescription description={car.description} />
          <CarReviewSection reviews={car.reviews} />
          <CarPrice price={car.price} />
        </div>
      </div>
      <CarCategoryBox category={car.category} />
    </div>
  );
}

export default Cars;
