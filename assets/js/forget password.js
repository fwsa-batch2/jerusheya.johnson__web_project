let forgetpassword=[];
function onPageLoad(){
      const users = JSON.parse(localStorage.getItem('forgetor_email'));
      if (users==null) {
          forgetpassword = [];
      }
      else{
          forgetpassword=users;
      }
  }
  
  function signIn() {
      event.preventDefault();
      const  email= document.getElementById("email").value.toLowerCase();
     
  
      let emaildetails = {
          "email": email
      }



    const isEmailAlreadyExist = emailValid(email);


     if (isEmailAlreadyExist) {
         forgetpassword.push(emaildetails);
         let forget = JSON.stringify(forgetpassword);
         localStorage.setItem("forgetor_email", forget);
         window.location.href = "../pages/disney front page.html";
   
   
     }
     else{ 
         alert("dear customer!As you are a new user please signin");
   
     }
     
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







function backToPage() {
    event.preventDefault();
    window.location.replace("../pages/Login disney.html")
}

 
