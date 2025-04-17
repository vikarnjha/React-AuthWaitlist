import { ToastContainer, toast } from "react-toastify";
import Card from "./Card";
import eventsData from "../data/events.json";

const Home = () => {
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