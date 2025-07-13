import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Link,
  Pagination,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import InfoIcon from "@mui/icons-material/Info";
import { cats } from "../../libs/shared/metadata/cats";
import { dogs } from "../../libs/shared/metadata/dogs";

export default function BreedResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const formState = location.state;

  const {
    species,
    minWeight,
    maxWeight,
    affectionate,
    hypoallergenic,
    kidFriendly,
    activityLevelLow,
    activityLevelMedium,
    activityLevelHigh,
    sheddingLevelLow,
    sheddingLevelMedium,
    sheddingLevelHigh,
    groomingLow,
    groomingHigh,
    groomingMedium,
    trainabilityEasy,
    trainabilityDifficult,
    trainabilityModerate,
    barksLow,
    barksMedium,
    barksHigh,
    talkativeChatty,
    talkativeQuiet,
  } = formState;

  const allBreeds = species === "dog" ? dogs : cats;

  const filteredResults = useMemo(
    () =>
      allBreeds
        .filter((breed: any) => {
          const weightOk =
            (!minWeight || parseInt(breed.minWeight) >= parseInt(minWeight)) &&
            (!maxWeight || parseInt(breed.maxWeight) <= parseInt(maxWeight));

          const matches =
            (hypoallergenic !== true || breed.hypoallergenic === true) &&
            (kidFriendly !== true || breed.kidFriendly === true);

          // Activity
          const activitySelected =
            activityLevelLow || activityLevelMedium || activityLevelHigh;
          const activityMatch =
            !activitySelected ||
            (activityLevelLow && breed.activity === "low") ||
            (activityLevelMedium && breed.activity === "medium") ||
            (activityLevelHigh && breed.activity === "high");

          // Shedding
          const sheddingSelected =
            sheddingLevelLow || sheddingLevelMedium || sheddingLevelHigh;
          const sheddingMatch =
            !sheddingSelected ||
            (sheddingLevelLow && breed.sheds === "none") ||
            (sheddingLevelMedium && breed.sheds === "little") ||
            (sheddingLevelHigh && breed.sheds === "lot");

          // Grooming
          const groomingSelected =
            groomingLow || groomingMedium || groomingHigh;
          const groomingMatch =
            !groomingSelected ||
            (groomingLow && breed.grooming === "low") ||
            (groomingMedium && breed.grooming === "medium") ||
            (groomingHigh && breed.grooming === "high");

          // Dog-specific
          const trainabilitySelected =
            trainabilityEasy || trainabilityModerate || trainabilityDifficult;
          const trainabilityMatch =
            !trainabilitySelected ||
            (trainabilityEasy && breed.trainability === "easy") ||
            (trainabilityModerate && breed.trainability === "moderate") ||
            (trainabilityDifficult && breed.trainability === "difficult");

          const barkingSelected = barksLow || barksMedium || barksHigh;
          const barkingMatch =
            !barkingSelected ||
            (barksLow && breed.barks === "low") ||
            (barksMedium && breed.barks === "medium") ||
            (barksHigh && breed.barks === "high");

          // Cat-specific
          const talkativeSelected = talkativeQuiet || talkativeChatty;
          const talkativeMatch =
            !talkativeSelected ||
            (talkativeQuiet && breed.talkative === "quiet") ||
            (talkativeChatty && breed.talkative === "chatty");

          const affectionateMatch =
            species !== "cat" || !affectionate || breed.affectionate === true;

          const dogMatch =
            species === "dog" ? trainabilityMatch && barkingMatch : true;
          const catMatch =
            species === "cat" ? talkativeMatch && affectionateMatch : true;

          return (
            weightOk &&
            matches &&
            activityMatch &&
            sheddingMatch &&
            groomingMatch &&
            dogMatch &&
            catMatch
          );
        })
        .sort((a, b) => a.name.localeCompare(b.name)),
    [
      species,
      minWeight,
      maxWeight,
      activityLevelLow,
      activityLevelMedium,
      activityLevelHigh,
      sheddingLevelLow,
      sheddingLevelMedium,
      sheddingLevelHigh,
      groomingLow,
      groomingMedium,
      groomingHigh,
      trainabilityEasy,
      trainabilityModerate,
      trainabilityDifficult,
      barksLow,
      barksMedium,
      barksHigh,
      talkativeQuiet,
      talkativeChatty,
      affectionate,
      hypoallergenic,
      kidFriendly,
      allBreeds,
    ]
  );

  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [expandedBreeds, setExpandedBreeds] = useState<Record<string, boolean>>(
    {}
  );
  const isMobile = useMediaQuery("(max-width: 768px)");
  const MOBILE_TEXT_LENGTH = 100;
  const DESKTOP_TEXT_LENGTH = 250;

  const itemsPerPage = 10;

  const breedNameFilteredResults = useMemo(() => {
    if (!searchText) return filteredResults;
    return filteredResults.filter((breed: any) =>
      breed.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [filteredResults, searchText]);

  const totalPages = Math.ceil(breedNameFilteredResults.length / itemsPerPage);

  const displayedResults = useMemo(() => {
    const source = breedNameFilteredResults;
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    return source.slice(start, end);
  }, [breedNameFilteredResults, page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <Box sx={{ p: 4 }}>
      <Stack direction="row" spacing={2} mb={3}>
        <Button
          variant="outlined"
          onClick={() => navigate("/", { state: formState })}
        >
          ← Back to Search
        </Button>
      </Stack>

      <Autocomplete
        freeSolo
        options={filteredResults.map((breed: any) => breed.name)}
        value={searchText}
        onInputChange={(_, value) => {
          setSearchText(value);
          setPage(1);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Filter by Breed Name"
            fullWidth
            sx={{ mb: 3 }}
          />
        )}
      />

      <Typography variant="h4" gutterBottom>
        {breedNameFilteredResults.length > 0
          ? `🎉 ${breedNameFilteredResults.length} ${species} breeds found`
          : `😿 No ${species} breeds matched your filters. Please narrow your search filters to ensure results.`}
      </Typography>

      {breedNameFilteredResults.length > 0 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{ mb: 3 }}
        />
      )}

      <Stack spacing={3}>
        {displayedResults.map((breed: any) => (
          <Card key={breed.name}>
            <CardMedia
              component="img"
              height="160"
              image={
                breed.image ||
                (species === "dog" ? "defaultdog.png" : "defaultcat.png")
              }
              alt={breed.name}
              sx={{ objectFit: "contain", backgroundColor: "#f5f5f5" }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {breed.name}
              </Typography>

              {breed.personality && (
                <Box mt={1}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ whiteSpace: "pre-line" }}
                  >
                    {expandedBreeds[breed.name]
                      ? breed.personality
                      : isMobile
                        ? `${breed.personality.slice(0, MOBILE_TEXT_LENGTH)}${
                            breed.personality.length > MOBILE_TEXT_LENGTH
                              ? "..."
                              : ""
                          }`
                        : `${breed.personality.slice(0, DESKTOP_TEXT_LENGTH)}${
                            breed.personality.length > DESKTOP_TEXT_LENGTH
                              ? "..."
                              : ""
                          }`}
                  </Typography>

                  {isMobile
                    ? breed.personality.length > MOBILE_TEXT_LENGTH && (
                        <Link
                          component="button"
                          variant="body2"
                          sx={{ mt: 0.5 }}
                          onClick={() =>
                            setExpandedBreeds(
                              (prev: Record<string, boolean>) => ({
                                ...prev,
                                [breed.name]: !prev[breed.name],
                              })
                            )
                          }
                        >
                          {expandedBreeds[breed.name] ? "See less" : "See more"}
                        </Link>
                      )
                    : breed.personality.length > DESKTOP_TEXT_LENGTH && (
                        <Link
                          component="button"
                          variant="body2"
                          sx={{ mt: 0.5 }}
                          onClick={() =>
                            setExpandedBreeds(
                              (prev: Record<string, boolean>) => ({
                                ...prev,
                                [breed.name]: !prev[breed.name],
                              })
                            )
                          }
                        >
                          {expandedBreeds[breed.name] ? "See less" : "See more"}
                        </Link>
                      )}
                </Box>
              )}

              <Box display="flex" flexDirection="column" gap={0.5} mb={1}>
                {breed.valid && (
                  <Link
                    href={breed.petFinderLink}
                    target="_blank"
                    rel="noopener"
                    display="flex"
                    alignItems="center"
                    gap={0.5}
                  >
                    <OpenInNewIcon fontSize="small" />
                    {`Find your future ${breed.name} on Petfinder`}
                  </Link>
                )}
                <Link
                  href={breed.usefulLink}
                  target="_blank"
                  rel="noopener"
                  display="flex"
                  alignItems="center"
                  gap={0.5}
                >
                  <InfoIcon fontSize="small" />
                  Learn more
                </Link>
              </Box>

              <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                <Chip label={`Activity: ${breed.activity}`} />
                <Chip label={`Grooming: ${breed.grooming}`} />
                <Chip label={`Sheds: ${breed.sheds}`} />
                <Chip
                  label={`Weight: ${breed.minWeight}-${breed.maxWeight} lbs`}
                />
                <Chip
                  label={`Hypoallergenic: ${breed.hypoallergenic ? "Yes" : "No"}`}
                />
                <Chip
                  label={`Kid Friendly: ${breed.kidFriendly ? "Yes" : "No"}`}
                />
                {breed.trainability && (
                  <Chip label={`Trainability: ${breed.trainability}`} />
                )}
                {breed.barks && <Chip label={`Barks: ${breed.barks}`} />}
                {breed.talkative && (
                  <Chip label={`Talkative: ${breed.talkative}`} />
                )}
                {"affectionate" in breed && (
                  <Chip
                    label={`Affectionate: ${breed.affectionate ? "Yes" : "No"}`}
                  />
                )}
                {breed.valid === false && (
                  <Chip label="Not verified" color="warning" />
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {breedNameFilteredResults.length > 0 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{ mb: 3 }}
        />
      )}
    </Box>
  );
}
