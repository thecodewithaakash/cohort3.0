export function saveState(state = {}) {
  const {
    tasks = [],
    goals = [],
    plannerData = {},
    priorities = [],
    habits = [],
    sessionsCompleted = 0,
    totalFocusMinutes = 0,
  } = state;

  localStorage.setItem("zenfocus_tasks_vanilla", JSON.stringify(tasks));
  localStorage.setItem("zenfocus_goals_vanilla", JSON.stringify(goals));
  localStorage.setItem("zenfocus_planner_vanilla", JSON.stringify(plannerData));
  localStorage.setItem(
    "zenfocus_priorities_vanilla",
    JSON.stringify(priorities),
  );
  localStorage.setItem("zenfocus_habits_vanilla", JSON.stringify(habits));
  localStorage.setItem("zenfocus_vanilla_sessions", sessionsCompleted.toString());
  localStorage.setItem("zenfocus_vanilla_minutes", totalFocusMinutes.toString());
}

export function loadState(key, fallback = null) {
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) return fallback;
    const parsed = JSON.parse(stored);
    return parsed ?? fallback;
  } catch (error) {
    console.warn(`Failed to load ${key}:`, error);
    return fallback;
  }
}
