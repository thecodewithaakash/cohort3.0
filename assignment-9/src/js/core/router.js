import { state } from "./state.js";
import { renderTasks } from "../tasks/taskRenderer.js";
import { renderPlanner, updatePlannerProgressBar } from "../planner/planner.js";
import { renderGoals } from "../goals/goals.js";
import { renderWisdomQuote } from "../quotes/quotes.js";
import { updateDashboardPreviews } from "./dashboard.js";

export function navigateTo(view) {
  state.currentView = view;

  const views = {
    dashboard: document.getElementById("dashboard-view"),
    tasks: document.getElementById("tasks-view"),
    planner: document.getElementById("planner-view"),
    focus: document.getElementById("focus-view"),
    goals: document.getElementById("goals-view"),
    quotes: document.getElementById("quotes-view"),
  };

  Object.keys(views).forEach((key) => {
    const element = views[key];
    if (element) {
      if (key === view) {
        element.classList.remove("hidden");
        element.classList.add("animate-fade-in");
      } else {
        element.classList.add("hidden");
        element.classList.remove("animate-fade-in");
      }
    }
  });

  const navButtons = document.querySelectorAll(".nav-button");
  const globalNav = document.getElementById("global-bottom-nav");
  navButtons.forEach((button) => {
    const id = button.getAttribute("id");
    const icon = button.querySelector(".material-symbols-outlined");
    if (id === `nav-btn-${view}`) {
      button.classList.add("text-primary", "scale-105");
      button.classList.remove("text-on-surface-variant", "hover:text-on-surface");
      if (icon) {
        icon.setAttribute("style", "font-variation-settings: 'FILL' 1;");
      }
    } else {
      button.classList.remove("text-primary", "scale-105");
      button.classList.add("text-on-surface-variant", "hover:text-on-surface");
      if (icon) {
        icon.removeAttribute("style");
      }
    }
  });

  if (globalNav) {
    globalNav.style.transform = view === "dashboard" ? "translateY(0)" : "translateY(100%)";
  }

  if (view === "tasks") {
    renderTasks();
  }
  if (view === "planner") {
    renderPlanner();
    updatePlannerProgressBar();
  }
  if (view === "goals") {
    renderGoals();
  }
  if (view === "quotes") {
    renderWisdomQuote();
  }

  updateDashboardPreviews();
}

export function initRouter() {
  document.getElementById("logo-btn")?.addEventListener("click", () => navigateTo("dashboard"));
  document.getElementById("dash-nav-tasks")?.addEventListener("click", () => navigateTo("tasks"));
  document.getElementById("dash-nav-planner")?.addEventListener("click", () => navigateTo("planner"));
  document.getElementById("dash-nav-focus")?.addEventListener("click", () => navigateTo("focus"));
  document.getElementById("dash-nav-goals")?.addEventListener("click", () => navigateTo("goals"));
  document.getElementById("dash-nav-quotes")?.addEventListener("click", () => navigateTo("quotes"));

  document.getElementById("nav-btn-dashboard")?.addEventListener("click", () => navigateTo("dashboard"));
  document.getElementById("nav-btn-tasks")?.addEventListener("click", () => navigateTo("tasks"));
  document.getElementById("nav-btn-planner")?.addEventListener("click", () => navigateTo("planner"));
  document.getElementById("nav-btn-focus")?.addEventListener("click", () => navigateTo("focus"));
  document.getElementById("nav-btn-goals")?.addEventListener("click", () => navigateTo("goals"));
  document.getElementById("nav-btn-quotes")?.addEventListener("click", () => navigateTo("quotes"));

  document.querySelectorAll(".back-btn").forEach((button) => {
    button.addEventListener("click", () => navigateTo("dashboard"));
  });
}
