import React, { useState, useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto";
import { lightTheme, darkTheme } from '../components/theme/theme';
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ReviewsSection from "../components/home/ReviewsSection";
import Footer from "../components/home/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [inView, setInView] = useState({});

  const currentTheme = darkMode ? darkTheme : lightTheme;

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

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
    const heroObserver = observeInView("hero");
    const featuresObserver = observeInView("features");
    const reviewsObserver = observeInView("reviews");

    const heroElement = document.getElementById("hero");
    const featureElement = document.getElementById("features");
    const reviewsElement = document.getElementById("reviews");

    heroElement && heroObserver.observe(heroElement);
    featureElement && featuresObserver.observe(featureElement);
    reviewsElement && reviewsObserver.observe(reviewsElement);

    return () => {
      heroObserver.disconnect();
      featuresObserver.disconnect();
      reviewsObserver.disconnect();
    };
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
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
        {/* Navbar */}
        <Navbar darkMode={darkMode} handleThemeToggle={handleThemeToggle} />

        {/* Hero Section with Animation */}
        <HeroSection inView={inView} darkMode={darkMode} />

        {/* Features Section */}
        <FeaturesSection inView={inView} darkMode={darkMode} />

        {/* Reviews Section */}
        <ReviewsSection inView={inView} darkMode={darkMode} />

        {/* Footer */}
        <Footer darkMode={darkMode} />
      </Box>
    </ThemeProvider>
  );
};

export default Home;