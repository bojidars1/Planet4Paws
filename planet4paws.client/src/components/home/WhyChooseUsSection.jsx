import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PetsIcon from "@mui/icons-material/Pets";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SavingsIcon from "@mui/icons-material/Savings";

const WhyChooseSection = ({ inView, darkMode }) => {
  const benefits = [
    {
      icon: <PetsIcon fontSize="large" />,
      title: "Здрав и щастлив любимец",
      description:
        "Следете храненията, разходките и ветеринарните грижи, за да осигурите най-добрата грижа за вашия домашен любимец.",
    },
    {
      icon: <AccessTimeIcon fontSize="large" />,
      title: "Лесно управление на грижите",
      description:
        "Всичко в едно приложение: графици за хранене, ваксинации и напомняния.",
    },
    {
      icon: <SavingsIcon fontSize="large" />,
      title: "Спестете време и пари",
      description:
        "Планирайте грижата разумно и избегнете ненужни разходи и пропуснати прегледи.",
    },
  ];

  const listItems = [
    "Организация и контрол върху всички аспекти на грижата",
    "Намаляване на риска от пропуснати важни събития",
    "Достъп до професионални съвети и подкрепа",
    "Спокойствие и увереност във всеки момент",
    "Подобрено здравословно състояние на домашния любимец",
  ];

  return (
    <Box
      id="whyChoose"
      sx={{
        py: 8,
        px: { xs: 2, md: 4 },
        backgroundColor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#ffffff" : "#333333",
      }}
    >
      <Container>
        <Fade in={inView.whyChoose} timeout={1000}>
          <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: "bold" }}>
            Защо да изберете Planet4Paws?
          </Typography>
        </Fade>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
          {benefits.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in={true} timeout={800 + index * 200}>
                <Card
                  sx={{
                    height: "100%",
                    p: 2,
                    backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
                    borderRadius: 3,
                    boxShadow: 3,
                    textAlign: "center",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2, color: darkMode ? "#90caf9" : "#4caf50" }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: darkMode ? "#cccccc" : "#666666" }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        <Fade in={true} timeout={1500}>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 3,
              fontSize: { xs: "1rem", md: "1.2rem" },
              fontWeight: 500,
              color: darkMode ? "#bbbbbb" : "#555555",
            }}
          >
            Planet4Paws работи за вас и вашия любимец
          </Typography>
        </Fade>

        <Fade in={true} timeout={1800}>
          <List
            sx={{
              maxWidth: 700,
              mx: "auto",
              px: 2,
            }}
          >
            {listItems.map((text, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ color: darkMode ? "#90caf9" : "#4caf50", minWidth: 36 }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Fade>
      </Container>
    </Box>
  );
};

export default WhyChooseSection;