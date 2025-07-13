import { Box, Typography, Card, CardContent, Stack, Rating, Link } from "@mui/material";

export default function FoodReviews() {
  return (
    <Box className="fade-slide-in" sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        🍽️ Food Reviews
      </Typography>
      <Typography variant="body1" gutterBottom>
        Curious about the best food for your pet? We're gathering reviews of popular
        dog and cat food brands to help you choose high-quality, nutritious options
        that fit your pet’s needs and your budget.
      </Typography>

      <Typography variant="h5" gutterBottom mt={4}>
        Cat Food
      </Typography>
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Fussie Cat Market Fresh Salmon
            </Typography>
            <Rating value={5} readOnly />
            <Typography>
              My cats no longer throw up on this diet. Highly recommended!
            </Typography>
            <Link href="https://fussiecat.com/market-fresh-salmon-2/" target="_blank" rel="noopener">
              View Product
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Purina One Salmon Blend</Typography>
            <Rating value={3} readOnly />
            <Typography>
              Affordable and tasty, but caused vomiting for my cats.
            </Typography>
            <Link
              href="https://www.purina.com/cats/shop/purina-one-salmon-tender-selects-blend-dry-cat-food"
              target="_blank"
              rel="noopener"
            >
              View Product
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Blue Buffalo GI Support (Prescription)</Typography>
            <Rating value={3} readOnly />
            <Typography>
              Helped sometimes, but inconsistent and expensive.
            </Typography>
            <Link
              href="https://www.bluebuffalo.com/dry-cat-food/blue-natural-veterinary-diet/gastrointestinal-support/"
              target="_blank"
              rel="noopener"
            >
              View Product
            </Link>
          </CardContent>
        </Card>

        {/* Popular cat foods from online sources */}
        <Card>
          <CardContent>
            <Typography variant="h6">Hill's Science Diet</Typography>
            <Rating value={4} readOnly />
            <Typography>
              Widely trusted by vets; balanced formula, but not grain-free.
            </Typography>
            <Link
              href="https://www.hillspet.com/cat-food/sd-feline-adult-indoor-dry"
              target="_blank"
              rel="noopener"
            >
              View Product
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Tiki Cat Born Carnivore</Typography>
            <Rating value={4} readOnly />
            <Typography>
              High protein, grain-free. Popular among Reddit cat owners.
            </Typography>
            <Link href="https://tikipets.com/product/tiki-cat-born-carnivore/" target="_blank" rel="noopener">
              View Product
            </Link>
          </CardContent>
        </Card>
      </Stack>

      <Typography variant="h5" gutterBottom mt={4}>
        Dog Food
      </Typography>
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Typography variant="h6">NutriSource Lamb & Peas</Typography>
            <Rating value={5} readOnly />
            <Typography>
              My dog Kim thrives on this. Firm stool and healthy digestion.
            </Typography>
            <Link href="https://nutrisourcepetfoods.com/our-food/lamb-meal-peas-recipe/" target="_blank" rel="noopener">
              View Product
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">IAMS Small Breed</Typography>
            <Rating value={2} readOnly />
            <Typography>
              Affordable but caused upset stomach and loose stool.
            </Typography>
            <Link href="https://www.iams.com/products/dry/iams-small-breed" target="_blank" rel="noopener">
              View Product
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Blue Buffalo</Typography>
            <Rating value={3} readOnly />
            <Typography>
              Slightly better than IAMS but still inconsistent for digestion.
            </Typography>
            <Link href="https://bluebuffalo.com/" target="_blank" rel="noopener">
              View Product
            </Link>
          </CardContent>
        </Card>

        {/* Popular dog foods from online sources */}
        <Card>
          <CardContent>
            <Typography variant="h6">Wellness Core RawRev</Typography>
            <Rating value={4} readOnly />
            <Typography>
              High-protein kibble with freeze-dried raw pieces. Great for active dogs.
            </Typography>
            <Link href="https://www.wellnesspetfood.com/" target="_blank" rel="noopener">
              View Product
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">The Farmer’s Dog</Typography>
            <Rating value={5} readOnly />
            <Typography>
              Vet-formulated fresh food delivered to your door. High owner satisfaction.
            </Typography>
            <Link href="https://www.thefarmersdog.com/" target="_blank" rel="noopener">
              View Product
            </Link>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
