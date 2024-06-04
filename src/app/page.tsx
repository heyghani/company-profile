import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

const Home = async () => {
  return (
    <div>
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
