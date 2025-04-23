import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ReviewsSection from "../components/home/ReviewsSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import AboutUsSection from "../components/home/AboutUsSection";
import PriceOfferSection from "../components/home/PriceOfferSection";

const Home = ({ darkMode, setDarkMode }) => {
  const [inView, setInView] = useState({});

  const observeInView = (id) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView((prevInView) => ({
          ...prevInView,
          [id]: entry.isIntersecting,
        }));
      });
    });
    return observer;
  };

  useEffect(() => {
    const sections = ["hero", "features", "reviews", "whyChoose", "about", "pricing"];
    const observers = {};

    sections.forEach((id) => {
      const element = document.getElementById(id);
      const observer = observeInView(id);
      if (element) observer.observe(element);
      observers[id] = observer;
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <Box
      sx={{
        background: darkMode
          ? "linear-gradient(135deg, #121212, #37474f, #1e1e1e)"
          : "linear-gradient(135deg, #e8f5e9, #f3f7fa, #ffffff)",
        color: "text.primary",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      
      <HeroSection inView={inView} darkMode={darkMode} />
      <FeaturesSection inView={inView} darkMode={darkMode} />
      <WhyChooseUsSection inView={inView} darkMode={darkMode} />
      <PriceOfferSection />
      <AboutUsSection inView={inView} darkMode={darkMode} />
      <ReviewsSection inView={inView} darkMode={darkMode} />
      
    </Box>
  );
};

export default Home;