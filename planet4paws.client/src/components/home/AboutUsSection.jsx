import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Fade,
  Link as MuiLink,
} from "@mui/material";

const AboutSection = ({ darkMode, inView }) => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        px: { xs: 2, md: 4 },
        backgroundColor: darkMode ? "#1e1e1e" : "#f9f9f9",
        color: darkMode ? "#ffffff" : "#333333",
      }}
    >
      <Container>
        <Fade in={inView?.about} timeout={1000}>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
            За нас
          </Typography>
        </Fade>

        <Grid container spacing={4} alignItems="center">
          {/* Text */}
          <Grid item xs={12} md={6}>
            <Fade in={inView?.about} timeout={1200}>
              <Box>
                <img
                  src="/sovasoft-logo.jpeg"
                  alt="SovaSoft Logo"
                  style={{
                    height: 50,
                    marginRight: 12,
                    objectFit: "contain",
                    filter: darkMode ? "brightness(0.9)" : "none",
                  }}
                />
                <Typography variant="h6" sx={{ mb: 2, color: darkMode ? "#bbbbbb" : "#555555" }}>
                  <strong>SovaSoft ООД</strong><br />
                  Учебно предприятие към Националната финансово-стопанска гимназия, гр. София.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  <strong>Planet4Paws</strong> е проект, разработен от екип ученици с интерес към
                  технологиите, бизнеса и грижата за домашни любимци. Нашата цел е да създаваме
                  софтуерни решения с реална стойност и практическо приложение.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    boxShadow: 3,
                    mb: 2,
                  }}
                  href="mailto:sovasoftnfsg@gmail.com"
                >
                  Свържете се с нас и получете специална цена!
                </Button>
              </Box>
            </Fade>
          </Grid>

          {/* Team Image */}
          <Grid item xs={12} md={6}>
            <Fade in={inView?.about} timeout={1500}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/teamPhoto.jpg"
                  alt="Екипът на Planet4Paws"
                  style={{
                    width: "100%",
                    maxWidth: 500,
                    borderRadius: 12,
                    boxShadow: darkMode
                      ? "0 8px 24px rgba(0,0,0,0.5)"
                      : "0 8px 24px rgba(0,0,0,0.1)",
                  }}
                />
              </Box>
            </Fade>
          </Grid>
        </Grid>

        {/* Contact Info */}
        <Fade in={inView?.about} timeout={1800}>
          <Box sx={{ p: 5, mt: 6, textAlign: "center", border: 1, borderColor: "primary.main", borderRadius: "50%" }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              Контакти
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>СоваСофт ООД</strong>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Имейл:{" "}
              <MuiLink href="mailto:sovasoftnfsg@gmail.com" underline="hover" color="primary">
                sovasoftnfsg@gmail.com
              </MuiLink>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Instagram:{" "}
              <MuiLink
                href="https://instagram.com/planet4paws_"
                target="_blank"
                rel="noopener"
                underline="hover"
                color="primary"
              >
                @planet4paws_
              </MuiLink>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Уебсайт:{" "}
              <MuiLink
                href="https://www.planet4paws.netlify.app"
                target="_blank"
                rel="noopener"
                underline="hover"
                color="primary"
              >
                www.planet4paws.netlify.app
              </MuiLink>
            </Typography>
            <Typography variant="body1">
              Национална финансово-стопанска гимназия, гр. София
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default AboutSection;