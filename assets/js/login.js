let userdetails=[];
function onPageLoad(){
      const users = JSON.parse(localStorage.getItem('loginersname'));
      if (users) {
          userdetails = users;
      }
  }
  
  function submitHandlers() {
      event.preventDefault();
      const  username = document.getElementById("username").value;
      const  email= document.getElementById("email").value;
     
  
      const customerDetail = {
          "username": username,
          "email": email
      }

      const isEmailAlreadyExist = emailValid(email);


       if(isEmailAlreadyExist){
       
        alert("dear customer!As you are a new user please signin");
        return ;
       }
        // else{
        //   userdetails.push(userdetails);
        //   localStorage.setItem("loginersname", JSON.stringify(userdetails));
        //   window.location.href = "../pages/disney front page.html";
        // }
  }
  function emailValid(current_email) {

    const userList = JSON.parse(localStorage.getItem("usersname"));

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

  function welcomeBox(){
      alert("welcome to our site!");
   }

  onPageLoad();
