<!-- # DOM Explorer: Build an Interactive Task Manager Using Pure JavaScript

## 📖 Task Overview

In this assignment, you will build a fully interactive **Task Manager Application** using only **HTML, CSS, and Vanilla JavaScript**.

The purpose of this project is to strengthen your understanding of:

* HTML → Browser Rendering Pipeline
* Parsing
* Tokenization
* DOM Tree
* CSSOM Tree
* Render Tree
* Attributes vs Properties
* DOM Manipulation
* Event Handling
* Event Propagation (Bubbling & Capturing)
* Event Delegation

> ⚠️ Frameworks and libraries are **not allowed**. Everything must be built using DOM APIs and Vanilla JavaScript.

---

# 🎯 Learning Objectives

By completing this project, you should be able to:

* ✅ Dynamically create and remove DOM elements
* ✅ Understand the difference between Attributes and Properties
* ✅ Use Event Delegation effectively
* ✅ Demonstrate Event Bubbling and Event Capturing
* ✅ Build real-world UI interactions using DOM APIs
* ✅ Explain how a browser converts HTML and CSS into a Render Tree

---

# 🚀 Features to Implement

## 1️⃣ Task Creation Module

Create a form containing:

* Task Title Input
* Category Dropdown
* Add Task Button

When the user submits the form:

* Create a new task card dynamically
* Use:

  * `createElement()`
  * `createTextNode()`
  * `append()` or `appendChild()`

Each task should appear instantly without a page refresh.

---

## 2️⃣ Attributes vs Properties

Every task card must contain custom data attributes:

```html
data-id
data-status
data-category
```

Practice using:

* `getAttribute()`
* `setAttribute()`
* `removeAttribute()`
* `hasAttribute()`
* `dataset`

### Demonstration Required

Show the difference between:

```js
input.value
```

and

```js
input.getAttribute("value")
```

Add comments explaining the difference.

---

## 3️⃣ DOM Manipulation

Each task card should contain:

* Edit Button
* Complete Button
* Delete Button

Use the following methods somewhere in the project:

```js
append()
prepend()
before()
after()
replaceWith()
remove()
```

---

## 4️⃣ Theme Toggle

Create a Dark Mode / Light Mode switch.

### Requirements

* Use `classList`
* Use `dataset`
* Use `setAttribute()`

Store the current theme inside a custom data attribute.

Example:

```html
data-theme="dark"
```

---

## 5️⃣ Event Handling

Implement functionality for:

* Add Task
* Delete Task
* Edit Task
* Complete Task

Use:

```js
addEventListener()
```

---

## 6️⃣ Event Delegation

Instead of attaching separate event listeners to every task card:

* Attach a single listener to the parent container
* Handle actions using Event Delegation

---

## 7️⃣ Event Propagation Demonstration

Create the following structure:

```text
Grandparent
└── Parent
    └── Child Button
```

### Event Bubbling

Log execution order in the console.

Example:

```text
Child
Parent
Grandparent
```

### Event Capturing

Log execution order in the console.

Example:

```text
Grandparent
Parent
Child
```

Explain the difference in comments.

---

## 8️⃣ Browser Rendering Pipeline Section

Create a separate visual section on the webpage explaining:

```text
HTML
  ↓
Parsing
  ↓
Tokenization
  ↓
DOM Tree

CSS
  ↓
CSSOM Tree

DOM Tree + CSSOM Tree
  ↓
Render Tree
```

Display this flow using:

* Cards
* Flow Diagram
* Timeline
* Boxes connected with arrows

---

# 🌟 Bonus Features

Complete any of the following:

* Task Search
* Task Filter by Category
* Completed Task Counter
* Pending Task Counter
* Clear All Tasks Button
* Use `DocumentFragment`
* Local Storage Integration

---

# 📦 Submission Requirements

## 1. GitHub Repository

Push complete source code.

## 2. Live Deployment

Deploy the project using:

* Netlify
* Vercel
* GitHub Pages

## 3. README File

README must explain:

* Parsing
* Tokenization
* DOM Tree
* CSSOM Tree
* Render Tree
* Event Bubbling
* Event Capturing
* Event Delegation

---

# 📊 Evaluation Criteria

| Criteria                    | Weightage |
| --------------------------- | --------- |
| DOM Manipulation            | 30%       |
| Event Handling & Delegation | 25%       |
| Attributes vs Properties    | 15%       |
| Code Quality                | 15%       |
| UI/UX                       | 15%       |

---

# 🏆 Expected Outcome

By the end of this assignment, you should have a complete **Task Manager Application** that demonstrates:

* Real-world usage of DOM APIs
* Event Propagation concepts
* Attributes vs Properties
* Browser Rendering Pipeline concepts
 -->

