let forgetpassword=[];
function onPageLoad(){
  console.group("onPageLoad");
      let users = JSON.parse(localStorage.getItem('forgetor_email'));
      console.log(users);
      
      if (users==null) {
          forgetpassword = [];
      }
      else{
          forgetpassword=users;
      }
    console.groupEnd("onPageLoad");
  }
  
  function signIn(event) {
    event.preventDefault();
      console.group("signIn");
     
      let  email= document.getElementById("email").value.toLowerCase();
     
  
      let emaildetails = {
          "email": email
      }

     console.table(emaildetails);

    let isEmailAlreadyExist = emailValid(email);
    
      console.log(isEmailAlreadyExist);

     if (isEmailAlreadyExist) {
         forgetpassword.push(emaildetails);
         let forget = JSON.stringify(forgetpassword);
         localStorage.setItem("forgetor_email", forget);
         sendEmail();
        window.location.href = "../pages/OTP.html";
     }
     else{ 
         alert("dear customer!As you are a new user please signin");
   
     }
    console.groupEnd("signIn") 


  }
  function emailValid(current_email) {
     console.group("emailValid");
    let userList = JSON.parse(localStorage.getItem("registersname"));
  
    let isUsed = false;
  
    for (let i = 0; i < userList.length; i++) {
  
      let  user = userList[i];
      let email = user.email;
      
      if (current_email == email) {
        console.log("current_email==email");
        isUsed = true;
        break;
      }
    }
    console.groupEnd("emailValid");
    return isUsed;
   
  }




  onPageLoad();


function random() {
  let otp=Math.floor(Math.random()*999999);
  return otp;
}
let otpentered = random();
function sendEmail(event) {
  event.preventDefault();
  let email = document.getElementById("email").value.toLowerCase();
  console.log(otpentered);
  Email.send({
       Host : "smtp.gmail.com",
       Username : "disneyholidayhype@gmail.com",
       Password : "jerudisney@2002",
       To : email,
       From : "disneyholidayhype@gmail.com",
       Subject : "This is your otp",
       Body : otpentered,
   }).then(
     message => alert('Mail Delivered successfully!')
   );
}
function submitOtp(event) {
  event.preventDefault();
  let otpFromUser = document.getElementById('otp').value;
  if (otpFromUser == otpentered){
    alert("enter new password");
    document.getElementById('password').disabled = false;
    document.getElementById('cpassword').disabled = false;
  } else{
    alert('the entered otp is invalid');
  }
}
function updatePass(event) {
  event.preventDefault();
     let currentEmail=document.getElementById("email").value;
     console.log(currentEmail);
     let emailverification = JSON.parse(localStorage.getItem("registersname"));
     console.log(emailverification);
  
    for (i = 0; i < emailverification.length; i++) {
  
      let usermail = emailverification[i];
      let gmail = usermail.email;
    

      if (currentEmail == gmail) {
        console.log(gmail);
        let password=document.getElementById("password").value;
         usermail.password = password;
         console.log(usermail.password);
         localStorage.setItem("registersname", JSON.stringify(emailverification));
         window.location.href = "../pages/gif.html"
        break;
      }
    }
    console.groupEnd("emailValid");
}
function backToPage(event) {
    event.preventDefault();
    window.location.replace("../pages/Login disney.html")
}

 
