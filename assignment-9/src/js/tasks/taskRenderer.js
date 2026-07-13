import { state } from "../core/state.js";
import { saveState } from "../core/storage.js";
import { updateDashboardPreviews } from "../core/dashboard.js";
import { taskFilter, filterTasks } from "./taskFilter.js";

export function renderTasks() {
  const container = document.getElementById("tasks-list");
  if (!container) return;

  container.innerHTML = "";
  const filteredTasks = filterTasks();

  if (filteredTasks.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center py-16 opacity-60 text-center animate-fade-in">
        <div class="w-16 h-16 mb-4 rounded-2xl bg-white/5 flex items-center justify-center text-primary/75">
          <span class="material-symbols-outlined text-3xl">sentiment_satisfied</span>
        </div>
        <p class="font-sans text-base text-on-surface-variant font-medium">Your list is clear. Time to focus.</p>
      </div>
    `;
    return;
  }

  filteredTasks.forEach((task) => {
    const item = document.createElement("div");
    item.className = `glass-card rounded-2xl p-4 flex items-center justify-between gap-4 transition-all hover:bg-white/[0.06] ${
      task.completed ? "opacity-50" : "opacity-100"
    }`;

    item.innerHTML = `
      <div class="flex items-center gap-4 flex-1 overflow-hidden">
        <button class="toggle-complete-btn w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
          task.completed
            ? "bg-secondary border-secondary text-on-secondary"
            : "border-white/20 hover:border-primary"
        }">
          ${task.completed ? '<span class="material-symbols-outlined text-xs font-extrabold text-on-secondary" style="font-variation-settings: \'wght\' 700;">check</span>' : ""}
        </button>
        <span class="font-sans text-base truncate transition-all ${
          task.completed
            ? "line-through text-on-surface-variant"
            : "text-on-surface"
        }">
          ${task.text}
        </span>
      </div>

      <div class="flex items-center gap-1 shrink-0">
        <button class="toggle-star-btn p-2 rounded-lg hover:bg-white/10 transition-colors ${
          task.starred
            ? "text-tertiary"
            : "text-on-surface-variant/60 hover:text-on-surface"
        }" title="${task.starred ? "Mark as unimportant" : "Mark as important"}">
          <span class="material-symbols-outlined ${task.starred ? "fill-current text-tertiary" : ""}" style="${task.starred ? "font-variation-settings: 'FILL' 1;" : ""}">star</span>
        </button>
        <button class="delete-task-btn p-2 rounded-lg hover:bg-error/10 text-on-surface-variant/60 hover:text-error transition-colors" title="Delete task">
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    `;

    item.querySelector(".toggle-complete-btn")?.addEventListener("click", () => {
      task.completed = !task.completed;
      saveState(state);
      renderTasks();
      updateDashboardPreviews();
    });

    item.querySelector(".toggle-star-btn")?.addEventListener("click", () => {
      task.starred = !task.starred;
      saveState(state);
      renderTasks();
      updateDashboardPreviews();
    });

    item.querySelector(".delete-task-btn")?.addEventListener("click", () => {
      state.tasks = state.tasks.filter((existingTask) => existingTask.id !== task.id);
      saveState(state);
      renderTasks();
      updateDashboardPreviews();
    });

    container.appendChild(item);
  });
}
