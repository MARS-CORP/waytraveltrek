import CarCategoryBox from './CarCategoryBox';
import CarCharacteristics from './CarCharacteristics';
import CarReviewSection from './CarReviewSection';
import CarDescription from './CarDescription';
import CarName from './CarName';
import CarPrice from './CarPrice';
import Image from 'next/image';

function Cars({ car }) {
  return (
    <div className="relative max-w-md sm:max-w-lg md:max-w-2xl overflow-hidden shadow-md rounded-lg mx-auto">
      <div className="md:flex">
        <div className="md:shrink-0">
          <div className="relative w-full h-48 md:h-full md:w-48 ">
            <Image
              src={`/img/${car.imageUrl}`}
              alt={car.imageAlt}
              layout="fill"
              objectFit="cover"
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
