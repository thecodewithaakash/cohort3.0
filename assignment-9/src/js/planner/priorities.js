import { state } from "../core/state.js";
import { saveState } from "../core/storage.js";

export function renderPriorities() {
  const container = document.getElementById("priorities-list");
  if (!container) return;

  container.innerHTML = "";

  state.priorities.forEach((priority) => {
    const item = document.createElement("li");
    item.className = `flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer group ${
      priority.completed ? "opacity-60" : ""
    }`;

    item.innerHTML = `
      <span class="material-symbols-outlined text-xl text-on-surface-variant group-hover:text-primary shrink-0">${
        priority.completed ? "check_circle" : "radio_button_unchecked"
      }</span>
      <span class="font-sans text-sm text-on-surface flex-grow truncate ${priority.completed ? "line-through text-on-surface-variant" : ""}">
        ${priority.text}
      </span>
      <button class="delete-priority-btn opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white/5 text-on-surface-variant hover:text-error transition-all">
        <span class="material-symbols-outlined text-base">delete</span>
      </button>
    `;

    item.addEventListener("click", (event) => {
      if (event.target.closest(".delete-priority-btn")) return;
      priority.completed = !priority.completed;
      saveState(state);
      renderPriorities();
    });

    item.querySelector(".delete-priority-btn")?.addEventListener("click", () => {
      state.priorities = state.priorities.filter((entry) => entry.id !== priority.id);
      saveState(state);
      renderPriorities();
    });

    container.appendChild(item);
  });
}

export function addPriority(text) {
  state.priorities.push({
    id: Date.now(),
    text,
    completed: false,
  });
  saveState(state);
  renderPriorities();
}

export function deletePriority(priorityId) {
  state.priorities = state.priorities.filter((entry) => entry.id !== priorityId);
  saveState(state);
  renderPriorities();
}

export function togglePriority(priorityId) {
  const priority = state.priorities.find((entry) => entry.id === priorityId);
  if (!priority) return;
  priority.completed = !priority.completed;
  saveState(state);
  renderPriorities();
}
