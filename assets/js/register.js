let userList = [];

function onPageLoad() {
    const store = localStorage.getItem('registersname');
    const users = JSON.parse(store);
    if (users == null){
        userList = []
      }else {
        userList = users;
      }
    
}

function loginAlert() {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("cpassword").value;

    let customerDetail = {
        "username": username,
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword
    }

    const isEmailAlreadyExist = emailValid(email);


    if(isEmailAlreadyExist){
        alert("Email alreay exist");
        return ;
    }
    
    const isMatch = checkPassword();
        
    if (isMatch) {
        console.log()
        userList.push(customerDetail);
        localStorage.setItem("registersname", JSON.stringify(userList));
        window.location.href = "../pages/disney front page.html"
    } else {
        alert("please check your password")
    }

}


function checkPassword() {
    event.preventDefault();
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("cpassword").value;
    if (pass == cpass) {
        console.log("password matched");
        return true;
    }
    else {
        return false;
    }
}




function emailValid(current_email) {

    const usernames = JSON.parse(localStorage.getItem("registersname"));

    let isUsed = false;

if(usernames){

    for (i = 0; i < userList.length; i++) {
        const user = userList[i];
        const email = user.email;

        if (current_email == email) {
            isUsed = true;
            break;
        }
    }

   return isUsed;
}}
onPageLoad();
