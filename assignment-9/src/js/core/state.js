import { loadState } from "./storage.js";
import {
  DEFAULT_GOALS,
  DEFAULT_HABITS,
  DEFAULT_PLANNER_DATA,
  DEFAULT_PRIORITIES,
  DEFAULT_TASKS,
  QUOTES_POOL,
} from "./constants.js";

export const state = {
  currentView: "dashboard",
  theme: "dark",
  selectedCity: "San Francisco",
  tasks: loadState("zenfocus_tasks_vanilla", DEFAULT_TASKS),
  goals: loadState("zenfocus_goals_vanilla", DEFAULT_GOALS),
  plannerData: loadState("zenfocus_planner_vanilla", DEFAULT_PLANNER_DATA),
  priorities: loadState("zenfocus_priorities_vanilla", DEFAULT_PRIORITIES),
  habits: loadState("zenfocus_habits_vanilla", DEFAULT_HABITS),
  timerInterval: null,
  timerTimeLeft: 25 * 60,
  timerIsRunning: false,
  timerCurrentMode: "focus",
  sessionsCompleted: Number(loadState("zenfocus_vanilla_sessions", 0)),
  totalFocusMinutes: Number(loadState("zenfocus_vanilla_minutes", 0)),
  currentQuote: QUOTES_POOL[0],
  weatherSelectorVisible: false,
};

export function snapshotState() {
  return {
    tasks: state.tasks,
    goals: state.goals,
    plannerData: state.plannerData,
    priorities: state.priorities,
    habits: state.habits,
    sessionsCompleted: state.sessionsCompleted,
    totalFocusMinutes: state.totalFocusMinutes,
  };
}
