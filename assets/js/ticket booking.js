let ticketbooking=[];
function onPageLoad(){
      let users = JSON.parse(localStorage.getItem('loginersname'));
      if (users) {
          ticketbooking = users;
      }
  }
  
  function submitHandlers() {
      event.preventDefault();
      let  name = document.getElementById("name").value;
      let  number= document.getElementById("number").value;
      let  emailid= document.getElementById("email Id").value;
      let  password= document.getElementById("password").value;
      let  number= document.getElementById("lastname").value;
      let  emailid= document.getElementById("phone number").value;
      let  password= document.getElementById("place").value;
      let  password= document.getElementById("place").value;
  
      let customerDetail = {
          "username": username,
          "email": email
      }
      userdetails.push(customerDetail);
      localStorage.setItem("loginersname", JSON.stringify(userdetails));
      window.location.href = "../pages/disney front page.html";
  }
  function welcomeBox(){
      alert("welcome to our site!");
   }

  onPageLoad();
