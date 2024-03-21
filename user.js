const users = JSON.parse(localStorage.getItem("users"));
const urlParam = new URLSearchParams(window.location.search);
let index = parseInt(urlParam.get("id"));

const greet = document.getElementsByTagName("h1")[0];
greet.innerHTML=`Welcome ${users[index].name}`;

const updateProfile = document.getElementById("updateProfile");
updateProfile.addEventListener("click",()=>{
  const form = document.getElementsByTagName("form")[0];
  greet.style.display="none";
  form.style.display="block"; 
  form[0].value=users[index].name;
  form[1].value=users[index].email;
  form[2].value=users[index].password;
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    users[index].name=form[0].value;
    users[index].email=form[1].value;
    users[index].password=form[2].value;
    localStorage.setItem("users",JSON.stringify(users));
    form[0].value="";
    form[1].value="";
    form[2].value="";
    form.style.display="none";
    greet.style.display="block";
    location.reload();
  });
})
document.getElementById("logout").addEventListener("click",()=>{
  localStorage.setItem(`userLogin`,false);
  window.location.href="login.html";
})

