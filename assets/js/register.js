let userList = [];

function onPageLoad() {
    let store = localStorage.getItem('registersname');
    let users = JSON.parse(store);
    if (users == null){
        userList = []
      }else {
        userList = users;
      }
    
}

function loginAlert() {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value.toLowerCase();
    let password = document.getElementById("password").value;
    

    let customerDetail = {
        "username": username,
        "email": email,
        "password": password,
       }

    
   
    const isEmailAlreadyExist = emailValid(email);


    if(isEmailAlreadyExist){
        alert("Email alreay exist or enter a valid email");
        return ;
    }
    
    const isMatch = checkPassword();
        
    if (isMatch) {
        console.log()
        userList.push(customerDetail);
        localStorage.setItem("registersname", JSON.stringify(userList));
        window.location.href = "../pages/disney front page.html"
    } 
    else {
        alert("please check your password")
    }

   

}



function checkPassword() {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("cpassword").value;
    if (password == confirmPassword) {
        console.log("password matched");
        return true;
    }
    else {
        return false;
    }
}




function emailValid(current_email) {

    let usernames = JSON.parse(localStorage.getItem("registersname"));

    let isUsed = false;

if(usernames){

    for (i = 0; i < userList.length; i++) {
        let user = userList[i];
        let email = user.email;

        if (current_email == email) {
            isUsed = true;
            break;
        }
    }

   return isUsed;
}
}
function showPassword(){
    let checkBox=document.getElementById("checkbox");
    if(checkBox.checked){
        document.getElementById("password").type="text";
        document.getElementById("cpassword").type="text";
    }
    else{
        document.getElementById("password").type="password";
        document.getElementById("cpassword").type="text";
    }


}
onPageLoad();
