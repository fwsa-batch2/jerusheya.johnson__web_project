let userList = [];
// this function prevents from making the array null
function onPageLoad() {
    console.group("onpageload");
    const store = localStorage.getItem('registersname');
    let users = JSON.parse(store);
    console.log(users);
    if (users == null){
        userList = []
      }else {
        userList = users;
      }
      console.groupEnd("onpageload");
}
// this is the main function
function register(event) {
    event.preventDefault();
    console.group("login");
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value.toLowerCase();
    const password = document.getElementById("password").value;
    
// object
    let customerDetail = {
        "username": username,
        "email": email,
        "password": password,
       }

    console.log(customerDetail);
// function to check whether the email is already registered or not 
    let  isEmailAlreadyExist = emailValid(email);
    console.log(isEmailAlreadyExist);

    if(isEmailAlreadyExist){
        alert("Email alreay exist or enter a valid email");
        return ;
    }


 // function to check whether the password and confirm password  are equal  
    let isMatch = checkPassword();
     console.log(isMatch) ;  
    if (isMatch) {
        console.log()
        userList.push(customerDetail);
        localStorage.setItem("registersname", JSON.stringify(userList));
        window.location.href = "./../pages/LoginDisney.html"
    } 
    else {
        alert("please check your password")
    }

   console.groupEnd("login");

}


//to show password and confirm password onclick the checkbox
function checkPassword() {
    console.group("checkpassword");
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("cpassword").value;
    
    if (password == confirmPassword) {
        console.log("password matched");
        console.groupEnd("checkpassword");
        return true;
    }
    
    else {
        return false;
    }
   
}



//to check whether the entered email is already registered
function emailValid(current_email) {
    console.group("emailvalid");
    let usernames = JSON.parse(localStorage.getItem("registersname"));

    let isUsed = false;

if(usernames){

    for (let i of userList) {
      
        let email = i.email;

        if (current_email == email) {
            isUsed = true;
            console.log(isUsed);
            break;
        }
    }
    console.group("emailvalid");
   return isUsed;
}
}

//to show password and confirm password onclick the checkbox
function showPassword(){
    console.group("showpassword");
    let checkBox=document.getElementById("checkbox");
    if(checkBox.checked){
        document.getElementById("password").type="text";
        document.getElementById("cpassword").type="text";
    }
    else{
        document.getElementById("password").type="password";
        document.getElementById("cpassword").type="password";
    }
    console.groupEnd("showpassword");

}
onPageLoad();
