const displayBalance = document.querySelector("#displayBalance");
const displayIncome = document.querySelector("#displayIncome");
const displayExpense = document.querySelector("#displayExpense");
const displayCount = document.querySelector("#displayCount");
const tableBody = document.querySelector("#transactionTableBody");

let userProfile = JSON.parse(localStorage.getItem("user")) || {
  username: "Guest",
  currency: "$",
};
let storageKey = `transactions_${userProfile.username}`;
let transactions = JSON.parse(localStorage.getItem(storageKey)) || [];

// initialize chart
let myChart = null;

// ### fetching all transactions - initial rendering of existing transactions data
updateUI();

// ### fetching username + implementing logout feature
const topBarName = document.querySelector("#topbarName");
const logoutBtn = document.querySelector("#logoutBtn");
const settingName = document.querySelector("#settingName");

const settingUser = JSON.parse(localStorage.getItem("user"));
const sessions = JSON.parse(sessionStorage.getItem("sessions") || "[]");

if (settingUser) {
  topBarName.textContent = settingUser.username;
  settingName.value = settingUser.username;
} else {
  topBarName.textContent = sessions.name;
  settingName.value = sessions.name;
}

// implementing logout
logoutBtn.addEventListener("click", (e) => {
  console.log("clickedd");

  e.preventDefault();
  sessionStorage.removeItem("sessions");
  localStorage.removeItem("user");
  location.href = "./auth/login/login.html";
});

// ### Implement settings - where user can manage their profile + choose currency
const buttons = document.querySelectorAll("[data-target]");
const viewSection = document.querySelectorAll(".view-section");
const navItem = document.querySelectorAll(".nav-item");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // const targetId = btn.dataset.target;
    const targetId = btn.getAttribute("data-target");

    viewSection.forEach((v) => v.classList.remove("active"));
    navItem.forEach((n) => n.classList.toggle("active"));

    document.getElementById(targetId).classList.add("active");
  });
});

const settingCurrency = document.querySelector("#settingCurrency");
const settingsForm = document.querySelector("#settingsForm");

let defaultCurrency = "$";
settingsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = {
    currency: settingCurrency.value,
    username: settingName.value,
  };

  localStorage.setItem("user", JSON.stringify(user));
  settingName.value = user.username;
  settingCurrency.value = user.currency;
  displayBalance.textContent = `${user.currency}0.00`;
  displayIncome.textContent = `${user.currency}0.00`;
  displayExpense.textContent = `${user.currency}0.00`;
  topBarName.textContent = user.username;
  alert("Settings saved successfully!");
});

// ### implementing modal feature
const transactionModal = document.querySelector("#transactionModal");
const openAddModalBtn = document.querySelector("#openAddModalBtn");
const closeModal = document.querySelector(".close-modal");

openAddModalBtn.addEventListener("click", () => {
  console.log("clicked");
  document.getElementById("modalTitle").value = "";
  document.getElementById("txId").value = "";
  document.getElementById("txDate").valueAsDate = new Date();
  transactionModal.classList.toggle("active");
});

closeModal.addEventListener("click", () => {
  transactionModal.classList.remove("active");
});

// ### Implementing "Add Transaction" Feature
const txId = document.querySelector("#txId");
const txType = document.querySelector("#txType");
const txDescription = document.querySelector("#txDescription");
const txAmount = document.querySelector("#txAmount");
const txDate = document.querySelector("#txDate");
const txCategory = document.querySelector("#txCategory");
const transactionForm = document.querySelector("#transactionForm");

const generateID = () => Math.floor(Math.random() * 1000000000);

let transactionStorage = null;
if (settingUser) {
  transactionStorage = JSON.parse(
    localStorage.getItem(`transactions_${settingUser.username}`) || "[]",
  );
} else {
  transactionStorage = JSON.parse(
    localStorage.getItem(`transactions_${sessions.name}`) || "[]",
  );
}

