import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  CssBaseline,
  Grid2,
  Fade,
  Grow,
  Slide,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import StarIcon from "@mui/icons-material/Star";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "@fontsource/roboto";
import { lightTheme, darkTheme } from '../components/theme/theme';
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';

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
        <Box sx={{ py: 6, backgroundColor: darkMode ? "#1e1e1e" : "#f9f9f9" }} id="reviews">
          <Container>
            <Typography variant="h4" align="center" sx={{ mb: 4, fontSize: "2rem" }}>
              Какво казват клиентите
            </Typography>
            <Grid2 container spacing={4} justifyContent="center">
              {[
                {
                  name: "Иван Петров",
                  review:
                    "Уникално приложение! Помогна ми да организирам грижата за моето куче.",
                  rating: 5,
                },
                {
                  name: "Мария Георгиева",
                  review: "Полезни съвети и лесно за ползване. Препоръчвам!",
                  rating: 4,
                },
                {
                  name: "Николай Димитров",
                  review:
                    "Управлението на записи направи живота ми толкова по-лесен.",
                  rating: 5,
                },
              ].map((review, index) => (
                <Grid2 key={index} xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
                  <Slide in={inView.reviews} direction="up" timeout={(index + 1) * 500}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundColor: "background.paper",
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 1, fontSize: "1.2rem" }}>
                        {review.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mb: 2, fontStyle: "italic", fontSize: "1rem" }}
                      >
                        "{review.review}"
                      </Typography>
                      <Box sx={{ color: "primary.main" }}>
                        {Array(review.rating)
                          .fill()
                          .map((_, i) => (
                            <StarIcon key={i} />
                          ))}
                      </Box>
                    </Box>
                  </Slide>
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </Box>

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