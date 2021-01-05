import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PrimaryNavbar from "./Components/Navbar/Primary-Navbar";
import Navbar from "./Components/Navbar/Navbar";
import MainCarosel from "./Components/Carousel/MainCarousel";

const App = () => {
  return (
    <div>
      <PrimaryNavbar />
      <Navbar />
      <MainCarosel />
    </div>
  );
};

export default App;
