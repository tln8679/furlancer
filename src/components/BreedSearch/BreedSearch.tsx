import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  Stack,
  Switch,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Species = "dog" | "cat";

type FormData = {
  minWeight: string;
  maxWeight: string;
  activity: string;
  price: string;
  sheds: string;
  trainability: string;
  barks: string;
  affectionate: boolean;
  talkative: string;
  grooming: string;
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
    activity: "",
    price: "",
    sheds: "",
    grooming: "",
    trainability: "",
    barks: "",
    affectionate: false,
    talkative: "",
    hypoallergenic: false,
    kidFriendly: false,
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
        activity: state.activity ?? "",
        price: state.price ?? "",
        sheds: state.sheds ?? "",
        grooming: state.grooming ?? "",
        trainability: state.trainability ?? "",
        barks: state.barks ?? "",
        affectionate: state.affectionate ?? false,
        talkative: state.talkative ?? "",
        hypoallergenic: state.hypoallergenic ?? false,
        kidFriendly: state.kidFriendly ?? false,
      });
    } else {
      setSpecies("dog");
      setFormData({
        minWeight: "",
        maxWeight: "",
        activity: "",
        price: "",
        sheds: "",
        grooming: "",
        trainability: "",
        barks: "",
        affectionate: false,
        talkative: "",
        hypoallergenic: false,
        kidFriendly: false,
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
    const requiredFields: (keyof FormData)[] = [
      "minWeight",
      "maxWeight",
      "activity",
      "price",
      "sheds",
      "grooming",
      ...(species === "dog"
        ? (["trainability", "barks"] as (keyof FormData)[])
        : []),
      ...(species === "cat" ? (["talkative"] as (keyof FormData)[]) : []),
    ];

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

        <Stack spacing={2} alignItems="stretch">
          <FormControl component="fieldset">
            <FormLabel>Dog or Cat</FormLabel>
            <RadioGroup
              row
              value={species}
              onChange={(e) => setSpecies(e.target.value as Species)}
            >
              <FormControlLabel value="dog" control={<Radio />} label="Dog" />
              <FormControlLabel value="cat" control={<Radio />} label="Cat" />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Min Weight (lbs)"
            type="number"
            value={formData.minWeight}
            onChange={(e) => handleChange("minWeight", e.target.value)}
            error={!!errors.minWeight}
            required
          />

          <TextField
            label="Max Weight (lbs)"
            type="number"
            value={formData.maxWeight}
            onChange={(e) => handleChange("maxWeight", e.target.value)}
            error={!!errors.maxWeight}
            required
          />

          <FormControl error={!!errors.activity} required>
            <InputLabel>Activity Level</InputLabel>
            <Select
              value={formData.activity}
              onChange={(e) => handleChange("activity", e.target.value)}
              label="Activity Level"
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>

          <FormControl error={!!errors.price} required>
            <InputLabel>Price</InputLabel>
            <Select
              value={formData.price}
              onChange={(e) => handleChange("price", e.target.value)}
              label="Price"
            >
              <MenuItem value="$">💲</MenuItem>
              <MenuItem value="$$">💲💲</MenuItem>
              <MenuItem value="$$$">💲💲💲</MenuItem>
            </Select>
          </FormControl>

          <FormControl error={!!errors.sheds} required>
            <InputLabel>Sheds</InputLabel>
            <Select
              value={formData.sheds}
              onChange={(e) => handleChange("sheds", e.target.value)}
              label="Sheds"
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="little">A little</MenuItem>
              <MenuItem value="lot">A lot</MenuItem>
            </Select>
          </FormControl>

          {species === "dog" && (
            <>
              <FormControl error={!!errors.trainability} required>
                <InputLabel>Trainability</InputLabel>
                <Select
                  value={formData.trainability}
                  onChange={(e) => handleChange("trainability", e.target.value)}
                  label="Trainability"
                >
                  <MenuItem value="easy">Easy</MenuItem>
                  <MenuItem value="moderate">Moderate</MenuItem>
                  <MenuItem value="difficult">Stubborn</MenuItem>
                </Select>
              </FormControl>

              <FormControl error={!!errors.barks} required>
                <InputLabel>Barks A Lot?</InputLabel>
                <Select
                  value={formData.barks}
                  onChange={(e) => handleChange("barks", e.target.value)}
                  label="Barks A Lot?"
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
              </FormControl>
            </>
          )}

          {species === "cat" && (
            <>
              <FormControl error={!!errors.talkative} required>
                <InputLabel>Talkativeness</InputLabel>
                <Select
                  value={formData.talkative}
                  onChange={(e) => handleChange("talkative", e.target.value)}
                  label="Talkativeness"
                >
                  <MenuItem value="quiet">Quiet</MenuItem>
                  <MenuItem value="chatty">Chatty</MenuItem>
                </Select>
              </FormControl>

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
            </>
          )}

          <FormControl error={!!errors.grooming} required>
            <InputLabel>Grooming Needs</InputLabel>
            <Select
              value={formData.grooming}
              onChange={(e) => handleChange("grooming", e.target.value)}
              label="Grooming Needs"
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>

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
                onChange={(e) => handleChange("kidFriendly", e.target.checked)}
              />
            }
            label="Kid Friendly"
          />

          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search Breeds
          </Button>
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
