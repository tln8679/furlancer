import { Box, Typography } from "@mui/material";

export default function InsuranceReviews() {
  return (
    <Box className="fade-slide-in" sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>Insurance Reviews</Typography>
      <Typography variant="body1">
        We are working on compiling reviews and comparisons of pet insurance providers
        to help you make the best decision for your furry friend’s health and budget.
        Stay tuned!
      </Typography>
    </Box>
  );
}
