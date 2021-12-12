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
      const  email= document.getElementById("email").value;
     
  
      let emaildetails = {
          "email": email
      }
      forgetpassword.push(emaildetails);
      let forget=JSON.stringify(forgetpassword);
      localStorage.setItem("forgetor_email", forget);
      window.location.href = "../pages/disney front page.html";
  }
  
   function backToPage() {
    event.preventDefault();
    window.location.replace("../pages/Login disney.html")
}

  onPageLoad();
