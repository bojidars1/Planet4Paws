import React from "react";
import { Box, Typography } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const DisclaimerBanner = ({ darkMode }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 1.2,
        bgcolor: darkMode ? "#2e2e2e" : "white",
        color: darkMode ? "#ffcc80" : "#5d4037",
        borderBottom: darkMode ? "1px solid #444" : "1px solid #e0c8aa",
        boxShadow: darkMode
          ? "0 2px 4px rgba(0,0,0,0.4)"
          : "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <WarningAmberIcon
        sx={{ mr: 1, fontSize: 20, color: darkMode ? "#ffb74d" : "#ef6c00" }}
      />
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.75rem", sm: "0.85rem" },
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        <strong>SovaSoft Ltd</strong> is a student-run practice enterprise administered by the
        National High School in Finance and Business, Sofia, Bulgaria. SovaSoft does not sell real
        software or services. All activities are for educational purposes only.
      </Typography>
    </Box>
  );
};

export default DisclaimerBanner;