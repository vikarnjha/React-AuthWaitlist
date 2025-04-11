import { ToastContainer, toast } from "react-toastify";
import Card from "./Card";
import eventsData from "../data/events.json";

const Home = () => {
  // const handleSubscribe = () =>
  // toast.info("🎉 You have successfully subscribed to our newsletter!");
  // const handlePreBook = () => toast.info("✅ Your pre-booking is confirmed!");
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-600 to-gray-900 py-8 px-6">
        {/* Dynamic value  */}
        <div className="flex flex-wrap justify-center gap-6">
          {eventsData.map((event, idx) => (
            <Card
              key={idx}
              image={event.image}
              title={event.title}
              description={event.description}
              category={event.category}
              price={event.price}
              date={event.date}
              location={event.location}
              onAddToCart={() => toast.success("Added to cart")}
              onSubscribe={() => toast.success("Subscribed")}
              onRegister={() => toast.success("Registered")}
            />
          ))}
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Home;

// {/* Landing Page */}
// <div className="flex flex-col items-center justify-center   text-center px-4">
// <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
//   Welcome to the Future of Events!
// </h2>
// <p className="text-lg text-gray-200 mb-6 max-w-xl leading-relaxed">
//   Be the first to experience the most exciting event of the year. Stay
//   updated and secure your spot now! 🎟️
// </p>

// <div className="flex gap-6">
//   <button
//     onClick={handleSubscribe}
//     className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:from-green-500 hover:to-green-500 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
//   >
//     📩 Subscribe to Newsletter
//   </button>
//   <button
//     onClick={handlePreBook}
//     className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer"
//   >
//     🎟️ Pre-Book Now
//   </button>
// </div>
// </div>
