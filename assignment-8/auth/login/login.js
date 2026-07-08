const username = document.querySelector("#loginUsername");
const password = document.querySelector("#loginPassword");
const form = document.querySelector("form");

// getting all registered users
const storedUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
// console.log(storedUsers);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = username.value;
  const loginPassword = password.value;

  if (name.length < 3 || loginPassword.length < 8) {
    alert(
      "name atleast 3 characters and password must be atleast 8 characters!",
    );
    return;
  }

  if (name.trim() === "" || loginPassword.trim() === "") {
    alert("name & password must be provided!");
    return;
  }

  const isUserRegistered = storedUsers.find(
    (user) => user.name === name && user.pass === loginPassword,
  );
  if (isUserRegistered) {
    sessionStorage.setItem("sessions", JSON.stringify(isUserRegistered));
  } else {
    alert("Invalid username or password.");
    return;
  }

  username.value = "";
  password.value = "";

  location.href = "../../index.html";
});
