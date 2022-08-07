import { Star } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';

export default function HotelCard({ hotel }) {
  return (
    <div
      style={{ width: '100%' }}
      className="max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-5xl overflow-hidden shadow-md rounded-lg mx-auto"
    >
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={`/img/${hotel.imageUrl}`}
            alt={hotel.imageAlt}
          />
        </div>
        <div className="p-4 w-full">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold mr-3">{hotel.name}</h3>
            <div className="bg-gradient-to-tr from-yellow-600 to-orange-400 p-2 rounded-lg">
              <span className="text-xl font-bold">{hotel.qualification}/</span>
              <span className="font-normal text-base">5</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="flex items-center">
              {hotel.category} <Star className="text-yellow-500" />
            </span>
          </div>
          <div className="mt-4">
            <p>{hotel.description}</p>
          </div>
          <div className="mt-2">
            <span className="text-slate-500 flex items-center gap-2">
              <CommentIcon /> {hotel.comments} comentarios
            </span>
          </div>
          <div className="flex flex-col items-end mt-4">
            <span className="text-xl font-semibold text-violet-500">Desde</span>
            <p className="">
              <span className="font-semibold text-3xl">${hotel.price}</span> USD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
