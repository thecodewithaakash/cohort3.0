import { state } from "../core/state.js";

export function initTheme() {
  const button = document.getElementById("theme-toggle-btn");
  const icon = document.getElementById("theme-icon");

  const applyTheme = () => {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.getElementById("shader-canvas")?.classList.remove("hidden");
      document.body.classList.add("text-white");
      if (icon) icon.textContent = "sun_today";
    } else {
      document.documentElement.classList.add("light");
      document.body.classList.remove("text-white");
      document.getElementById("shader-canvas")?.classList.add("hidden");
      document.documentElement.classList.remove("dark");
      if (icon) icon.textContent = "dark_mode";
    }
  };

  button?.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
  });

  applyTheme();
}
