import { state } from "./state.js";

export function updateDashboardPreviews() {
  const pendingCount = state.tasks.filter((task) => !task.completed).length;
  const taskText = document.getElementById("preview-tasks-count");
  if (taskText) {
    taskText.textContent = `${pendingCount} ${pendingCount === 1 ? "pending" : "pending"}`;
  }

  const plannerSummary = document.getElementById("preview-planner-summary");
  if (plannerSummary) {
    plannerSummary.textContent = getNextPlannerTaskSummary();
  }

  const focusPreview = document.getElementById("preview-focus-timer");
  const minutes = Math.floor(state.timerTimeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (state.timerTimeLeft % 60).toString().padStart(2, "0");
  if (focusPreview) {
    focusPreview.textContent = `${minutes}:${seconds} (${state.timerCurrentMode === "focus" ? "Deep" : "Break"})`;
  }

  const completedGoals = state.goals.filter((goal) => goal.completed).length;
  const goalsSummary = document.getElementById("preview-goals-summary");
  if (goalsSummary) {
    goalsSummary.textContent = `${completedGoals}/${state.goals.length} complete`;
  }

  const wisdomPreview = document.getElementById("preview-wisdom-text");
  if (wisdomPreview) {
    wisdomPreview.textContent = `"${state.currentQuote.text}"`;
  }
}

export function getNextPlannerTaskSummary() {
  const currentHour = new Date().getHours();
  const hours = Object.keys(state.plannerData)
    .map(Number)
    .sort((a, b) => a - b);
  const upcoming = hours.find((hour) => hour >= currentHour && state.plannerData[hour]?.trim());
  if (upcoming) {
    const label =
      upcoming > 12
        ? `${upcoming - 12} PM`
        : upcoming === 12
          ? "12 PM"
          : `${upcoming} AM`;
    return `${label}: ${state.plannerData[upcoming]}`;
  }
  const firstAny = hours.find((hour) => state.plannerData[hour]?.trim());
  if (firstAny) {
    const label =
      firstAny > 12
        ? `${firstAny - 12} PM`
        : firstAny === 12
          ? "12 PM"
          : `${firstAny} AM`;
    return `Soon: ${state.plannerData[firstAny]}`;
  }
  return "Check daily plan";
}
