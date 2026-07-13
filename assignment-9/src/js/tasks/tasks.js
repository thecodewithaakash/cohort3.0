import { state } from "../core/state.js";
import { saveState } from "../core/storage.js";
import { updateDashboardPreviews } from "../core/dashboard.js";
import { renderTasks } from "./taskRenderer.js";
import { taskFilter, setTaskFilter } from "./taskFilter.js";

export function initTasksModule() {
  const form = document.getElementById("task-form");
  const input = document.getElementById("task-input");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!input || !input.value.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input.value.trim(),
      completed: false,
      starred: false,
      createdAt: new Date().toISOString(),
    };

    state.tasks.unshift(newTask);
    input.value = "";
    saveState(state);
    renderTasks();
  });

  const tabs = {
    all: document.getElementById("task-filter-all"),
    starred: document.getElementById("task-filter-starred"),
    completed: document.getElementById("task-filter-completed"),
  };

  const setFilterActive = (nextFilter) => {
    setTaskFilter(nextFilter);
    Object.keys(tabs).forEach((key) => {
      const button = tabs[key];
      if (!button) return;
      if (key === nextFilter) {
        button.className =
          "task-filter-tab px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border bg-primary/20 text-secondary border-secondary/30 shadow-sm shadow-secondary/5";
      } else {
        button.className =
          "task-filter-tab px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-transparent bg-white/5 hover:bg-white/10 text-on-surface-variant";
      }
    });
    renderTasks();
  };

  tabs.all?.addEventListener("click", () => setFilterActive("all"));
  tabs.starred?.addEventListener("click", () => setFilterActive("starred"));
  tabs.completed?.addEventListener("click", () => setFilterActive("completed"));
}

export function createTask(taskData) {
  const newTask = {
    id: Date.now(),
    text: taskData.text,
    completed: false,
    starred: false,
    createdAt: new Date().toISOString(),
  };
  state.tasks.unshift(newTask);
  saveState(state);
  renderTasks();
  updateDashboardPreviews();
  return newTask;
}

export function toggleTask(taskId) {
  const task = state.tasks.find((entry) => entry.id === taskId);
  if (!task) return;
  task.completed = !task.completed;
  saveState(state);
  renderTasks();
  updateDashboardPreviews();
}

export function toggleStar(taskId) {
  const task = state.tasks.find((entry) => entry.id === taskId);
  if (!task) return;
  task.starred = !task.starred;
  saveState(state);
  renderTasks();
  updateDashboardPreviews();
}

export function deleteTask(taskId) {
  state.tasks = state.tasks.filter((entry) => entry.id !== taskId);
  saveState(state);
  renderTasks();
  updateDashboardPreviews();
}
