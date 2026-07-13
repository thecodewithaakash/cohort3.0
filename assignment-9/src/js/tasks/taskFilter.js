import { state } from "../core/state.js";

export let taskFilter = "all";

export function setTaskFilter(nextFilter) {
  taskFilter = nextFilter;
}

export function filterTasks() {
  return state.tasks.filter((task) => {
    if (taskFilter === "starred") return task.starred;
    if (taskFilter === "completed") return task.completed;
    return true;
  });
}
