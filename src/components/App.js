import React from "react";
import "./App.scss";
import Header from "./Header";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Videos from "./Videos";
import Equipment from "./Equipment";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Hero />
        <Reviews />
        <Videos />
        <Equipment />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
