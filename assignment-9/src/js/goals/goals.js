import { state } from "../core/state.js";
import { saveState } from "../core/storage.js";
import { updateDashboardPreviews } from "../core/dashboard.js";

export function initGoalsModule() {
  const form = document.getElementById("goal-form");
  const input = document.getElementById("goal-input");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!input || !input.value.trim()) return;

    state.goals.push({
      id: Date.now(),
      text: input.value.trim(),
      completed: false,
    });

    input.value = "";
    saveState(state);
    renderGoals();
    updateDashboardPreviews();
  });
}

export function renderGoals() {
  const container = document.getElementById("goals-list");
  if (!container) return;

  container.innerHTML = "";

  const completed = state.goals.filter((goal) => goal.completed).length;
  const total = state.goals.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const label = document.getElementById("goals-progress-label");
  const percentElement = document.getElementById("goals-progress-percent");
  const bar = document.getElementById("goals-progress-bar");

  if (label) label.textContent = `${completed} of ${total} ${total === 1 ? "goal" : "goals"} met`;
  if (percentElement) percentElement.textContent = `${percent}%`;
  if (bar) bar.style.width = `${percent}%`;

  if (state.goals.length === 0) {
    container.innerHTML = '<div class="text-center py-12 text-on-surface-variant/60 font-sans text-sm">No goals set for today. Add one above!</div>';
    return;
  }

  state.goals.forEach((goal) => {
    const item = document.createElement("div");
    item.className = `glass-card rounded-2xl p-4 flex items-center justify-between gap-4 transition-all hover:bg-white/[0.04] ${
      goal.completed ? "opacity-60" : "opacity-100"
    }`;

    item.innerHTML = `
      <div class="flex items-center gap-3 flex-1 overflow-hidden">
        <button class="goal-check-btn w-6 h-6 rounded-md flex items-center justify-center transition-all shrink-0 border-2 ${
          goal.completed
            ? "bg-secondary border-secondary text-on-secondary"
            : "border-white/20 hover:border-secondary"
        }">
          ${goal.completed ? '<span class="text-[10px] font-extrabold font-sans text-on-secondary">✓</span>' : ""}
        </button>
        <span class="font-sans text-base truncate ${goal.completed ? "line-through text-on-surface-variant" : "text-on-surface"}">${goal.text}</span>
      </div>
      <button class="delete-goal-btn p-2 rounded-lg hover:bg-error/10 text-on-surface-variant/40 hover:text-error transition-colors shrink-0" title="Delete goal">
        <span class="material-symbols-outlined text-lg">delete</span>
      </button>
    `;

    item.querySelector(".goal-check-btn")?.addEventListener("click", () => {
      toggleGoal(goal.id);
    });

    item.querySelector(".delete-goal-btn")?.addEventListener("click", () => {
      deleteGoal(goal.id);
    });

    container.appendChild(item);
  });
}

export function toggleGoal(goalId) {
  const goal = state.goals.find((entry) => entry.id === goalId);
  if (!goal) return;
  goal.completed = !goal.completed;
  saveState(state);
  renderGoals();
  updateDashboardPreviews();
}

export function deleteGoal(goalId) {
  state.goals = state.goals.filter((entry) => entry.id !== goalId);
  saveState(state);
  renderGoals();
  updateDashboardPreviews();
}
