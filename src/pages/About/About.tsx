import { Box, Typography, Link, Button } from "@mui/material";

export default function About() {
  return (
    <Box className="fade-slide-in" sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        🐾 About This Project
      </Typography>

      <Typography variant="body1" paragraph>
        This site helps you find the perfect dog or cat breed for your lifestyle by filtering
        popular breeds based on temperament, shedding, weight, grooming needs, and more. It's
        built to be fast, mobile-friendly, and requires no login.
      </Typography>

      <Typography variant="body1" paragraph>
        If you're considering bringing a new pet into your life, I highly recommend adopting or
        rescuing. Each breed card links to Petfinder to help you find available pets near you.
        Whether you're a family with kids, a solo adventurer, or someone who prefers a chill
        companion, the right match is out there.
      </Typography>

      <Typography variant="body1" paragraph>
        Soon, I’ll be adding curated summaries of popular dog foods, recommended pet products, and
        real-user reviews of pet health insurance — to help you make informed decisions as a pet parent.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        About Me
      </Typography>

      <Typography variant="body1" paragraph>
        Hi, I'm Taylor — a full-stack developer who got hooked on coding back in the MySpace days.
        I hold a BSc in Computer Science from UNCW 🎓 and have nearly 7 years of experience building software
        at a large corporation.
      </Typography>

      <Typography variant="body1" paragraph>
        Outside of work, I live with my fiancée 💍 and three amazing pets: Kim the Beagle 🐶, Percy the
        American Wirehair 🐱, and Pepper the gray Norwegian Forest Cat mix 🐱. I enjoy lifting 🏋️, playing
        pickleball 🏓, and getting outside whenever I can 🌲.
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", my: 2 }}>
        <Box>
          <img src="/kim.jpeg" alt="Kim the Beagle" style={{ width: 160, borderRadius: 12 }} />
          <Typography align="center">Kim 🐶</Typography>
        </Box>
        <Box>
          <img src="/percy.jpeg" alt="Percy the American Wirehair" style={{ width: 160, borderRadius: 12 }} />
          <Typography align="center">Percy 🐱</Typography>
        </Box>
        <Box>
          <img src="/pepper.jpeg" alt="Pepper the Norwegian Forest Cat" style={{ width: 160, borderRadius: 12 }} />
          <Typography align="center">Pepper 🐱</Typography>
        </Box>
      </Box>

      <Typography variant="body1" paragraph>
        You can learn more about me and my projects at{" "}
        <Link href="https://tln8679.github.io" target="_blank" rel="noopener">
          my personal site
        </Link>
        .
      </Typography>

      <Typography variant="body1" paragraph sx={{ mt: 4 }}>
        This site is a non-profit, personal passion project. If you’ve found it helpful and want to support
        my work, you can send a tip below. Please note that tipping does <strong>not</strong> guarantee
        feature requests or support.
      </Typography>

      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.buymeacoffee.com/taylornobledeveloper"
          target="_blank"
          rel="noopener"
          sx={{ backgroundColor: "#FFDD00", color: "#000", fontWeight: "bold" }}
        >
          ☕ Buy Me a Coffee
        </Button>
      </Box>
    </Box>
  );
}
