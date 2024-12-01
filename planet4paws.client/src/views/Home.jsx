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
import PetsIcon from "@mui/icons-material/Pets";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import StarIcon from "@mui/icons-material/Star";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "@fontsource/roboto";
import { lightTheme, darkTheme } from '../components/theme/theme';

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
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <PetsIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Planet4Paws
            </Typography>
            <IconButton
              color="inherit"
              onClick={handleThemeToggle}
              sx={{ ml: 2 }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Hero Section with Animation */}
        <Box
  id="hero"
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, // Stack on small screens, align horizontally on larger screens
    alignItems: "center",
    justifyContent: "space-between",
    py: 6,  // Adjusted padding for smaller screens
    px: 3,
    color: darkMode ? "#ffffff" : "#333333",
    background: darkMode
      ? "linear-gradient(135deg, #121212, #37474f, #1e1e1e)"
      : "linear-gradient(135deg, #e8f5e9, #f3f7fa, #ffffff)",
  }}
>
  {/* Text on the left */}
  <Fade in={inView.hero} timeout={1000}>
    <Box
      sx={{
        flex: 1,
        textAlign: { xs: "center", md: "left" }, // Center text on mobile, left-align on larger screens
        ml: { md: 4, xs: 0 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mb: { xs: 4, md: 0 }, // Added margin-bottom for mobile
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: "2.2rem", md: "2.5rem" }, // Slightly larger font size on mobile
          lineHeight: 1.4,
          letterSpacing: 0.5,
        }}
      >
        Най-добрата грижа за вашия най-добър приятел
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mb: 4,
          fontSize: { xs: "1rem", md: "1.2rem" },
          color: darkMode ? "#bbbbbb" : "#555555",
        }}
      >
        Лесно за ползване, полезни съвети и всичко нужно за вашия домашен
        любимец – на едно място.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mr: 2,
            fontSize: "1rem",
            borderRadius: "20px",
            padding: "12px 30px",
            textTransform: "none",
            boxShadow: 3,
            transition: "transform 0.3s ease, background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "primary.dark",
              transform: "translateY(-4px)",
            },
          }}
        >
          Започнете
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            fontSize: "1rem",
            borderRadius: "20px",
            padding: "12px 30px",
            textTransform: "none",
            boxShadow: 3,
            transition: "transform 0.3s ease, color 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              color: "primary.dark",
            },
          }}
        >
          Научете Повече
        </Button>
      </Box>
    </Box>
  </Fade>

  {/* Image on the right */}
  <Fade in={inView.hero} timeout={1500}>
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",  // Ensures the image is centered horizontally
        alignItems: "center",
        mt: { xs: 4, md: 0 }, // Add top margin on mobile for spacing
        opacity: 0,
        animation: "fadeIn 1.5s forwards", // Custom animation for the image
      }}
    >
      <img
        src="src/assets/hero.png" // Replace with your image URL
        alt="Hero Image"
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "8px",
          transform: "translateX(-30px)", // Slight animation effect for the image
          animation: "moveIn 1.5s ease-out forwards", // Custom move-in animation
        }}
      />
    </Box>
  </Fade>
</Box>

        {/* Features Section */}
        <Container sx={{ py: 6 }}>
          <Typography variant="h4" align="center" sx={{ mb: 4, fontSize: "2rem" }}>
            Какво предлагаме
          </Typography>
          <Grid2 container spacing={4} justifyContent="center" id="features">
            {[
              {
                title: "Напомняния за хранене",
                icon: <PetsIcon sx={{ fontSize: 50 }} />,
                description:
                  "Задавайте график и никога не забравяйте кога е време за хранене.",
              },
              {
                title: "Полезни съвети за здраве",
                icon: <PetsIcon sx={{ fontSize: 50 }} />,
                description:
                  "Научете как да поддържате вашия домашен любимец здрав и щастлив.",
              },
              {
                title: "Управление на записи",
                icon: <PetsIcon sx={{ fontSize: 50 }} />,
                description:
                  "Съхранявайте важна информация за посещения при ветеринар и ваксинации.",
              },
            ].map((feature, index) => (
              <Grid2
                key={index}
                xs={12} sm={6} md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Grow in={inView.features} timeout={(index + 1) * 500}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      boxShadow: 3,
                      backgroundColor: "background.paper",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <IconButton color="primary" disableRipple>
                      {feature.icon}
                    </IconButton>
                    <Typography variant="h6" sx={{ mt: 2, fontSize: "1.2rem" }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, fontSize: "1rem" }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Grow>
              </Grid2>
            ))}
          </Grid2>
        </Container>

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