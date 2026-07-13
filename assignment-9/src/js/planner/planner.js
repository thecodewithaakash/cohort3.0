import { state } from "../core/state.js";
import { saveState } from "../core/storage.js";
import { updateDashboardPreviews } from "../core/dashboard.js";
import { renderPriorities } from "./priorities.js";
import { renderHabits } from "./habits.js";

export function initPlannerModule() {
  const form = document.getElementById("priority-form");
  const input = document.getElementById("priority-input");
  const toggleButton = document.getElementById("toggle-priority-btn");
  const formContainer = document.getElementById("add-priority-form-container");

  toggleButton?.addEventListener("click", () => {
    if (formContainer) {
      if (formContainer.classList.contains("hidden")) {
        formContainer.classList.remove("hidden");
        if (input) input.focus();
      } else {
        formContainer.classList.add("hidden");
      }
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!input || !input.value.trim()) return;

    state.priorities.push({
      id: Date.now(),
      text: input.value.trim(),
      completed: false,
    });

    input.value = "";
    if (formContainer) formContainer.classList.add("hidden");
    saveState(state);
    renderPriorities();
  });
}

export function renderPlanner() {
  const dateElement = document.getElementById("planner-date");
  if (dateElement) {
    dateElement.textContent = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }

  const container = document.getElementById("planner-slots-container");
  if (!container) return;

  container.innerHTML = "";
  const currentHour = new Date().getHours();

  for (let hour = 8; hour <= 20; hour++) {
    const isCurrent = hour === currentHour;
    const hourLabel =
      hour > 12 ? `${hour - 12} PM` : hour === 12 ? "12 PM" : `${hour} AM`;
    const value = state.plannerData[hour] || "";

    const slot = document.createElement("div");
    slot.className = `flex flex-col sm:flex-row gap-3 sm:gap-6 p-4 rounded-2xl transition-all duration-300 relative border ${
      isCurrent
        ? "bg-primary-container/10 border-primary/30 ring-1 ring-primary/20"
        : "hover:bg-white/5 border-transparent"
    }`;

    slot.innerHTML = `
      <div class="flex sm:flex-col justify-between sm:justify-center items-center sm:items-start w-full sm:w-20 shrink-0">
        <span class="font-sans font-bold text-base ${isCurrent ? "text-primary" : "text-on-surface-variant"}">${hourLabel}</span>
        ${isCurrent ? '<span class="px-1.5 py-0.5 bg-primary/25 text-primary text-[9px] font-bold rounded uppercase tracking-wider mt-0.5">Current</span>' : ""}
      </div>

      <div class="flex-1">
        <textarea rows="1" placeholder="Add plans for this hour..." class="w-full bg-transparent border-none focus:ring-0 resize-none font-sans text-base text-on-surface placeholder:text-white/10 p-0 overflow-hidden focus:outline-none">${value}</textarea>
      </div>
    `;

    const textarea = slot.querySelector("textarea");
    if (textarea) {
      textarea.addEventListener("input", () => {
        state.plannerData[hour] = textarea.value;
        saveState(state);
        updatePlannerProgressBar();
        updateDashboardPreviews();
      });
    }

    container.appendChild(slot);
  }

  updatePlannerProgressBar();
  renderPriorities();
  renderHabits();
}

export function updatePlannerProgressBar() {
  const totalSlots = 13;
  const filledSlots = Object.values(state.plannerData).filter((value) => value.trim().length > 0).length;
  const percent = Math.round((filledSlots / totalSlots) * 100);

  const bar = document.getElementById("planner-progress-bar");
  const text = document.getElementById("planner-progress-percent");
  if (bar) bar.style.width = `${Math.max(percent, 5)}%`;
  if (text) text.textContent = `${percent}%`;
}
