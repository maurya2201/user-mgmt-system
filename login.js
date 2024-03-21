const users = JSON.parse(localStorage.getItem("users"));
const form = document.querySelector("form");
localStorage.setItem("adminState",false);
localStorage.setItem("userLogin",false);
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  const email = form[0].value;
  const password = form[1].value;
  if(email==="admin@gmail.com"&&password==="admin1234"){
    window.location.href="admin.html";
    localStorage.setItem("adminState",true);
  }else{
  const index = users.findIndex((element)=>element.email===email && element.password===password);
    if(index===-1){
    Toastify({
    text: "Enter valid credentials",
    className: "info",
    style: {
    background: "linear-gradient(to right, #67C6E3, #67C6E3)",
    color:"black"
    }
    }).showToast();
    }
    else{
    localStorage.setItem(`userLogin`,true);
    window.location.href=`user.html?id=${index}`;
    }
  }
});
