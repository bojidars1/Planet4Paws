import React from 'react';
import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Container,
    CssBaseline,
    Switch,
    Grid2,
  } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PetsIcon from "@mui/icons-material/Pets";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#4caf50'
            },
            background: {
                default: '#f5f5f5',
                paper: '#ffffff'
            },
            text: {
                primary: '#000000',
                secondary: "#333333"
            }
        }
    });

    const darkTheme = createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#90caf9",
          },
          background: {
            default: "#121212",
            paper: "#1e1e1e",
          },
          text: {
            primary: "#ffffff",
            secondary: "#bbbbbb"
          },
        },
      });

      const currentTheme = darkMode ? darkTheme : lightTheme;

      const handleThemeToggle = () => {
        setDarkMode(!darkMode);
      };

      return (
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          <Box
            sx={{
              backgroundColor: "background.default",
              color: "text.primary",
              minHeight: "100vh",
            }}
          >
            {/* Navbar */}
            <AppBar position="static" color="primary">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                  <PetsIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Planet4Paws
                </Typography>
                <IconButton color="inherit" onClick={handleThemeToggle} sx={{ ml: 2 }}>
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Toolbar>
            </AppBar>
    
            {/* Hero Section */}
            <Box
              sx={{
                textAlign: "center",
                py: 10,
                px: 3,
                backgroundImage: `url(https://source.unsplash.com/featured/?pets)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: darkMode ? "#ffffff" : "#333333", // Dark text for light theme
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                Caring for Your Pets, Made Simple
              </Typography>
              <Typography variant="h6" sx={{ mb: 4 }}>
                Everything you need to keep your pets happy and healthy, all in one place.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mr: 2 }}
              >
                Get Started
              </Button>
              <Button variant="outlined" color="primary" size="large">
                Learn More
              </Button>
            </Box>
    
            {/* Features Section */}
            <Container sx={{ py: 6 }}>
              <Typography variant="h4" align="center" sx={{ mb: 4 }}>
                Key Features
              </Typography>
              <Grid2
                container
                spacing={4}
                sx={{
                  display: "flex",
                  justifyContent: "center", // Centers the cards horizontally
                  alignItems: "center", // Centers the cards vertically
                }}
              >
                {[
                  {
                    title: "Feeding Reminders",
                    icon: <PetsIcon sx={{ fontSize: 50 }} />,
                    description: "Never forget a feeding time again!",
                  },
                  {
                    title: "Health Tips",
                    icon: <PetsIcon sx={{ fontSize: 50 }} />,
                    description: "Keep your pets healthy and happy.",
                  },
                  {
                    title: "Pet Records",
                    icon: <PetsIcon sx={{ fontSize: 50 }} />,
                    description: "Manage vet visits and medical records.",
                  },
                ].map((feature, index) => (
                  <Grid2
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 3,
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundColor: "background.paper",
                      }}
                    >
                      <IconButton color="primary" disableRipple>
                        {feature.icon}
                      </IconButton>
                      <Typography variant="h6" sx={{ mt: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
            </Container>
          </Box>
        </ThemeProvider>
      );
};

export default Home;