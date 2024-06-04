"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    const fetchRandomImage = async () => {
      const response = await fetch("https://picsum.photos/1200/800");
      setBackgroundImage(response.url);
    };

    fetchRandomImage();
  }, []);

  return (
    <div
      className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[36rem] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center">
          Welcome to Ghani Corporation
        </h1>
      </div>
    </div>
  );
};

export default Hero;
