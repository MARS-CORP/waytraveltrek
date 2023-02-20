import { Star } from "@mui/icons-material";
import CommentIcon from "@mui/icons-material/Comment";
import Image from "next/image";

const HotelCard = ({
  name,
  imageUrl,
  imageAlt,
  category,
  qualification,
  comments,
  price,
  description,
}) => {
  return (
    <div
      style={{ width: "100%" }}
      className="max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-5xl overflow-hidden shadow-md rounded-lg mx-auto"
    >
      <div className="md:flex">
        <div className="md:shrink-0">
          <div className="relative h-48 w-full md:h-full md:w-48">
            <Image
              src={`/img/portada.webp`}
              alt={"Descripcion de la imagen"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="p-4 w-full">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl mr-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 font-bold">
              {name}
            </h3>
            <div className="bg-gradient-to-tr from-yellow-500 to-orange-500 p-2 rounded-lg">
              <span className="text-xl font-bold">{qualification}/</span>
              <span className="font-normal text-base">5</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="flex items-center font-bold">
              {category} <Star className="text-yellow-500" />
            </span>
          </div>
          <div className="mt-4 text-black">
            <p>{description}</p>
          </div>
          <div className="mt-2">
            <span className="text-slate-900 flex items-center gap-2">
              <CommentIcon /> {comments} comentarios
            </span>
          </div>
          <div className="flex flex-col items-end mt-4">
            <span className="text-xl font-semibold text-blue-700">Desde</span>
            <p className="">
              <span className="font-bold text-3xl">${price}</span> USD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HotelCard };
