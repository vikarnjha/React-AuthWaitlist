import {} from "react";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
// import Profile from "./component/Profile";

function App() {
  return (
    <div className="flex flex-col h-dvh">
      <div>
        <Navbar />
      </div>
     <div className="flex-1 h-full">
      <Home />
     </div>
      <div>
        <Footer />
      
      </div>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
