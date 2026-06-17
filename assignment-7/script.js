// accessing all elements from the DOM.
const form = document.getElementById("taskForm");
const taskContainer = document.getElementById("taskContainer");
const themeToggle = document.getElementById("themeToggle");
const searchTask = document.getElementById("searchTask");
const filterCategory = document.getElementById("filterCategory");
const clearAll = document.getElementById("clearAll");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");

// initializing localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// creating Tasks
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("taskTitle").value.trim();
  const category = document.getElementById("category").value;

  if (!title) return;

  tasks.unshift({
    id: Date.now(),
    title,
    category,
    status: "pending",
  });

  saveTasks(); // saving in localStorage - check in utility-functions.js
  renderTasks(); // rendering in the UI without refreshing the page - utility-functions.js

  form.reset();
});

// ### Attributes vs Properties
// 1. Attributes: static values defined in HTML markup
//    - Do not change automatically at runtime
//    - Examples: id, class, src, alt, type, placeholder
//
// 2. Properties: dynamic values of DOM objects
//    - Reflect current state in JavaScript
//    - Example: <p id="paraText"> → "id" is attribute,
//      but element.id = "paraText" is property

const demoInput = document.getElementById("taskTitle");
// console.log(demoInput.getAttribute("value"));
// console.log(demoInput.value);

// taskContainer ~ Edit,Complete,Delete - Tasks
taskContainer.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  // console.log(action);

  if (!action) return;

  const card = event.target.closest(".task-card");

  const id = Number(card.dataset.id);

  if (action === "delete") {
    tasks = tasks.filter((task) => task.id !== id);
    card.remove();

    saveTasks();
    renderTasks();
  }

  if (action === "complete") {
    tasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: "completed",
          }
        : task,
    );

    saveTasks();
    renderTasks();
  }

  if (action === "edit") {
    const task = tasks.find((task) => task.id === id);
    const input = document.createElement("input");
    input.value = task.title;
    const title = card.querySelector("h3");
    title.replaceWith(input);

    input.addEventListener("blur", () => {
      task.title = input.value;

      saveTasks();
      renderTasks();
    });
  }
});

// 4. implemented Theme Toggle Feature
themeToggle.addEventListener("click", () => {
  const current = document.body.dataset.theme;

  const next = current === "light" ? "dark" : "light";
  document.body.dataset.theme = next;
  document.body.setAttribute("data-theme", next);
  document.body.classList.toggle("dark");
});

// implemented search  functionality
searchTask.addEventListener("input", () => {
  const value = searchTask.value.toLowerCase();

  const filtered = tasks.filter((task) =>
    task.title.toLowerCase().includes(value),
  );

  renderTasks(filtered);
});

// implemented filter category
filterCategory.addEventListener("change", () => {
  const category = filterCategory.value;

  if (category === "all") {
    renderTasks();
    return;
  }

  renderTasks(tasks.filter((task) => task.category === category));
});

// clearing all task
clearAll.addEventListener("click", () => {
  tasks = [];

  saveTasks();
  renderTasks();
});

// rendering all tasks
renderTasks();

// ### Event Delegation
const eventDelegation = document.getElementById("event-delegation");

eventDelegation.addEventListener("click", function (e) {
  if (e.target.classList.contains("task-card")) {
    console.log("Clicked Task:", e.target.dataset.id);
  }
});

// ### Now implement and understand - event propagation, bubbling,capturing etc..

const child = document.getElementById("child");
const parent = document.getElementById("parent");
const grandParent = document.getElementById("grandparent");

// ### EVENT BUBBLING : Child → Parent → Grandparent

child.addEventListener("click", () => console.log("Bubbling: Child Bubble"));
parent.addEventListener("click", () => console.log("Bubbling: Parent Bubble"));
grandParent.addEventListener("click", () =>
  console.log("Bubbling: Grandparent Bubble"),
);

// ### EVENT CAPTURING : Grandparent → Parent → Child
grandParent.addEventListener(
  "click",
  () => console.log("Capturing: Grandparent Capture"),
  true,
);
parent.addEventListener(
  "click",
  () => console.log("Capturing: Parent Capture"),
  true,
);
child.addEventListener(
  "click",
  () => console.log("Capturing: Child Capture"),
  true,
);
