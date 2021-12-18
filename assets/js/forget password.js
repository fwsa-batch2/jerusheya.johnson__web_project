let forgetpassword=[];
function onPageLoad(){
  console.group("onPageLoad");
      const users = JSON.parse(localStorage.getItem('forgetor_email'));
      console.log(users);
      
      if (users==null) {
          forgetpassword = [];
      }
      else{
          forgetpassword=users;
      }
    console.groupEnd("onPageLoad");
  }
  
  function signIn() {
    event.preventDefault();
      console.group("signIn");
     
      const  email= document.getElementById("email").value.toLowerCase();
     
  
      let emaildetails = {
          "email": email
      }

     console.table(emaildetails);

    const isEmailAlreadyExist = emailValid(email);
    
      console.log(isEmailAlreadyExist);

     if (isEmailAlreadyExist) {
         forgetpassword.push(emaildetails);
         let forget = JSON.stringify(forgetpassword);
         localStorage.setItem("forgetor_email", forget);
         window.location.href = "../pages/OTP.html";
     }
     else{ 
         alert("dear customer!As you are a new user please signin");
   
     }
     let onpageload=onPageLoad();
     console.log(onpageload);
    console.groupEnd("signIn") 
   



  }
  function emailValid(current_email) {
    //  console.group("emailValid");
    const userList = JSON.parse(localStorage.getItem("registersname"));
  
    let isUsed = false;
  
    for (i = 0; i < userList.length; i++) {
  
      const user = userList[i];
      const email = user.email;
      
      if (current_email == email) {
        // console.log("current_email==email");
        isUsed = true;
        break;
      }
    }
    // console.groupEnd("emailValid");
    return isUsed;
   
  }




  onPageLoad();

  


function backToPage() {
    event.preventDefault();
    window.location.replace("../pages/Login disney.html")
}

 
