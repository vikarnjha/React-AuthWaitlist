import {} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
// import Profile from "./component/Profile";
// import Contact from "./component/Contact";
import Login from "./component/Login";

function App() {
  return (
    <Login/>
    // <BrowserRouter>
    //   <Routes>
    //     {/* Homepage route  */}
    //     <Route
    //       path="/"
    //       element={
    //         <div className="flex flex-col h-dvh">
    //           <div>
    //             <Navbar />
    //           </div>
    //           <div className="flex-1 h-full">
    //             <Home />
    //           </div>
    //           <div>
    //             <Footer />
    //           </div>
    //         </div>
    //       }
    //     />
    //     {/* Profile page route  */}
    //     <Route
    //       path="/profile"
    //       element={
    //         <div className="flex flex-col h-dvh">
    //           <div>
    //             <Navbar />
    //           </div>
    //           <div className="flex-1 h-full">
    //             <Profile />
    //           </div>
    //           <div>
    //             <Footer />
    //           </div>
    //         </div>
    //       }
    //     />
    //     {/* Contact page route  */}
    //     <Route
    //       path="/contact"
    //       element={
    //         <div className="flex flex-col h-dvh">
    //           <div>
    //             <Navbar />
    //           </div>
    //           <div className="flex-1 h-full">
    //             <Contact />
    //           </div>
    //           <div>
    //             <Footer />
    //           </div>
    //         </div>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