### Important Points Explained

# 1. Parsing

- Parsing is the process where the browser reads HTML code and analyzes its structure according to HTML rules.
  Example HTML:

```html
<body>
  <h1>Hello</h1>
</body>
```

The browser parses the tags and understands:

- `body` is an element
- `h1` is inside `body`
- `"Hello"` is text content

### Flow

```text
HTML Code
    ↓
Parsing
    ↓
DOM Tree
```

# 2. Tokenization
- Before creating the DOM Tree, the browser breaks HTML into small pieces called **tokens**.

Example:

```html
<h1>Hello</h1>
```

```text
Start Tag Token -> <h1>
Text Token      -> Hello
End Tag Token   -> </h1>
```

### Flow

```text
HTML
 ↓
Tokenization
 ↓
Tokens
 ↓
Parsing
 ↓
DOM Tree
```

### Why it is needed?

- The browser cannot directly understand a long HTML string.
- It first converts it into tokens and then builds the DOM Tree.

---

# 3. DOM Tree

- The DOM (Document Object Model) Tree is a tree-like representation of HTML created by the browser. Each HTML element becomes a node in the tree.
Example:
```html
<html>
  <body>
    <h1>Hello</h1>
    <button>Click</button>
  </body>
</html>
```

DOM Tree:

```text
html
│
└── body
    │
    ├── h1
    │   └── "Hello"
    │
    └── button
        └── "Click"
```

### JavaScript Example

```js
const heading = document.querySelector("h1");

heading.textContent = "New Title";
```

- JavaScript modifies the DOM Tree through DOM APIs.

---

# 4. CSSOM Tree

- The CSSOM (CSS Object Model) Tree is created when the browser parses CSS.
- Example CSS:
```css
h1 {
  color: red;
}

button {
  background: blue;
}
```

CSSOM:

```text
CSSOM
│
├── h1
│    └── color: red
│
└── button
     └── background: blue
```

### Flow

```text
CSS
 ↓
Parsing
 ↓
CSSOM Tree
```

- The browser uses CSSOM to determine how elements should appear.

---

# 5. Render Tree

- The Render Tree is created by combining:

```text
DOM Tree
    +
CSSOM Tree
    ↓
Render Tree
```

- The Render Tree contains only visible elements.

Example:

```html
<h1>Hello</h1>

<div style="display:none">Hidden</div>
```

- DOM Tree contains both elements.
- Render Tree contains only:

```text
h1
```

because the `div` is hidden.

### Browser Rendering Pipeline

```text
HTML
 ↓
Tokenization
 ↓
Parsing
 ↓
DOM Tree

CSS
 ↓
Parsing
 ↓
CSSOM Tree

DOM + CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
```

---

# 6. Event Bubbling

- When an event occurs on a child element, it first executes on the child and then moves upward through its ancestors.

### HTML

```html
<div id="grandparent">
  <div id="parent">
    <button id="child">Click</button>
  </div>
</div>
```

### JavaScript

```js
grandparent.addEventListener("click", () => {
  console.log("Grandparent");
});

parent.addEventListener("click", () => {
  console.log("Parent");
});

child.addEventListener("click", () => {
  console.log("Child");
});
```

### Output

```text
Child
Parent
Grandparent
```

- This is called **bubbling**.

---

# 7. Event Capturing

- Capturing is the opposite of bubbling.
- The event starts from the outermost ancestor and moves downward to the target element.

### JavaScript

```js
grandparent.addEventListener(
  "click",
  () => {
    console.log("Grandparent");
  },
  true,
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent");
  },
  true,
);

child.addEventListener(
  "click",
  () => {
    console.log("Child");
  },
  true,
);
```

### Output

```text
Grandparent
Parent
Child
```

- The third argument `true` enables capturing mode.

---

# 8. Event Delegation

- Instead of attaching event listeners to every child element, attach one listener to the parent and use event bubbling to handle child events.

```html
<div id="event-delegation">
  <div class="task-card" data-id="1">Task 1</div>
  <div class="task-card" data-id="2">Task 2</div>
  <div class="task-card" data-id="3">Task 3</div>
</div>
```

```js
const eventDelegation = document.getElementById("event-delegation");

eventDelegation.addEventListener("click", function (e) {
  if (e.target.classList.contains("task-card")) {
    console.log("Clicked Task:", e.target.dataset.id);
  }
});
```

### Attributes vs Properties
1. Attributes: static values defined in HTML markup
   - Do not change automatically at runtime
   - Examples: id, class, src, alt, type, placeholder

2. Properties: dynamic values of DOM objects
   - Reflect current state in JavaScript
   - Example: <p id="paraText"> → "id" is attribute,
     but element.id = "paraText" is property
