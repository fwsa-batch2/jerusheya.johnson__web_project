let userdetails=[];
function onPageLoad(){
      const users = JSON.parse(localStorage.getItem('forgetpassword'));
      if (users) {
          userdetails = users;
      }
  }
  
  function signIn() {
      event.preventDefault();
      const  email= document.getElementById("email").value;
     
  
      const customerDetail = {
          "email": email
      }
      userdetails.push(customerDetail);
      localStorage.setItem("forgetpassword", JSON.stringify(userdetails));

      window.location.href = "../pages/disney front page.html";
  }
  
   function backToPage() {
    event.preventDefault();
    window.location.replace("../pages/Login disney.html")
}

  onPageLoad();
