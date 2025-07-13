import { Box, Typography } from "@mui/material";

export default function UserAgreement() {
  return (
    <Box className="fade-slide-in" sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>User Agreement</Typography>
      <Typography variant="body1">
        By using this site, you agree not to misuse the tool or its data. We do not
        collect personal information or require account creation. This service is offered
        as-is with no guarantees. Please use it responsibly and consult a vet for any
        real-life pet decisions.
      </Typography>
    </Box>
  );
}
