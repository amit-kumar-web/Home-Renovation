import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section from "./components/Section";
// import Blog from "./Blog";
import Navbar from "./components/Navbar";



const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar />

      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/pic/bad.avif')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">


          </header>
          <div className="text-center mt-20">
            <h1 className="text-4xl md:text-5xl font-bold">HOME RENOVATION IN Hisar</h1>
            <p className="mt-4 text-lg md:text-xl">Redesign, redecorate and revamp your home for an improved look.</p>
            <button className="mt-6 bg-red-500 text-white py-2 px-6 rounded-full text-lg">Get a Free Quote</button>
          </div>


        </div>
      </div>
      <Section />


    </>
  );
};

export default App;