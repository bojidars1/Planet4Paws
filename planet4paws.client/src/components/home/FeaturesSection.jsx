import React from "react";
import { Box, Typography, Grid2, Grow, Container, IconButton } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

const FeaturesSection = ({ inView, darkMode }) => {
  const features = [
    {
      title: "Богатство от съвети",
      description: "Получете полезни съвети и насоки за грижа за вашия домашен любимец.",
      icon: "https://img.icons8.com/ios/50/ffffff/pet.png",
    },
    {
      title: "Грижа за здравето",
      description: "Научете как да се грижите за здравето на вашия домашен любимец.",
      icon: "https://img.icons8.com/ios/50/ffffff/health.png",
    },
    {
      title: "Лесно за използване",
      description: "Интерфейсът ни е прост и интуитивен, за да може всеки да се възползва.",
      icon: "https://img.icons8.com/ios/50/ffffff/phone.png",
    },
  ];

  return (
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
  );
};

export default FeaturesSection;