const users = JSON.parse(localStorage.getItem("users")) || [];
const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  const fullName = form[0].value;
  const myemail = form[1].value;
  const mypassword = form[2].value;
  function myDetails(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
  }
  const details = new myDetails(fullName,myemail,mypassword);
  users.push(details);
  localStorage.setItem("users",JSON.stringify(users));
  window.location.href="admin.html";
})