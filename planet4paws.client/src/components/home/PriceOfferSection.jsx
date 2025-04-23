import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  useTheme,
  Button,
} from "@mui/material";

const PriceOfferSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="pricing"
      sx={{
        py: 8,
        px: { xs: 2, md: 4 },
        backgroundColor: isDark ? "#1e1e1e" : "#fefefe",
        color: isDark ? "#ffffff" : "#333333",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
          Абонаментен план
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Standard Plan */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: isDark ? "#2a2a2a" : "#ffffff",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Стандартен абонамент
              </Typography>
              <Typography variant="h4" color="primary" fontWeight="bold">
                14.99 лв./месец
              </Typography>
            </Paper>
          </Grid>

          {/* Special Offer */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: isDark ? "#283593" : "#e3f2fd",
                color: isDark ? "#ffffff" : "#0d47a1",
                textAlign: "center",
                position: "relative",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                🎉 Специална оферта
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                19.99 лв. / 2 месеца
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Само за <strong>нови потребители</strong> при регистрация до{" "}
                <strong>30.04.2025 г.</strong> за едно устройство.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PriceOfferSection;