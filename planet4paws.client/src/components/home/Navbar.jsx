import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Navbar = ({ darkMode, handleThemeToggle }) => {
  return (
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
  );
};

export default Navbar;