import { Box, Typography } from "@mui/material";

export default function UserAgreement() {
  return (
    <Box className="fade-slide-in" sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        📜 User Agreement
      </Typography>

      <Typography variant="body1" paragraph>
        By accessing or using this website, you agree to the following terms and
        conditions. If you do not agree with these terms, please do not use this site.
      </Typography>

      <Typography variant="h6" gutterBottom>
        General Disclaimer
      </Typography>
      <Typography variant="body1" paragraph>
        This site is for informational purposes only. While we aim to provide helpful
        guidance and insights about dog and cat breeds, pet insurance, pet food,
        and related products or services, we do not guarantee the accuracy,
        completeness, or reliability of any information presented.
      </Typography>

      <Typography variant="h6" gutterBottom>
        No Liability
      </Typography>
      <Typography variant="body1" paragraph>
        The site owner, authors, or contributors shall not be held responsible or liable
        for any loss, damage, injury, death, financial loss, or other negative outcome
        resulting from the use or misuse of information on this site. This includes, but
        is not limited to, consequences of adopting a pet, purchasing insurance or food,
        or relying on breed suitability, ratings, or reviews presented here.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Reviews and Opinions
      </Typography>
      <Typography variant="body1" paragraph>
        Any product or service reviews — including ratings for pet insurance providers,
        food brands, or other pet-related offerings — represent personal opinions or
        summaries of publicly available information and community sentiment (e.g. Reddit,
        forums, or news publications). These are provided for convenience and commentary
        only. Companies referenced or reviewed on this site waive any right to pursue
        legal action for slander, defamation, or loss of reputation.
      </Typography>

      <Typography variant="h6" gutterBottom>
        No Endorsement or Affiliation
      </Typography>
      <Typography variant="body1" paragraph>
        This site is not affiliated with, endorsed by, or sponsored by any insurance
        company, pet food manufacturer, pet adoption platform (including Petfinder), or
        any third-party product or service. All trademarks, images, and brand names are
        the property of their respective owners and are used for identification purposes
        only under fair use.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Use at Your Own Risk
      </Typography>
      <Typography variant="body1" paragraph>
        You are solely responsible for your decisions based on the content provided on
        this site. Always consult with qualified professionals (veterinarians, trainers,
        or financial advisors) before making significant pet-related decisions.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Changes to This Agreement
      </Typography>
      <Typography variant="body1" paragraph>
        This agreement may be updated at any time without notice. Continued use of the
        site constitutes your acceptance of any changes.
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Last updated: {new Date().toLocaleDateString()}
      </Typography>
    </Box>
  );
}
