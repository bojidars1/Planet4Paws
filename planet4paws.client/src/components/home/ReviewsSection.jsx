import React from "react";
import { Box, Container, Typography, Slide, Grid2 } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ReviewsSection = ({ inView, darkMode }) => {
    return (
        <Box sx={{ mt: '2em', py: 6, backgroundColor: darkMode ? "#1e1e1e" : "#f9f9f9" }} id="reviews">
          <Container>
            <Typography variant="h4" align="center" sx={{ mb: 4, fontSize: "2rem" }}>
              Какво казват клиентите
            </Typography>
            <Grid2 container spacing={4} justifyContent="center">
              {[
                {
                  name: "Иван Петров",
                  review:
                    "Уникално приложение! Помогна ми да организирам грижата за моето куче.",
                  rating: 5,
                },
                {
                  name: "Мария Георгиева",
                  review: "Полезни съвети и лесно за ползване. Препоръчвам!",
                  rating: 4,
                },
                {
                  name: "Николай Димитров",
                  review:
                    "Управлението на записи направи живота ми толкова по-лесен.",
                  rating: 5,
                },
              ].map((review, index) => (
                <Grid2 key={index} xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
                  <Slide in={inView.reviews} direction="up" timeout={(index + 1) * 500}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundColor: "background.paper",
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 1, fontSize: "1.2rem" }}>
                        {review.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mb: 2, fontStyle: "italic", fontSize: "1rem" }}
                      >
                        "{review.review}"
                      </Typography>
                      <Box sx={{ color: "primary.main" }}>
                        {Array(review.rating)
                          .fill()
                          .map((_, i) => (
                            <StarIcon key={i} />
                          ))}
                      </Box>
                    </Box>
                  </Slide>
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </Box>
    );
};

export default ReviewsSection;