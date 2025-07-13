import { Box, Typography } from "@mui/material";

export default function FoodReviews() {
  return (
    <Box className="fade-slide-in" sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>Food Reviews</Typography>
      <Typography variant="body1">
        Curious about the best food for your pet? We're gathering reviews of popular
        dog and cat food brands to help you choose high-quality, nutritious options
        that fit your pet’s needs and your budget.
      </Typography>
    </Box>
  );
}
