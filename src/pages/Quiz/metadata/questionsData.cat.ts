export const quizQuestionsCats = [
  {
    question: "What’s your ideal daily vibe?",
    options: [
      { label: "Lounging in a sunbeam, undisturbed", traitMatch: { activity: "low" } },
      { label: "A mix of play and naps", traitMatch: { activity: "medium" } },
      { label: "Zoomies all day, every day", traitMatch: { activity: "high" } },
    ],
  },
  {
    question: "How chatty are you?",
    options: [
      { label: "Silent and mysterious", traitMatch: { barks: "low", talkative: false } },
      { label: "I meow when I’ve got something to say", traitMatch: { barks: "medium" } },
      { label: "I narrate my entire day", traitMatch: { barks: "high", talkative: true } },
    ],
  },
  {
    question: "How do you feel about grooming?",
    options: [
      { label: "Low effort is best", traitMatch: { grooming: "low" } },
      { label: "I tidy up when needed", traitMatch: { grooming: "medium" } },
      { label: "Flawless coat, always", traitMatch: { grooming: "high" } },
    ],
  },
  {
    question: "How do you feel about kids or other pets?",
    options: [
      { label: "I prefer peace and quiet", traitMatch: { kidFriendly: false } },
      { label: "I can coexist if they’re chill", traitMatch: {} },
      { label: "I love the energy — bring on the fun!", traitMatch: { kidFriendly: true } },
    ],
  },
  {
    question: "Do you like structure and routine?",
    options: [
      { label: "No rules, just vibes", traitMatch: { trainability: "difficult" } },
      { label: "I appreciate a little order", traitMatch: { trainability: "moderate" } },
      { label: "Give me a schedule and I’ll thrive", traitMatch: { trainability: "easy" } },
    ],
  },
  {
    question: "How affectionate are you?",
    options: [
      { label: "Only on my terms", traitMatch: { affectionate: false } },
      { label: "Sometimes cuddly, sometimes aloof", traitMatch: {} },
      { label: "I crave constant snuggles", traitMatch: { affectionate: true } },
    ],
  },
  {
    question: "What’s your fashion philosophy?",
    options: [
      { label: "Natural look, no effort", traitMatch: { grooming: "low" } },
      { label: "Casual but clean", traitMatch: { grooming: "medium" } },
      { label: "Sleek and polished, always", traitMatch: { grooming: "high" } },
    ],
  },
  {
    question: "How sensitive are you to your surroundings?",
    options: [
      { label: "Very — I notice everything", traitMatch: { hypoallergenic: true } },
      { label: "Not much fazes me", traitMatch: { hypoallergenic: false } },
    ],
  },
  {
    question: "How much fur are you okay with?",
    options: [
      { label: "I like my space neat and hair-free", traitMatch: { sheds: "none" } },
      { label: "A little fluff is fine", traitMatch: { sheds: "little" } },
      { label: "Fur tumbleweeds? No problem", traitMatch: { sheds: "lot" } },
    ],
  },
  {
    question: "What’s your social energy like?",
    options: [
      { label: "Introvert — I need my alone time", traitMatch: { activity: "low" } },
      { label: "Balanced — a little play, a little rest", traitMatch: { activity: "medium" } },
      { label: "Extrovert — I’m always pouncing on something", traitMatch: { activity: "high" } },
    ],
  },
];
