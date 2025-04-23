import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";

const PrivacyPolicy = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 4 },
        backgroundColor: isDark ? "#121212" : "#fafafa",
        color: isDark ? "#ffffff" : "#333333",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography paragraph>
          Our company, <strong>SovaSoft</strong>, is committed to your privacy and the protection of your personal information.
          This Privacy Policy describes how we collect, use, store, and protect your personal data when you interact with our products and services.
        </Typography>

        {/* Section 1 */}
        <Typography variant="h6" gutterBottom>1. What Data We Collect</Typography>
        <Typography paragraph>
          We collect various types of information depending on how you use our services:
        </Typography>
        <ul>
          <li><strong>Personal Data:</strong> Name, email address, phone number, payment details, shipping addresses, and other personal information.</li>
          <li><strong>Technical Data:</strong> IP addresses, browser information, operating system, time zone, and device information.</li>
          <li><strong>Usage Data:</strong> How you use our products and services, interactions with our platforms, session identifiers.</li>
        </ul>

        {/* Section 2 */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>2. How We Use Your Data</Typography>
        <ul>
          <li>Providing and maintaining our services.</li>
          <li>Processing payments and deliveries.</li>
          <li>Notifying you of promotions, news, and updates related to our products.</li>
          <li>Improving the quality of services and functionality of our products.</li>
          <li>Responding to inquiries and providing technical support.</li>
          <li>Complying with legal requirements.</li>
        </ul>
        <Typography paragraph>
          <strong>Use of Data Until June 30:</strong> The data we collect will be used for the purposes stated until June 30 of the relevant calendar year. After this, we will archive or restrict processing unless legally necessary.
        </Typography>

        {/* Section 3 */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>3. Sharing Data with Third Parties</Typography>
        <Typography paragraph>
          We do not sell, trade, or transfer your personal data. We may share data with trusted service providers who help us deliver services (e.g., hosting, payment processing). They must comply with our standards and use your data only for relevant services.
        </Typography>

        {/* Section 4 */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>4. Data Protection</Typography>
        <Typography paragraph>
          We use technical and organizational measures to protect your data, including encryption and secure systems.
        </Typography>

        {/* Section 5 */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>5. Your Rights Regarding Your Personal Data</Typography>
        <ul>
          <li>Access and correct your personal data.</li>
          <li>Request deletion of unnecessary data.</li>
          <li>Object to marketing use.</li>
          <li>Request portability of your data.</li>
        </ul>
        <Typography paragraph>
          <strong>Data Deletion Request:</strong> You may submit a request to delete your data. We'll process this within 15 days unless legally required to keep it.
        </Typography>

        {/* Section 6 */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>6. Cookies</Typography>
        <Typography paragraph>
          Our website uses cookies to enhance functionality. You may disable them in your browser, though it may affect some features.
        </Typography>

        {/* Section 7 */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>7. Policy Changes</Typography>
        <Typography paragraph>
          We may update this Privacy Policy at any time. You'll be notified of any major changes. The revision date will also be updated.
        </Typography>

        {/* Section 8 */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>8. Contact Us</Typography>
        <Typography paragraph>
          If you have questions about this Privacy Policy or your data, contact us at:
        </Typography>
        <ul>
          <li><strong>Email:</strong> sovasoftnfsg@gmail.com</li>
          <li><strong>Phone:</strong> 0877446131</li>
          <li><strong>Address:</strong> Sofia, Lozenets, 1 "Rozova Dolina" Street</li>
        </ul>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;