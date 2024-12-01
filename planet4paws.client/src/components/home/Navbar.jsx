import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import logo from "../../assets/logo.jpeg";

const Navbar = ({ darkMode, handleThemeToggle }) => {
  return (
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
        
        {/* Placeholder action buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" sx={{ mr: 2, fontSize: '1em' }}>Начало</Button>
          <Button color="inherit" sx={{ mr: 2, fontSize: '1em' }}>Влизане</Button>
          <Button color="inherit" sx={{ mr: 2, fontSize: '1em' }}>Регистрация</Button>
          
          {/* Theme Toggle Button */}
          <IconButton
            color="inherit"
            onClick={handleThemeToggle}
            sx={{ ml: 2 }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;