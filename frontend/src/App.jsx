import {} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Profile from "./component/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
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
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="flex flex-col h-dvh">
              <div>
                <Navbar />
              </div>
              <div className="flex-1 h-full">
                <Profile />
              </div>
              <div>
                <Footer />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
