import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box className="fade-slide-in" sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>About</Typography>
      <Typography variant="body1">
        This site helps you find the perfect dog or cat breed for your lifestyle by filtering
        popular breeds based on temperament, shedding, weight, grooming needs, and more.
        It's built to be fast, mobile-friendly, and requires no login.
      </Typography>
    </Box>
  );
}
