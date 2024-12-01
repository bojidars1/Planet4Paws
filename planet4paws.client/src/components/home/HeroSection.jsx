import React from "react";
import { Box, Typography, Button, Fade } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

const HeroSection = ({ inView, darkMode }) => {
  return (
    <Box
      id="hero"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack on small screens, align horizontally on larger screens
        alignItems: "center",
        justifyContent: "space-between",
        py: 6,
        px: 3,
        mb: 2,
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
            justifyContent: "center", // Ensures the image is centered horizontally
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
  );
};

export default HeroSection;