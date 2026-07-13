import { state } from "../core/state.js";
import { saveState } from "../core/storage.js";
import { updateDashboardPreviews } from "../core/dashboard.js";
import { handleTimerComplete } from "./pomodoro.js";

export function startTimer() {
  state.timerIsRunning = true;
  const mainIcon = document.getElementById("timer-control-icon");
  const circle = document.getElementById("timer-visual-circle");

  if (mainIcon) mainIcon.textContent = "pause";
  if (circle) circle.classList.add("timer-glow", "scale-[1.02]");

  state.timerInterval = window.setInterval(() => {
    if (state.timerTimeLeft <= 1) {
      handleTimerComplete();
    } else {
      state.timerTimeLeft -= 1;
      syncFocusDisplay();
    }
  }, 1000);
}

export function pauseTimer() {
  state.timerIsRunning = false;
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }

  const mainIcon = document.getElementById("timer-control-icon");
  const circle = document.getElementById("timer-visual-circle");

  if (mainIcon) mainIcon.textContent = "play_arrow";
  if (circle) circle.classList.remove("timer-glow", "scale-[1.02]");
}

export function resetTimer() {
  pauseTimer();
  state.timerTimeLeft = state.timerCurrentMode === "focus" ? 25 * 60 : 5 * 60;
  syncFocusDisplay();
}

export function syncFocusDisplay() {
  const minutes = Math.floor(state.timerTimeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (state.timerTimeLeft % 60).toString().padStart(2, "0");
  const displayString = `${minutes}:${seconds}`;

  const displayElement = document.getElementById("timer-time-display");
  const labelElement = document.getElementById("timer-mode-label");
  const labelIcon = document.getElementById("timer-mode-toggle-icon");

  if (displayElement) displayElement.textContent = displayString;

  if (labelElement) {
    if (state.timerCurrentMode === "focus") {
      labelElement.className =
        "font-sans text-xs font-bold uppercase tracking-[0.25em] mb-3 flex items-center gap-1.5 text-secondary";
      labelElement.innerHTML = `<span class="material-symbols-outlined text-sm animate-pulse">psychology</span>Deep Focus`;
      if (labelIcon) labelIcon.textContent = "coffee";
    } else {
      labelElement.className =
        "font-sans text-xs font-bold uppercase tracking-[0.25em] mb-3 flex items-center gap-1.5 text-primary";
      labelElement.innerHTML = `<span class="material-symbols-outlined text-sm">coffee</span>Short Break`;
      if (labelIcon) labelIcon.textContent = "psychology";
    }
  }

  const sessionElement = document.getElementById("focus-completed-count");
  const totalMinutesElement = document.getElementById("focus-total-minutes");
  if (sessionElement) sessionElement.textContent = state.sessionsCompleted.toString();
  if (totalMinutesElement) {
    totalMinutesElement.textContent =
      state.totalFocusMinutes >= 60
        ? `${Math.floor(state.totalFocusMinutes / 60)}h ${state.totalFocusMinutes % 60}m`
        : `${state.totalFocusMinutes}m`;
  }

  updateDashboardPreviews();
}
