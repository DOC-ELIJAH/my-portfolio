import React from "react";
import "./index.css";
import Header from "./components/Header";
import IntroBody from "./components/IntroBody";
import Services from "./components/Services";
import ImageCard from "./components/ImageCard";
import WorkTogether from "./components/WorkTogether";
import Footer from "./components/Footer";
const App = () => {
  return (
    <section>
      <Header />
      <IntroBody />
      <Services />
      <ImageCard />
      <WorkTogether />
      <Footer />
    </section>
  );
};

export default App;
