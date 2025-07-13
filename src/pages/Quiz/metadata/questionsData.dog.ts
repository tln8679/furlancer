export const quizQuestions = [
  {
    question: "How active are you on a typical day?",
    options: [
      { label: "Couch time is my prime time", traitMatch: { activity: "low" } },
      { label: "I like a mix of rest and movement", traitMatch: { activity: "medium" } },
      { label: "I’m always on the go — walks, workouts, or adventures", traitMatch: { activity: "high" } },
    ],
  },
  {
    question: "How vocal are you in conversations?",
    options: [
      { label: "I prefer to listen more than speak", traitMatch: { barks: "low", talkative: false } },
      { label: "I’ll speak up when I need to", traitMatch: { barks: "medium" } },
      { label: "You’ll hear me coming from across the room", traitMatch: { barks: "high", talkative: true } },
    ],
  },
  {
    question: "How do you feel about grooming or self-care?",
    options: [
      { label: "Low maintenance is my style", traitMatch: { grooming: "low" } },
      { label: "I clean up pretty well when it matters", traitMatch: { grooming: "medium" } },
      { label: "I take pride in looking my best daily", traitMatch: { grooming: "high" } },
    ],
  },
  {
    question: "How do you feel about kids or family life?",
    options: [
      { label: "I prefer a quieter, adults-only vibe", traitMatch: { kidFriendly: false } },
      { label: "I enjoy a mix — occasional chaos is fine", traitMatch: {} },
      { label: "I love being around kids and families", traitMatch: { kidFriendly: true } },
    ],
  },
  {
    question: "How trainable or structured are you?",
    options: [
      { label: "I go with the flow — structure isn’t my thing", traitMatch: { trainability: "difficult" } },
      { label: "I do best with a bit of routine", traitMatch: { trainability: "moderate" } },
      { label: "I love goals and clear expectations", traitMatch: { trainability: "easy" } },
    ],
  },
  {
    question: "How affectionate are you with close friends or partners?",
    options: [
      { label: "I keep my distance — love from afar", traitMatch: { affectionate: false } },
      { label: "I'm chill but warm when it counts", traitMatch: {} },
      { label: "I’m a total cuddler — touch is my love language", traitMatch: { affectionate: true } },
    ],
  },
  {
    question: "How much do you care about appearances?",
    options: [
      { label: "Not at all — comfort over everything", traitMatch: { grooming: "low" } },
      { label: "I like to look nice, but I don’t obsess", traitMatch: { grooming: "medium" } },
      { label: "I dress to impress and love attention", traitMatch: { grooming: "high" } },
    ],
  },
  {
    question: "Are you sensitive to allergens or strong smells?",
    options: [
      { label: "Yep — I need things clean and allergy-friendly", traitMatch: { hypoallergenic: true } },
      { label: "Not really — I’m fine with a little dust and dander", traitMatch: { hypoallergenic: false } },
    ],
  },
  {
    question: "How much mess can you tolerate?",
    options: [
      { label: "I love tidy, fur-free spaces", traitMatch: { sheds: "none" } },
      { label: "A little mess is no big deal", traitMatch: { sheds: "little" } },
      { label: "Bring on the fluff! I don’t mind shedding", traitMatch: { sheds: "lot" } },
    ],
  },
  {
    question: "How would your friends describe your energy?",
    options: [
      { label: "Chill and contemplative", traitMatch: { activity: "low" } },
      { label: "Steady and social", traitMatch: { activity: "medium" } },
      { label: "Hyped and enthusiastic", traitMatch: { activity: "high" } },
    ],
  },
];
