import React from "react";
import { Box, Container, Grid2, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom"; // ✅ Import Link

const Footer = ({ darkMode }) => {
  return (
    <Box sx={{ py: 4, backgroundColor: darkMode ? "#121212" : "#e8e8e8" }}>
      <Container>
        <Grid2 container spacing={2} alignItems="center" justifyContent="center">
          {/* Text + Socials */}
          <Grid2 xs={12} sm={6} sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <img
                src="/sovasoft-logo.jpeg"
                alt="SovaSoft Logo"
                style={{
                  height: 50,
                  objectFit: "contain",
                  filter: darkMode ? "brightness(0.85)" : "none",
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ fontSize: "1rem", mb: 1 }}>
              © 2025 SovaSoft Ltd. All rights reserved.
            </Typography>

            {/* Privacy Policy Link */}
            <Typography variant="body2" sx={{ mt: 1, fontSize: "1.1em" }}>
              <Link
                to="/privacy-policy"
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  fontWeight: 500,
                }}
              >
                Privacy Policy
              </Link>
            </Typography>

            <IconButton
              color="primary"
              href="https://instagram.com/planet4paws_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>
          </Grid2>

          {/* Google Map */}
          <Grid2 xs={12} sm={6} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                mt: { xs: 2, sm: 0 },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <iframe
                title="Planet4Paws Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.9746186023217!2d23.323288711705466!3d42.683079971044414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa925f4a5afe07%3A0xd6e7a4d0a1d971a0!2z0J3QsNGG0LjQvtC90LDQu9C90LAg0YTQuNC90LDQvdGB0L7QstC-LdGB0YLQvtC_0LDQvdGB0LrQsCDQs9C40LzQvdCw0LfQuNGP!5e0!3m2!1sbg!2sbg!4v1745440286541!5m2!1sbg!2sbg"
                width="100%"
                height="200"
                style={{
                  border: 0,
                  borderRadius: 8,
                  maxWidth: 400,
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Footer;
