import React from "react";

const Card = ({
  image,
  title,
  description,
  onAddToCart,
  onSubscribe,
  onRegister,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-md mx-auto transition-transform hover:scale-105 cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            onClick={onAddToCart}
            className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded"
          >
            Add to Cart
          </button>
          <button
            onClick={onSubscribe}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Subscribe
          </button>
          <button
            onClick={onRegister}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
