import {
  ClockFading,
  HandPlatter,
  MapPinned,
  UtensilsCrossed,
} from "lucide-react";
import { Link } from "react-router";

const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    food_quantity,
    pickup_location,
    expire_date,
    donator,
  } = food;

  const date = new Date(expire_date);
  const formattedDate = date.toLocaleDateString();

  return (
    <div className="group relative flex flex-col items-center text-center mx-auto rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 lg:w-[360px]">
      {/* Food Image */}
      <div className="relative w-full h-48 overflow-hidden rounded-md">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Food Name */}
      <h2 className="text-lg font-semibold text-[#1F1F1F] uppercase mt-4">
        {food_name}
      </h2>

      {/* Divider */}
      <div className="w-1/4 h-px bg-gray-400 my-3 mx-auto"></div>

      {/* Food Details Horizontal */}
      <div className="flex flex-col gap-3 mt-2 w-full">
        <div className="flex items-center justify-between">
          {/* Serving */}
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="text-warning w-5 h-5 shrink-0" />
            <span className="text-gray-700">
              {food_quantity < 10 ? `0${food_quantity}` : food_quantity} People
            </span>
          </div>

          {/* Expire */}
          <div className="flex items-center gap-3">
            <ClockFading className="text-warning w-5 h-5 shrink-0" />
            <span className="text-gray-700">{formattedDate}</span>
          </div>
        </div>

        {/* Donator */}
        <div className="flex items-center gap-3">
          <HandPlatter className="text-warning w-5 h-5 shrink-0" />
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-md"
              src={donator.image}
              alt={donator.name}
            />
            <span className="text-gray-700">{donator.name}</span>
          </div>
        </div>
        {/* Pickup */}
        <div className="flex items-center gap-3">
          <MapPinned className="text-warning w-5 h-5 shrink-0" />
          <span className="text-gray-700">{pickup_location}</span>
        </div>
      </div>

      <div className="mt-6 w-full">
        <Link
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group border border-warning"
          to={`/food/${_id}`}
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-warning absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-warning transition-colors duration-300 ease-in-out group-hover:text-white">
            View Details
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
