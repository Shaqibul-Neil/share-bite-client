import { Link } from "react-router";

const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    food_quantity,
    pickup_location,
    food_status,
    expire_date,
    donator,
  } = food;
  const date = new Date(expire_date);
  const formattedDate = date.toLocaleDateString();
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex md:flex-row flex-col p-4 gap-4 md:items-center">
      {/* Food Image */}
      <figure className="md:w-1/2 h-64 overflow-hidden rounded-lg">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between ">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-accent">{food_name}</h2>
          <div
            className={`badge text-sm badge-sm ${
              food_status === "Available" ? "badge-success" : "badge-warning"
            } rounded-full text-white mt-1`}
          >
            {food_status}
          </div>

          {/* Food Details */}
          <p className="text-primary mt-2 text-sm">
            <span className="font-semibold">Serving:</span>{" "}
            {food_quantity < 10 ? `0${food_quantity}` : `${food_quantity}`}
          </p>
          <p className="text-primary text-sm">
            <span className="font-semibold">Pick Up:</span> {pickup_location}
          </p>
          <p className="text-primary text-sm">
            <span className="font-semibold">Expire Date:</span> {formattedDate}
          </p>

          {/* Donator Info */}

          <div className="mt-2">
            <p className="text-primary text-sm font-semibold">Donated By </p>
            <div className="flex items-center gap-2 mt-2">
              <img
                src={donator.image}
                alt={donator.name}
                className="w-8 h-8 rounded-lg object-cover"
              />
              <p className="text-primary text-sm">{donator.name}</p>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <div className="mt-4">
          <Link
            className="myBtn w-full py-2 text-center block"
            to={`/food-details/${_id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
