import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Snackbar,
  Stack,
  Switch,
  TextField,
  Typography,
  Alert,
  ToggleButtonGroup,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PetsIcon from "@mui/icons-material/Pets";
import StarIcon from "@mui/icons-material/Star";
import TuneIcon from "@mui/icons-material/Tune";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import WavesIcon from "@mui/icons-material/Waves";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledToggleButton } from "../StyledToggleButton/StyledToggleButton";

type Species = "dog" | "cat";

type FormData = {
  minWeight: string;
  maxWeight: string;
  activityLevelLow: boolean;
  activityLevelMedium: boolean;
  activityLevelHigh: boolean;
  sheddingLevelLow: boolean;
  sheddingLevelMedium: boolean;
  sheddingLevelHigh: boolean;
  groomingLow: boolean;
  groomingMedium: boolean;
  groomingHigh: boolean;
  trainabilityEasy: boolean;
  trainabilityModerate: boolean;
  trainabilityDifficult: boolean;
  barksLow: boolean;
  barksMedium: boolean;
  barksHigh: boolean;
  talkativeQuiet: boolean;
  talkativeChatty: boolean;
  affectionate: boolean;
  hypoallergenic: boolean;
  kidFriendly: boolean;
};

export default function BreedSearch() {
  const location = useLocation();
  const navigate = useNavigate();

  const [species, setSpecies] = useState<Species>("dog");
  const [formData, setFormData] = useState<FormData>({
    minWeight: "",
    maxWeight: "",
    affectionate: false,
    hypoallergenic: false,
    kidFriendly: false,
    activityLevelLow: false,
    activityLevelMedium: false,
    activityLevelHigh: false,
    sheddingLevelLow: false,
    sheddingLevelMedium: false,
    sheddingLevelHigh: false,
    groomingLow: false,
    groomingMedium: false,
    groomingHigh: false,
    trainabilityEasy: false,
    trainabilityModerate: false,
    trainabilityDifficult: false,
    barksLow: false,
    barksMedium: false,
    barksHigh: false,
    talkativeQuiet: false,
    talkativeChatty: false,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  // React to route changes (e.g. going back from /results)
  useEffect(() => {
    const state = location.state as
      | (Partial<FormData> & { species?: Species })
      | null;

    if (state) {
      setSpecies(state.species ?? "dog");
      setFormData({
        minWeight: state.minWeight ?? "",
        maxWeight: state.maxWeight ?? "",
        affectionate: state.affectionate ?? false,
        hypoallergenic: state.hypoallergenic ?? false,
        kidFriendly: state.kidFriendly ?? false,
        activityLevelLow: state.activityLevelLow ?? false,
        activityLevelMedium: state.activityLevelMedium ?? false,
        activityLevelHigh: state.activityLevelHigh ?? false,
        sheddingLevelLow: state.sheddingLevelLow ?? false,
        sheddingLevelMedium: state.sheddingLevelMedium ?? false,
        sheddingLevelHigh: state.sheddingLevelHigh ?? false,
        groomingLow: state.groomingLow ?? false,
        groomingMedium: state.groomingMedium ?? false,
        groomingHigh: state.groomingHigh ?? false,
        trainabilityEasy: state.trainabilityEasy ?? false,
        trainabilityModerate: state.trainabilityModerate ?? false,
        trainabilityDifficult: state.trainabilityDifficult ?? false,
        barksLow: state.barksLow ?? false,
        barksMedium: state.barksMedium ?? false,
        barksHigh: state.barksHigh ?? false,
        talkativeQuiet: state.talkativeQuiet ?? false,
        talkativeChatty: state.talkativeChatty ?? false,
      });
    }
  }, [location.key]);

  const handleChange = <T extends keyof FormData>(
    field: T,
    value: FormData[T]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const validateFields = () => {
    const requiredFields: (keyof FormData)[] = [];

    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    requiredFields.forEach((field) => {
      if (formData[field] === "" || formData[field] === undefined) {
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = () => {
    if (validateFields()) {
      navigate("/results", {
        state: {
          species,
          ...formData,
        },
      });
    } else {
      setSnackbar({
        open: true,
        message: "Please fill out all required fields.",
        severity: "error",
      });
    }
  };

  const handleClear = () => {
    setFormData({
      minWeight: "",
      maxWeight: "",
      affectionate: false,
      hypoallergenic: false,
      kidFriendly: false,
      activityLevelLow: false,
      activityLevelMedium: false,
      activityLevelHigh: false,
      sheddingLevelLow: false,
      sheddingLevelMedium: false,
      sheddingLevelHigh: false,
      groomingLow: false,
      groomingMedium: false,
      groomingHigh: false,
      trainabilityEasy: false,
      trainabilityModerate: false,
      trainabilityDifficult: false,
      barksLow: false,
      barksMedium: false,
      barksHigh: false,
      talkativeQuiet: false,
      talkativeChatty: false,
    });
    setErrors({});
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "background.paper",
          maxWidth: 600,
          margin: "auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          🐾 Find Your Perfect {species === "dog" ? "Dog" : "Cat"} Breed
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Tip: The more filters you apply, the fewer breeds will match. Try
          loosening one or two if you don’t see results.
        </Typography>

        <Stack spacing={3}>
          {/* Species Toggle */}
          <FormControl component="fieldset">
            <FormLabel>
              <PetsIcon fontSize="small" sx={{ mr: 1 }} /> Choose Species
            </FormLabel>
            <ToggleButtonGroup
              value={species}
              exclusive
              onChange={(_e, value) => {
                if (value) setSpecies(value);
              }}
              sx={{ mt: 1 }}
            >
              <StyledToggleButton value="dog">
                <img src="defaultdog.png" alt="Dog" />
                Dog
              </StyledToggleButton>
              <StyledToggleButton value="cat">
                <img src="defaultcat.png" alt="Cat" />
                Cat
              </StyledToggleButton>
            </ToggleButtonGroup>
          </FormControl>

          {/* Weight */}
          <TextField
            label="Min Weight (lbs)"
            type="number"
            value={formData.minWeight}
            onChange={(e) => handleChange("minWeight", e.target.value)}
            error={!!errors.minWeight}
          />
          <TextField
            label="Max Weight (lbs)"
            type="number"
            value={formData.maxWeight}
            onChange={(e) => handleChange("maxWeight", e.target.value)}
            error={!!errors.maxWeight}
          />

          {/* General Traits */}
          <FormControl component="fieldset">
            <FormLabel>
              <StarIcon fontSize="small" sx={{ mr: 1 }} /> General Traits
            </FormLabel>
            <Stack spacing={1.5} sx={{ mt: 1 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.hypoallergenic}
                    onChange={(e) =>
                      handleChange("hypoallergenic", e.target.checked)
                    }
                  />
                }
                label="Hypoallergenic"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.kidFriendly}
                    onChange={(e) =>
                      handleChange("kidFriendly", e.target.checked)
                    }
                  />
                }
                label="Kid Friendly"
              />
            </Stack>
          </FormControl>

          {/* Advanced Filters Accordion */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="advanced-content"
              id="advanced-header"
            >
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <TuneIcon fontSize="small" sx={{ mr: 1 }} />
                More Filters
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={3}>
                {/* Activity Level */}
                <FormControl component="fieldset">
                  <FormLabel>
                    <DirectionsRunIcon fontSize="small" sx={{ mr: 1 }} />{" "}
                    Activity Level
                  </FormLabel>
                  <Stack spacing={1.5} sx={{ mt: 1 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.activityLevelLow}
                          onChange={(e) =>
                            handleChange("activityLevelLow", e.target.checked)
                          }
                        />
                      }
                      label="Needs little activity"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.activityLevelMedium}
                          onChange={(e) =>
                            handleChange(
                              "activityLevelMedium",
                              e.target.checked
                            )
                          }
                        />
                      }
                      label="Needs moderate activity"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.activityLevelHigh}
                          onChange={(e) =>
                            handleChange("activityLevelHigh", e.target.checked)
                          }
                        />
                      }
                      label="Needs a lot of activity"
                    />
                  </Stack>
                </FormControl>

                {/* Shedding */}
                <FormControl component="fieldset">
                  <FormLabel>
                    <WavesIcon fontSize="small" sx={{ mr: 1 }} /> Shedding
                  </FormLabel>
                  <Stack spacing={1.5} sx={{ mt: 1 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.sheddingLevelLow}
                          onChange={(e) =>
                            handleChange("sheddingLevelLow", e.target.checked)
                          }
                        />
                      }
                      label="Doesn't shed"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.sheddingLevelMedium}
                          onChange={(e) =>
                            handleChange(
                              "sheddingLevelMedium",
                              e.target.checked
                            )
                          }
                        />
                      }
                      label="Sheds a little"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.sheddingLevelHigh}
                          onChange={(e) =>
                            handleChange("sheddingLevelHigh", e.target.checked)
                          }
                        />
                      }
                      label="Sheds a lot"
                    />
                  </Stack>
                </FormControl>

                {/* Grooming */}
                <FormControl component="fieldset">
                  <FormLabel>
                    <ContentCutIcon fontSize="small" sx={{ mr: 1 }} /> Grooming
                    Needs
                  </FormLabel>
                  <Stack spacing={1.5} sx={{ mt: 1 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.groomingLow}
                          onChange={(e) =>
                            handleChange("groomingLow", e.target.checked)
                          }
                        />
                      }
                      label="Low grooming needs"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.groomingMedium}
                          onChange={(e) =>
                            handleChange("groomingMedium", e.target.checked)
                          }
                        />
                      }
                      label="Moderate grooming needs"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.groomingHigh}
                          onChange={(e) =>
                            handleChange("groomingHigh", e.target.checked)
                          }
                        />
                      }
                      label="High grooming needs"
                    />
                  </Stack>
                </FormControl>

                {species === "dog" && (
                  <>
                    {/* Trainability */}
                    <FormControl component="fieldset">
                      <FormLabel>
                        <EmojiObjectsIcon fontSize="small" sx={{ mr: 1 }} />{" "}
                        Trainability
                      </FormLabel>
                      <Stack spacing={1.5} sx={{ mt: 1 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.trainabilityEasy}
                              onChange={(e) =>
                                handleChange(
                                  "trainabilityEasy",
                                  e.target.checked
                                )
                              }
                            />
                          }
                          label="Easy to train"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.trainabilityModerate}
                              onChange={(e) =>
                                handleChange(
                                  "trainabilityModerate",
                                  e.target.checked
                                )
                              }
                            />
                          }
                          label="Moderately trainable"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.trainabilityDifficult}
                              onChange={(e) =>
                                handleChange(
                                  "trainabilityDifficult",
                                  e.target.checked
                                )
                              }
                            />
                          }
                          label="Difficult to train"
                        />
                      </Stack>
                    </FormControl>

                    {/* Barking */}
                    <FormControl component="fieldset">
                      <FormLabel>
                        <VolumeUpIcon fontSize="small" sx={{ mr: 1 }} /> Barking
                      </FormLabel>
                      <Stack spacing={1.5} sx={{ mt: 1 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.barksLow}
                              onChange={(e) =>
                                handleChange("barksLow", e.target.checked)
                              }
                            />
                          }
                          label="Rarely barks"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.barksMedium}
                              onChange={(e) =>
                                handleChange("barksMedium", e.target.checked)
                              }
                            />
                          }
                          label="Barks sometimes"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.barksHigh}
                              onChange={(e) =>
                                handleChange("barksHigh", e.target.checked)
                              }
                            />
                          }
                          label="Barks a lot"
                        />
                      </Stack>
                    </FormControl>
                  </>
                )}

                {species === "cat" && (
                  <>
                    {/* Talkative */}
                    <FormControl component="fieldset">
                      <FormLabel>
                        <ChatIcon fontSize="small" sx={{ mr: 1 }} />{" "}
                        Talkativeness
                      </FormLabel>
                      <Stack spacing={1.5} sx={{ mt: 1 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.talkativeQuiet}
                              onChange={(e) =>
                                handleChange("talkativeQuiet", e.target.checked)
                              }
                            />
                          }
                          label="Quiet"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.talkativeChatty}
                              onChange={(e) =>
                                handleChange(
                                  "talkativeChatty",
                                  e.target.checked
                                )
                              }
                            />
                          }
                          label="Talkative"
                        />
                      </Stack>
                    </FormControl>

                    {/* Affection */}
                    <FormControl component="fieldset">
                      <FormLabel>
                        <FavoriteIcon fontSize="small" sx={{ mr: 1 }} />{" "}
                        Affection
                      </FormLabel>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={formData.affectionate}
                            onChange={(e) =>
                              handleChange("affectionate", e.target.checked)
                            }
                          />
                        }
                        label="Affectionate"
                      />
                    </FormControl>
                  </>
                )}
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Button variant="outlined" color="primary" onClick={handleClear}>
              Clear Filters
            </Button>
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Search Breeds
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