const transactionData = [];
transactionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = txId.value;
  const type = txType.value;
  const description = txDescription.value;
  const amount = parseFloat(txAmount.value);
  const date = txDate.value;
  const category = txCategory.value;

  const newTx = {
    id: id ? parseInt(id) : generateID(),
    type,
    description,
    amount,
    date,
    category,
  };

  if (id) {
    transactions = transactions.map((tx) => (tx.id === newTx.id ? newTx : tx));
  } else {
    transactions.push(newTx);
  }

  transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  updateUI();

  // form reset
  transactionForm.reset();

  // close modal
  transactionModal.classList.remove("active");
});

function updateUI(dataToRender = transactions) {
  tableBody.innerHTML = "";

  let totalIncome = 0;
  let totalExpense = 0;
  const cur = userProfile.currency || "$";

  dataToRender.forEach((tx) => {
    if (tx.type === "income") {
      totalIncome += Number(tx.amount);
    } else {
      totalExpense += Number(tx.amount);
    }

    const sign = tx.type === "income" ? "+" : "-";
    const colorClass = tx.type === "income" ? "text-green" : "text-red";
    const tr = document.createElement("tr");

    tr.innerHTML = `
                <td>${tx.date}</td>
                <td><strong>${tx.description}</strong></td>
                <td><span class="tag">${tx.category}</span></td>
                <td class="${colorClass}">${sign}${cur}${Number(tx.amount).toFixed(2)}</td>
                <td>
                    <button class="action-btn btn-edit" onclick="editTransaction(${tx.id})"><i class="fa-solid fa-pen"></i></button>
                    <button class="action-btn btn-delete" onclick="deleteTransaction(${tx.id})"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
    tableBody.appendChild(tr);
  });

  // Update Summary Cards with correct currency
  const balance = totalIncome - totalExpense;
  displayBalance.innerText = `${balance < 0 ? "-" : ""}${cur}${Math.abs(balance).toFixed(2)}`;
  displayIncome.innerText = `${cur}${totalIncome.toFixed(2)}`;
  displayExpense.innerText = `${cur}${totalExpense.toFixed(2)}`;
  displayCount.innerText = dataToRender.length;

  // Save to the USER-SPECIFIC key
  localStorage.setItem(storageKey, JSON.stringify(transactions));
  updateChart(totalIncome, totalExpense);
}

// Edit Transactions
function editTransaction(id) {
  console.log("clicked...", id);
  const tx = transactions.find((t) => t.id === id);
  if (!tx) return;

  transactionModal.classList.add("active");
  document.getElementById("modalTitle").value = "Edit Transaction";

  txId.value = tx.id;
  txType.value = tx.type;
  txDescription.value = tx.description;
  txAmount.value = tx.amount;
  txDate.value = tx.date;
  txCategory.value = tx.category;
}

// delete
function deleteTransaction(id) {
  if (confirm("Are you sure you want to delete this transaction?")) {
    transactions = transactions.filter((tx) => tx.id !== id);
    updateUI();
  }
}

// ### THEME & NAVIGATION
const darkModeToggle = document.getElementById("darkModeToggle");
const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.body.classList.add("dark-theme");
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
});

// reset all data
const resetBtn = document.querySelector("#resetDataBtn");
resetBtn.addEventListener("click", () => {
  if (
    confirm("WARNING: This will delete all your transaction data permanently!")
  ) {
    transactions = [];
    updateUI();
  }
});

// ### implementing chart feature
function updateChart(income, expense) {
  const ctx = document.getElementById("cashFlowChart").getContext("2d");
  if (myChart) {
    myChart.destroy();
  }
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Income vs Expenses"],
      datasets: [
        {
          label: "Income",
          data: [income],
          backgroundColor: "#166534",
          borderRadius: 4,
        },
        {
          label: "Expenses",
          data: [expense],
          backgroundColor: "#991b1b",
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true } },
      plugins: { legend: { position: "top" } },
    },
  });
}
