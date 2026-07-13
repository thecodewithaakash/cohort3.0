import { state } from "../core/state.js";
import { saveState } from "../core/storage.js";
import { startTimer, pauseTimer, resetTimer, syncFocusDisplay } from "./timer.js";


export function initFocusModule() {
  const mainButton = document.getElementById("timer-control-main");
  const resetButton = document.getElementById("timer-reset-btn");
  const modeToggleButton = document.getElementById("timer-mode-toggle");

  mainButton?.addEventListener("click", () => {
    if (state.timerIsRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  });

  resetButton?.addEventListener("click", () => {
    resetTimer();
  });

  modeToggleButton?.addEventListener("click", () => {
    state.timerCurrentMode = state.timerCurrentMode === "focus" ? "break" : "focus";
    resetTimer();
  });

  syncFocusDisplay();
}

export function handleTimerComplete() {
  pauseTimer();

  if (state.timerCurrentMode === "focus") {
    state.sessionsCompleted += 1;
    state.totalFocusMinutes += 25;
    saveState(state);
    alert("Deep Focus Completed! Time for a refreshing break.");
    state.timerCurrentMode = "break";
  } else {
    alert("Break is complete! Ready to start focusing again?");
    state.timerCurrentMode = "focus";
  }

  resetTimer();
}
