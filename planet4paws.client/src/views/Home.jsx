import React, { useState, useEffect } from "react";
import {
  Typography,
  IconButton,
  Box,
  Container,
  CssBaseline,
  Grid2,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "@fontsource/roboto";
import { lightTheme, darkTheme } from '../components/theme/theme';
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ReviewsSection from "../components/home/ReviewsSection";

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
        <Box sx={{ py: 4, backgroundColor: darkMode ? "#121212" : "#e8e8e8" }}>
          <Container>
            <Grid2 container spacing={4} alignItems="center" justifyContent="center">
              <Grid2 xs={12} sm={6} sx={{ textAlign: "center" }}>
                <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                  © 2024 Planet4Paws. Всички права запазени.
                </Typography>
              </Grid2>
              <Grid2 xs={12} sm={6} sx={{ textAlign: "center" }}>
                <IconButton color="primary">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary">
                  <InstagramIcon />
                </IconButton>
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;