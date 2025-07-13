import { useState } from "react";
import "./Quiz.css";
import { quizQuestions as dogQuestions } from "../metadata/questionsData.dog";
import { quizQuestionsCats as catQuestions } from "../metadata/questionsData.cat";
import { cats } from "../../../libs/shared/metadata/cats";
import { dogs } from "../../../libs/shared/metadata/dogs";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Card,
  CardContent,
  Link,
  Stack,
} from "@mui/material";

type QuizQuestion = {
  question: string;
  options: { label: string; traitMatch: Record<string, any> }[];
};

type Answer = Record<string, any>;

export default function Quiz() {
  const [species, setSpecies] = useState<"dog" | "cat">("dog");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<any>(null);

  const questions: QuizQuestion[] =
    species === "dog" ? dogQuestions : catQuestions;
  const breeds = species === "dog" ? dogs : cats;

  function handleAnswer(traits: Record<string, any>) {
    setAnswers((prev) => [...prev, traits]);

    if (currentQ + 1 < questions.length) {
      setCurrentQ((q) => q + 1);
    } else {
      const bestMatch = calculateResult([...answers, traits]);
      setResult(bestMatch);
    }
  }

  function calculateResult(responses: Answer[]) {
    const scores = breeds.filter(breed => breed.valid).map((breed) => {
      let score = 0;
      const breedRecord = breed as Record<string, any>;
      for (const answer of responses) {
        for (const key in answer) {
          if (
            answer[key] !== "" &&
            breedRecord[key] !== undefined &&
            String(breedRecord[key]) === String(answer[key])
          ) {
            score += 1;
          }
        }
      }
      return { ...breed, score };
    });

    return scores.sort((a, b) => b.score - a.score)[0];
  }

  function shareResult() {
    if (navigator.share) {
      navigator
        .share({
          title: `I’m a ${result.name}!`,
          text: `I’m a ${result.name}! ${result.personality} 🐕 🐈 Find out your breed!`,
          url: "https://furlancer.com",
        })
        .catch((err) => {
          console.error("Share failed:", err);
        });
    }
  }

  function resetQuiz() {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  }

  return (
    <Box className="quiz-wrapper">
      <Box className="species-toggle">
        <ToggleButtonGroup
          value={species}
          exclusive
          onChange={(_e, value) => {
            if (value) {
              resetQuiz();
              setSpecies(value);
            }
          }}
        >
          <ToggleButton value="dog">🐶 Dog Quiz</ToggleButton>
          <ToggleButton value="cat">🐱 Cat Quiz</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {result ? (
        <Card className="quiz-result fade-in">
          <CardContent>
            <Box>
              <img
                src={result.image}
                alt={result.name}
                className="result-img"
              />
            </Box>
            <Typography variant="h5" gutterBottom>
              You’re most like a {result.name}!
            </Typography>
            <Typography
              variant="body1"
              className="personality-text"
              sx={{ mt: 2, mb: 3 }}
            >
              {result.personality}
            </Typography>
            {result.valid && (
              <Link
                href={result.petFinderLink}
                target="_blank"
                rel="noopener"
                display="flex"
                alignItems="center"
                gap={0.5}
                sx={{ mb: 3 }}
              >
                <OpenInNewIcon fontSize="small" />
                {`Find your future ${result.name} on Petfinder`}
              </Link>
            )}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <Button
                onClick={shareResult}
                startIcon={<OpenInNewIcon />}
                variant="outlined"
                sx={{ mb: 3 }}
              >
                Share Your Result
              </Button>

              <Button
                onClick={resetQuiz}
                variant="contained"
                color="primary"
                fullWidth={false}
              >
                Try Again
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Box key={currentQ} className="quiz-question fade-in">
          <Typography variant="h6">
            {currentQ + 1}/{questions.length}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {questions[currentQ].question}
          </Typography>
          <Box className="options">
            {questions[currentQ].options.map((opt, idx) => (
              <Button
                key={idx}
                onClick={() => handleAnswer(opt.traitMatch)}
                variant="outlined"
                fullWidth
                className="option-button"
              >
                {opt.label}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
