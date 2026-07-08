const username = document.querySelector("#regUsername");
const password = document.querySelector("#regPassword");
const form = document.querySelector("form");

// initialize localStorage
let users = [];
try {
  const storedData = localStorage.getItem("registeredUsers");
  users = storedData ? JSON.parse(storedData) : [];
} catch (error) {
  console.error("Failed to parse users, resetting storage:", error);
  localStorage.setItem("registeredUsers", "[]");
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);

  const name = e.target[0].value;
  const pass = e.target[1].value;

  if(name.length < 3 || pass.length < 8){
    alert('name atleast 3 characters and password must be atleast 8 characters!')
    return;
  }
  

  if (name.trim() === "" || pass.trim() === "") {
    alert("name & password must be provided!");
    return;
  }

  const existingUser = users.find((user) => user.name === name);
  if(existingUser){
    alert('Username already exists! Please choose another.')
    return;
  }

  const currentUser = {
    name:name,
    pass:pass,
  }

  users = [...users,currentUser]

  localStorage.setItem('registeredUsers',JSON.stringify(users));


  username.value = ''
  password.value = ''

  alert('Registration successful! You can now log in.')
  location.href = '../login/login.html'
});
