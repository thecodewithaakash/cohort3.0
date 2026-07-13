export const CITIES_WEATHER = {
  "San Francisco": {
    name: "San Francisco",
    temp: 72,
    condition: "Sunny",
    high: 78,
    low: 64,
    icon: "wb_sunny",
  },
  Tokyo: {
    name: "Tokyo",
    temp: 68,
    condition: "Partly Cloudy",
    high: 74,
    low: 59,
    icon: "cloud",
  },
  London: {
    name: "London",
    temp: 59,
    condition: "Light Rain",
    high: 64,
    low: 51,
    icon: "rainy",
  },
  "New York": {
    name: "New York",
    temp: 81,
    condition: "Warm Breeze",
    high: 87,
    low: 73,
    icon: "air",
  },
  Paris: {
    name: "Paris",
    temp: 64,
    condition: "Cozy Snow",
    high: 68,
    low: 34,
    icon: "ac_unit",
  },
};

export const QUOTES_POOL = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Focus is a matter of deciding what things you're not going to do.",
    author: "John Carmack",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
  {
    text: "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.",
    author: "Alexander Graham Bell",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
  },
  {
    text: "Deep work is the superpower of the 21st century.",
    author: "Cal Newport",
  },
  {
    text: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
    author: "Stephen King",
  },
  {
    text: "Energy is the essence of life. Every day you decide how you're going to use it.",
    author: "Oprah Winfrey",
  },
];

export const DEFAULT_TASKS = [
  {
    id: 1,
    text: "Plan weekly schedule",
    completed: false,
    starred: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    text: "Deep Work: UI Redesign",
    completed: false,
    starred: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    text: "Meditate for 10 minutes",
    completed: true,
    starred: false,
    createdAt: new Date().toISOString(),
  },
];

export const DEFAULT_GOALS = [
  { id: 1, text: "Complete 4 Pomodoro sessions", completed: false },
  { id: 2, text: "Drink 3L of water", completed: true },
  { id: 3, text: "Finish weekly priority notes", completed: false },
];

export const DEFAULT_PLANNER_DATA = {
  9: "Morning Meditation & stretch",
  10: "Deep Work Session: UI/UX Design",
  14: "Product Sync Call & review",
};

export const DEFAULT_PRIORITIES = [
  { id: 1, text: "Deep Work Session: UI/UX", completed: false },
  { id: 2, text: "Product Sync Call", completed: true },
];

export const DEFAULT_HABITS = [
  {
    id: "water",
    name: "Water",
    icon: "💧",
    color: "border-secondary text-secondary",
    active: true,
  },
  {
    id: "zen",
    name: "Zen",
    icon: "🧘",
    color: "border-primary text-primary",
    active: false,
  },
  {
    id: "gym",
    name: "Gym",
    icon: "💪",
    color: "border-tertiary text-tertiary",
    active: true,
  },
];
