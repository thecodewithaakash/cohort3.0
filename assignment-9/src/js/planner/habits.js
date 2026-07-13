import { state } from "../core/state.js";
import { saveState } from "../core/storage.js";

export function renderHabits() {
  const container = document.getElementById("habits-container");
  if (!container) return;

  container.innerHTML = "";

  state.habits.forEach((habit) => {
    const item = document.createElement("button");
    item.className = `flex flex-col items-center gap-1.5 shrink-0 transition-all ${
      habit.active ? "scale-100" : "scale-[0.95] opacity-50 hover:opacity-85"
    }`;

    item.innerHTML = `
      <div class="w-11 h-11 rounded-full border-2 flex items-center justify-center text-lg transition-all ${
        habit.active
          ? `${habit.color} bg-white/5 shadow-md shadow-black/10`
          : "border-white/10 text-on-surface"
      }">
        ${habit.icon}
      </div>
      <span class="font-sans text-[10px] font-bold uppercase tracking-wider truncate max-w-[50px]">${habit.name}</span>
    `;

    item.addEventListener("click", () => {
      toggleHabit(habit.id);
    });

    container.appendChild(item);
  });

  const addButton = document.createElement("button");
  addButton.className =
    "flex flex-col items-center gap-1.5 shrink-0 scale-[0.95] opacity-40 hover:opacity-80 transition-all";
  addButton.innerHTML = `
    <div class="w-11 h-11 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-on-surface-variant hover:text-on-surface">
      <span class="material-symbols-outlined text-lg">add</span>
    </div>
    <span class="font-sans text-[10px] font-bold uppercase tracking-wider">New</span>
  `;

  addButton.addEventListener("click", () => {
    const name = prompt("Enter habit name:");
    if (!name) return;
    const icons = ["✨", "🍎", "🧘", "💧", "💪", "📚", "🏃", "🚶"];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const colors = [
      "border-primary text-primary",
      "border-secondary text-secondary",
      "border-tertiary text-tertiary",
      "border-rose-400 text-rose-400",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    state.habits.push({
      id: Date.now().toString(),
      name,
      icon: randomIcon,
      color: randomColor,
      active: false,
    });

    saveState(state);
    renderHabits();
  });

  container.appendChild(addButton);
}

export function toggleHabit(habitId) {
  const habit = state.habits.find((entry) => entry.id === habitId);
  if (!habit) return;
  habit.active = !habit.active;
  saveState(state);
  renderHabits();
}

export function createHabit(habitData) {
  state.habits.push({
    id: Date.now().toString(),
    name: habitData.name,
    icon: habitData.icon || "✨",
    color: habitData.color || "border-primary text-primary",
    active: false,
  });
  saveState(state);
  renderHabits();
}
