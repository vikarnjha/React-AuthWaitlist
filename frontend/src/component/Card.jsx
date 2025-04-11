import React from "react";
import { MapPin, CalendarDays } from "lucide-react";

const Card = ({
  image,
  title,
  description,
  category,
  price,
  date,
  location,
  onAddToCart,
  onSubscribe,
  onRegister,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-[300px] transition-transform hover:scale-105 cursor-pointer">
      <img src={image} alt={title} className="w-full h-36 object-cover" />
      <div className="p-3">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 font-medium mb-1">{category}</p>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <div className="flex items-center gap-1">
            <MapPin size={14} /> <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays size={14} /> <span>{date}</span>
          </div>
        </div>

        <p className="text-green-600 font-semibold text-sm mb-3">₹{price}</p>

        <div className="flex flex-col sm:flex-row gap-2 text-sm">
          <button
            onClick={onAddToCart}
            className="bg-gray-200 hover:bg-gray-300 text-black py-1.5 rounded w-full"
          >
            Add to Cart
          </button>
          <button
            onClick={onSubscribe}
            className="bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded w-full"
          >
            Subscribe
          </button>
          <button
            onClick={onRegister}
            className="bg-green-500 hover:bg-green-600 text-white py-1.5 rounded w-full"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
