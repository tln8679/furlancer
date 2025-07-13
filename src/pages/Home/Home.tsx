import {
  Box,
  Paper,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import TuneIcon from "@mui/icons-material/Tune";
import BreedSearch from "../../components/BreedSearch/BreedSearch";

export default function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        align="center"
        gutterBottom
        sx={{ mt: 4 }}
      >
        🐾 What would you like to do?
      </Typography>

      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={3}
        sx={{
          mt: 3,
          px: 2,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Paper
          elevation={3}
          onClick={() => navigate("/quiz")}
          sx={{
            p: 3,
            flex: 1,
            cursor: "pointer",
            borderRadius: 2,
            transition: "background-color 0.2s",
            "&:hover": { backgroundColor: "action.hover" },
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <EmojiPeopleIcon fontSize="large" color="primary" />
            <Box>
              <Typography variant="h6">Take the Quiz</Typography>
              <Typography variant="body2" color="text.secondary">
                Answer 10 fun questions to find your perfect pet match.
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Paper
          elevation={3}
          onClick={() =>
            document
              .getElementById("breed-search")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          sx={{
            p: 3,
            flex: 1,
            cursor: "pointer",
            borderRadius: 2,
            transition: "background-color 0.2s",
            "&:hover": { backgroundColor: "action.hover" },
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <TuneIcon fontSize="large" color="primary" />
            <Box>
              <Typography variant="h6">Search Breeds</Typography>
              <Typography variant="body2" color="text.secondary">
                Use filters like shedding, size, and personality traits.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Stack>

      <Box id="breed-search" sx={{ mt: 6 }}>
        <BreedSearch />
      </Box>
    </>
  );
}
