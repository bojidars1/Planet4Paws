import React from "react";
import { Box, Container, Grid2, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = ({ darkMode }) => {
    return (
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
    );
}

export default Footer;