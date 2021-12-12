let userdetails = [];

function onPageLoad() {
  const users = JSON.parse(localStorage.getItem('loginersname'));
  
  if (users == null){
    userdetails = []
  }else {
    userdetails = users;
  }
}

function submitHandlers() {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;


  const customerDetail = {
    "username": username,
    "email": email
  }

  const isEmailAlreadyExist = emailValid(email);


  if (isEmailAlreadyExist) {
    userdetails.push(customerDetail);
    let login = JSON.stringify(userdetails);
    localStorage.setItem("loginersname", login);
    window.location.href = "../pages/disney front page.html";
   
   
  }
  else{ 
    alert("dear customer!As you are a new user please signin");
   
  }
 console.log(userdetails);
}



function emailValid(current_email) {

  const userList = JSON.parse(localStorage.getItem("registersname"));

  let isUsed = false;

  for (i = 0; i < userList.length; i++) {

    const user = userList[i];
    const email = user.email;

    if (current_email == email) {
      isUsed = true;
      break;
    }
  }

  return isUsed;
}
onPageLoad();


