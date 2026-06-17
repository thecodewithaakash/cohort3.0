
// utility functions which is reused many times.
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// this is for - to count pending & completed Tasks
function taskCounters() {
  const completed = tasks.filter((task) => task.status === "completed").length;

  completedCount.textContent = completed;

  pendingCount.textContent = tasks.length - completed;
}

function renderTasks(taskList = tasks) {
  taskContainer.innerHTML = "";

  // here i used DocumentFragment because -> It lets you batch DOM updates off-screen,
  // Avoids multiple reflows/repaints (performance boost),Safer than appending directly to DOM each time
  const fragment = document.createDocumentFragment();

  taskList.forEach((task) => {
    const card = document.createElement("div");

    card.className = "task-card";

    if (task.status === "completed") {
      card.classList.add("completed");
    }

    card.setAttribute("data-id", task.id);

    card.setAttribute("data-status", task.status);

    card.setAttribute("data-category", task.category);

    const heading = document.createElement("h3");

    const textNode = document.createTextNode(task.title);

    heading.appendChild(textNode);

    card.append(heading);

    const category = document.createElement("p");

    category.textContent = `Category: ${task.category}`;

    card.append(category);

    const actions = document.createElement("div");

    actions.className = "actions";

    actions.innerHTML = `
      <button data-action="edit">Edit</button>
      <button data-action="complete">Complete</button>
      <button data-action="delete">Delete</button>
    `;

    card.append(actions);

    fragment.appendChild(card);
  });

  taskContainer.appendChild(fragment);

  taskCounters();
}
