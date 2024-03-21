const users = JSON.parse(localStorage.getItem("users"));
const usersListing = document.getElementsByTagName("tbody")[0];
function getData() {
  let listing = ``;
  users.map((element, index) => {
    listing += `
  <tr>
  <td>${element.name}</td>
  <td>${element.email}</td>
  <td>${element.password}</td>
  <td><button class="btns" onclick="onUpdate(${index})">Update</button></td>
  <td><button class="btns" onclick="onDelete(${index})">Delete</button></td>
  </tr>
  `;
  });
  usersListing.innerHTML = listing;
}
getData();

document.getElementById("logout").addEventListener("click", () => {
  window.location.href = "login.html";
  localStorage.setItem("adminState",false);
});

function onDelete(id) {
  const deleted = users.filter((element, index) => index !== id);
  localStorage.setItem("users", JSON.stringify(deleted));
  location.reload();
}

function onUpdate(id) {
  document.getElementsByTagName("form")[0].style.display = "block";
  const form = document.querySelector("form");
  form[0].value = users[id].name;
  form[1].value = users[id].email;
  form[2].value = users[id].password;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    users[id].name = form[0].value;
    users[id].email = form[1].value;
    users[id].password = form[2].value;
    localStorage.setItem("users", JSON.stringify(users));
    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
    form.style.display = "none";
    location.reload();
  });
}
const search = document.getElementById("search");
search.addEventListener("input", (event) => {
  const value = event.target.value;
  const data = users.filter((element) =>element.name.toLowerCase().includes(value.toLowerCase()));
  let listing =``;
  data.map((element,index)=>
  listing+=`
  <tr>
  <td>${element.name}</td>
  <td>${element.email}</td>
  <td>${element.password}</td>
  <td><button class="btns" onclick="onUpdate(${index})">Update</button></td>
  <td><button class="btns" onclick="onDelete(${index})">Delete</button></td>
  </tr>
  `
  );
  usersListing.innerHTML = listing;
});
