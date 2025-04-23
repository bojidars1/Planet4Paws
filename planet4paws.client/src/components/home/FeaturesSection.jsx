import React from "react";
import { Box, Typography, Grid2, Grow, Container, IconButton } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import GroupsIcon from "@mui/icons-material/Groups";

const FeaturesSection = ({ inView, darkMode }) => {
  const features = [
    {
      title: "Профил на животното",
      icon: <PetsIcon sx={{ fontSize: 50 }} />,
      description: "Персонализирана информация според вида и породата.",
    },
    {
      title: "Хранене и диета",
      icon: <LocalDiningIcon sx={{ fontSize: 50 }} />,
      description: "Индивидуални препоръки и планове за хранене.",
    },
    {
      title: "Ваксини и прегледи",
      icon: <VaccinesIcon sx={{ fontSize: 50 }} />,
      description: "График, напомняния и история на медицинските събития.",
    },
    {
      title: "Здравен дневник",
      icon: <FavoriteIcon sx={{ fontSize: 50 }} />,
      description: "Ежедневно проследяване на състоянието на любимеца.",
    },
    {
      title: "Образователни ресурси",
      icon: <MenuBookIcon sx={{ fontSize: 50 }} />,
      description: "Статии и видео материали за грижата за животни.",
    },
    {
      title: "Връзка с ветеринар",
      icon: <VideoCallIcon sx={{ fontSize: 50 }} />,
      description: "Чат, имейл или видео разговор с професионалист.",
    },
    {
      title: "Общност",
      icon: <GroupsIcon sx={{ fontSize: 50 }} />,
      description: "Платформа за обмен на опит между стопани.",
    },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontSize: "2rem" }}>
        Какво предлагаме
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{
          mb: 6,
          fontSize: { xs: "1rem", md: "1.2rem" },
          color: darkMode ? "#bbbbbb" : "#555555",
        }}
      >
        Всичко необходимо за пълноценна грижа
      </Typography>
      <Grid2 container spacing={4} justifyContent="center" id="features">
        {features.map((feature, index) => (
          <Grid2
            key={index}
            xs={12}
            sm={6}
            md={4}
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
  );
};

export default FeaturesSection;