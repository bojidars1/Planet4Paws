import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, ListItemButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';

import logo from "/logo.jpeg";

const Navbar = ({ darkMode, handleThemeToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Logo section */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img
              src={logo}
              alt="Planet4Paws Logo"
              style={{ width: '40px', height: '40px', marginRight: '8px' }}
            />
            <Typography variant="h6">
              Planet4Paws
            </Typography>
          </Box>
          
          {/* Spacer for middle section */}
          <Box sx={{ flexGrow: 1 }} />
          
          {/* On mobile, show the menu icon instead of buttons */}
          {isMobile ? (
            <IconButton color="inherit" onClick={toggleMobileMenu}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" component={Link} to="/" sx={{ mr: 2, fontSize: '1em' }}>Начало</Button>
              
              {/* Theme Toggle Button */}
              <IconButton
                color="inherit"
                onClick={handleThemeToggle}
                sx={{ ml: 2 }}
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Начало" />
          </ListItemButton>
          <ListItem onClick={handleThemeToggle}>
            <ListItemText primary={darkMode ? 'Light Mode' : 'Dark Mode'} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
