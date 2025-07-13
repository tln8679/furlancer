import { Box, Card, CardContent, Rating, Stack, Typography, Link } from "@mui/material";

export default function InsuranceReviews() {
  return (
    <Box sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        🩺 Pet Insurance Reviews
      </Typography>

      <Typography variant="body1" gutterBottom>
        Below are pet insurance reviews from my own experience and from popular sources like Reddit and US News.
      </Typography>

      <Stack spacing={3} mt={3}>
        {/* My Reviews */}
        <Card>
          <CardContent>
            <Typography variant="h6">PetsBest</Typography>
            <Rating value={4} readOnly />
            <Typography variant="body2">
              I currently use PetsBest. I've submitted two claims and both were processed quickly and easily.
              The app could be improved and they could follow up more often.
            </Typography>
            <Link href="https://www.petsbest.com/" target="_blank" rel="noopener">
              Visit PetsBest
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Healthy Paws</Typography>
            <Rating value={3} readOnly />
            <Typography variant="body2">
              I used Healthy Paws in the past. They gave a sharp price increase after the first year, and were slow to process a claim.
            </Typography>
            <Link href="https://www.healthypawspetinsurance.com/" target="_blank" rel="noopener">
              Visit Healthy Paws
            </Link>
          </CardContent>
        </Card>

        {/* Public Reviews */}
        <Card>
          <CardContent>
            <Typography variant="h6">Trupanion</Typography>
            <Rating value={4} readOnly />
            <Typography variant="body2">
              Known for not requiring upfront payment at some vet offices. Premiums can be higher than competitors.
            </Typography>
            <Link href="https://trupanion.com/" target="_blank" rel="noopener">
              Visit Trupanion
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Figo</Typography>
            <Rating value={4} readOnly />
            <Typography variant="body2">
              Offers 24/7 live vet chat. Great tech, app experience, and customizable coverage.
            </Typography>
            <Link href="https://www.figopetinsurance.com/" target="_blank" rel="noopener">
              Visit Figo
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Embrace</Typography>
            <Rating value={4} readOnly />
            <Typography variant="body2">
              Covers alternative treatments like acupuncture. Higher deductibles but fewer exclusions.
            </Typography>
            <Link href="https://www.embracepetinsurance.com/" target="_blank" rel="noopener">
              Visit Embrace
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">ASPCA Pet Health Insurance</Typography>
            <Rating value={3} readOnly />
            <Typography variant="body2">
              Broad coverage but some users mention claims take longer than expected.
            </Typography>
            <Link href="https://www.aspcapetinsurance.com/" target="_blank" rel="noopener">
              Visit ASPCA Insurance
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Nationwide</Typography>
            <Rating value={3} readOnly />
            <Typography variant="body2">
              One of the few that covers exotic pets. Mixed reviews on customer service and claim limits.
            </Typography>
            <Link href="https://www.petinsurance.com/" target="_blank" rel="noopener">
              Visit Nationwide
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Pumpkin</Typography>
            <Rating value={4} readOnly />
            <Typography variant="body2">
              Offers preventive care add-ons and no upper age limits. Slightly pricier.
            </Typography>
            <Link href="https://www.pumpkin.care/" target="_blank" rel="noopener">
              Visit Pumpkin
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Spot</Typography>
            <Rating value={3} readOnly />
            <Typography variant="body2">
              Popular with younger pet parents for flexible plans. Some complaints about customer service response times.
            </Typography>
            <Link href="https://www.spotpetins.com/" target="_blank" rel="noopener">
              Visit Spot
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Lemonade</Typography>
            <Rating value={4} readOnly />
            <Typography variant="body2">
              Tech-first company known for fast processing and an easy-to-use app. May not cover older pets.
            </Typography>
            <Link href="https://www.lemonade.com/pet/" target="_blank" rel="noopener">
              Visit Lemonade
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">ManyPets</Typography>
            <Rating value={4} readOnly />
            <Typography variant="body2">
              UK-based insurer with comprehensive coverage and low deductibles. Newer to the U.S. market.
            </Typography>
            <Link href="https://manypets.com/us/" target="_blank" rel="noopener">
              Visit ManyPets
            </Link>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
