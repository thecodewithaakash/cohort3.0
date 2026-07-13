import { saveState } from "./core/storage.js";
import { updateDashboardPreviews } from "./core/dashboard.js";
import { initRouter } from "./core/router.js";
import { initShaderBackground } from "./ui/shader.js";
import { initTheme } from "./ui/theme.js";
import { initClock } from "./ui/clock.js";
import { initWeather } from "./ui/weather.js";
import { initTasksModule } from "./tasks/tasks.js";
import { initPlannerModule } from "./planner/planner.js";
import { initFocusModule } from "./focus/pomodoro.js";
import { initGoalsModule } from "./goals/goals.js";
import { initQuotesModule } from "./quotes/quotes.js";
import { state } from "./core/state.js";

document.addEventListener("DOMContentLoaded", () => {
  initShaderBackground();
  initTheme();
  initClock();
  initRouter();
  initWeather();
  initTasksModule();
  initPlannerModule();
  initFocusModule();
  initGoalsModule();
  initQuotesModule();

  saveState(state);
  updateDashboardPreviews();
});
