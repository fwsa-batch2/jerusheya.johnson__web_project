let userdetails = [];

function onPageLoad() {
  let users = JSON.parse(localStorage.getItem('loginersname'));
  
  if (users == null){
    userdetails = []
  }else {
    userdetails = users;
  }
}

function submitHandlers() {
  event.preventDefault();
  let email = document.getElementById("email").value.toLowerCase();
  let password = document.getElementById("password").value;


  let customerDetail = {
    "email": email,
    "password": password
  }

  const isEmailAlreadyExist = useremailValid(email,password);


  if (isEmailAlreadyExist) {
    userdetails.push(customerDetail);
    let login = JSON.stringify(userdetails);
    localStorage.setItem("loginersname", login);
    window.location.href = "../pages/disney front page.html";
   
   
  }
  else{ 
   
    alert("dear customer!As you are a new user please signin");
    return;
  }
    
  


}



function useremailValid(current_email,current_password) {
  event.preventDefault();
  let userList = JSON.parse(localStorage.getItem("registersname"));

  let isUsed = false;

  for (i = 0; i < userList.length; i++) {

    let user = userList[i];
    let email = user.email;
    let password =user.password;
    if (current_password === password && current_email === email) {
      isUsed = true;
      break;
    }
  }

  return isUsed;
}

onPageLoad();


