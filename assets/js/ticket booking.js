let ticketbooking=[];
function onPageLoad(){
      const users = JSON.parse(localStorage.getItem('loginersname'));
      if (users) {
          ticketbooking = users;
      }
  }
  
  function submitHandlers() {
      event.preventDefault();
      const  name = document.getElementById("name").value;
      const  number= document.getElementById("number").value;
      const  emailid= document.getElementById("email Id").value;
      const  password= document.getElementById("password").value;
      const  number= document.getElementById("lastname").value;
      const  emailid= document.getElementById("phone number").value;
      const  password= document.getElementById("place").value;
      const  password= document.getElementById("place").value;
  
      const customerDetail = {
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
