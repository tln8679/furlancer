import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Link,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import { cats } from './metadata/cats';
import { dogs } from './metadata/dogs';

export default function BreedResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const formState = location.state;

  const {
    species,
    minWeight,
    maxWeight,
    activity,
    price,
    sheds,
    grooming,
    trainability,
    barks,
    affectionate,
    talkative,
    hypoallergenic,
    kidFriendly,
  } = formState;

  const allBreeds = species === 'dog' ? dogs : cats;

  const filteredResults = allBreeds.filter((breed: any) => {
    const weightOk =
      parseInt(breed.minWeight) >= parseInt(minWeight) &&
      parseInt(breed.maxWeight) <= parseInt(maxWeight);

    const matches =
      breed.activity === activity &&
      breed.price === price &&
      breed.sheds === sheds &&
      breed.grooming === grooming &&
      breed.hypoallergenic === hypoallergenic &&
      breed.kidFriendly === kidFriendly;

    const extraDogMatch =
      species === 'dog'
        ? breed.trainability === trainability && breed.barks === barks
        : true;

    const extraCatMatch =
      species === 'cat'
        ? breed.talkative === talkative && breed.affectionate === affectionate
        : true;

    return weightOk && matches && extraDogMatch && extraCatMatch;
  });

  const [showAll, setShowAll] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  const displayedResults = showAll
    ? allBreeds.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : filteredResults;

  const totalPages = Math.ceil(allBreeds.length / itemsPerPage);

  return (
    <Box sx={{ p: 4 }}>
      <Stack direction="row" spacing={2} mb={3}>
        <Button
          variant="outlined"
          onClick={() =>
            navigate('/', {
              state: {
                species,
                minWeight,
                maxWeight,
                activity,
                price,
                sheds,
                grooming,
                trainability,
                barks,
                affectionate,
                talkative,
                hypoallergenic,
                kidFriendly,
              },
            })
          }
        >
          ← Back to Search
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setShowAll(true);
            setPage(1);
          }}
        >
          Show All {species === 'dog' ? 'Dogs' : 'Cats'}
        </Button>
      </Stack>

      {!showAll && (
        <Typography variant="h4" gutterBottom>
          {filteredResults.length > 0
            ? `🎉 ${filteredResults.length} ${species} breeds found`
            : `😿 No ${species} breeds matched your filters`}
        </Typography>
      )}

      {showAll && (
        <>
          <Typography variant="h4" gutterBottom>
            All {species}s ({allBreeds.length})
          </Typography>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            sx={{ mb: 3 }}
          />
        </>
      )}

      <Stack spacing={3}>
        {displayedResults.map((breed: any) => (
          <Card key={breed.name}>
            <CardMedia
              component="img"
              height="160"
              image={
                breed.image ||
                (species === 'dog' ? '/defaultdog.png' : '/defaultcat.png')
              }
              alt={breed.name}
              sx={{ objectFit: 'contain', backgroundColor: '#f5f5f5' }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {breed.name}
              </Typography>
              <Link href={breed.usefulLink} target="_blank" rel="noopener">
                Learn more
              </Link>
              <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                <Chip label={`Activity: ${breed.activity}`} />
                <Chip label={`Grooming: ${breed.grooming}`} />
                <Chip label={`Sheds: ${breed.sheds}`} />
                <Chip label={`$: ${breed.price}`} />
                <Chip
                  label={`Weight: ${breed.minWeight}-${breed.maxWeight} lbs`}
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {showAll && (
        <>
          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            All {species}s ({allBreeds.length})
          </Typography>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            sx={{ mb: 3 }}
          />
        </>
      )}
    </Box>
  );
}
