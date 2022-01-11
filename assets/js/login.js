let userdetails = [];

function onPageLoad() {
  console.group("onPageLoad");
  let users = JSON.parse(localStorage.getItem('loginersname'));
  console.log(users)
  if (users == null){
    userdetails = []
  }else {
    userdetails = users;
  }
  console.groupEnd("onPageLoad")
}

function submitHandlers(event) {
  event.preventDefault();
  console.group("submitHandlers");
  let email = document.getElementById("email").value.toLowerCase();
  let password = document.getElementById("password").value;


  let customerDetail = {
    "email": email,
    "password": password
  }
  console.table(customerDetail);
  let isEmailAlreadyExist = useremailValid(email,password);

  console.log(isEmailAlreadyExist);
  if (isEmailAlreadyExist) {
    userdetails.push(customerDetail);
    let login = JSON.stringify(userdetails);
    localStorage.setItem("loginersname", login);
    window.location.href = "../pages/gif.html";
  }
  else{ 
   alert("dear customer!As you are a new user please signin");
   
  }
   console.groupEnd("submitHandlers") ;
 
}



function useremailValid(current_email,current_password) {
  
  console.group("useremailValid");
  let userList = JSON.parse(localStorage.getItem("registersname"));

  let isUsed = false;
  
  for (let i of userList) {

    let email = i.email;
    let password =i.password;
    if (current_password === password && current_email === email) {
      console.log("password and email already exists");
      isUsed = true;
      break;
    }
  }
  console.groupEnd("useremailValid");
  return isUsed;
}

onPageLoad();


