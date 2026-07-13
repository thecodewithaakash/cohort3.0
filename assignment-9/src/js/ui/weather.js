import { state } from "../core/state.js";
import { CITIES_WEATHER } from "../core/constants.js";

export function initWeather() {
  const card = document.getElementById("weather-card");
  const selector = document.getElementById("city-selector");

  const updateWeatherDisplay = () => {
    const weather = CITIES_WEATHER[state.selectedCity];
    const iconElement = document.getElementById("weather-icon");
    const tempElement = document.getElementById("weather-temp");
    const conditionElement = document.getElementById("weather-cond");
    const cityElement = document.getElementById("weather-city");
    const rangeElement = document.getElementById("weather-range");

    if (iconElement) iconElement.textContent = weather.icon;
    if (tempElement) tempElement.textContent = `${weather.temp}°F`;
    if (conditionElement) conditionElement.textContent = weather.condition;
    if (cityElement) cityElement.textContent = weather.name;
    if (rangeElement) rangeElement.textContent = `H: ${weather.high}° L: ${weather.low}°`;
  };

  card?.addEventListener("click", (event) => {
    if (event.target.closest("#city-selector")) return;
    state.weatherSelectorVisible = !state.weatherSelectorVisible;
    if (selector) {
      if (state.weatherSelectorVisible) {
        selector.classList.remove("hidden");
      } else {
        selector.classList.add("hidden");
      }
    }
  });

  if (selector) {
    selector.innerHTML = "";
    Object.keys(CITIES_WEATHER).forEach((cityKey) => {
      const button = document.createElement("button");
      button.className = `px-3 py-1 rounded-full text-xs font-medium transition-all city-pill-btn ${
        state.selectedCity === cityKey
          ? "bg-primary/20 text-primary border border-primary/30"
          : "bg-white/5 text-on-surface-variant hover:bg-white/10"
      }`;
      button.textContent = cityKey;
      button.addEventListener("click", () => {
        state.selectedCity = cityKey;
        updateWeatherDisplay();

        document.querySelectorAll(".city-pill-btn").forEach((pill) => {
          if (pill.textContent === cityKey) {
            pill.className =
              "px-3 py-1 rounded-full text-xs font-medium transition-all city-pill-btn bg-primary/20 text-primary border border-primary/30";
          } else {
            pill.className =
              "px-3 py-1 rounded-full text-xs font-medium transition-all city-pill-btn bg-white/5 text-on-surface-variant hover:bg-white/10";
          }
        });
      });
      selector.appendChild(button);
    });
  }

  updateWeatherDisplay();
}
