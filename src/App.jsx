import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navigation from "./assets/components/Navigation";
import HeroSection from "./assets/components/Hero";

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
