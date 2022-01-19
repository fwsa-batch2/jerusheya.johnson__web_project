
function submitHandlers(event) {
  event.preventDefault();
  console.group("submitHandlers");
  let email = document.getElementById("email").value.toLowerCase();
  let password = document.getElementById("password").value;

  let customerDetail = {};
  let usernames=JSON.parse(localStorage.getItem("registersname"));
  for( let i of usernames){
    if(email==i.email){
      customerDetail=i;
      break;
    }
   
  }

  console.table(customerDetail);
  let isEmailAlreadyExist = useremailValid(email,password);

  console.log(isEmailAlreadyExist);
  if (isEmailAlreadyExist) {
    let login = JSON.stringify(customerDetail);
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

function logOut(event){
  event.preventDefault();
  localStorage.removeItem("loginersname");
  alert("you have been logged out")
}