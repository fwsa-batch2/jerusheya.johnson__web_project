let ticketbooking=[];
function onPageLoad(){
    
      let users = JSON.parse(localStorage.getItem('ticketdetails'));
      if (users != null) {
          ticketbooking = users;
      }
  }
  
  function submitHandlers() {
      event.preventDefault();
      console.group("submitHandler");
      let  name = document.getElementById("name").value;
      let  number= document.getElementById("number").value;
      let  emailid= document.getElementById("email id").value;
      let  password= document.getElementById("password").value;
      let  lastname= document.getElementById("lastname").value;
      let  phonenumber= document.getElementById("phone number").value;
      let  place= document.getElementById("place").value;
      let  date= document.getElementById("date").value;
      let  allergies= document.getElementById("input1").value;
      let  yesSpecialSeat= document.getElementById("yesSpecialSeat").value;
      let  noSpecialSeat= document.getElementById("noSpecialSeat").value;
      let  yesHandicap= document.getElementById("yesHandicap").value;
      let  noHandicap= document.getElementById("noHandicap").value;
  
      let ticketdetails = {
          "name": name,
          "number": number,
          "emailid":emailid,
          "password":password,
          "lastname":lastname,
          "phonenumber":phonenumber,
          "place":place,
          "date":date,
          "allergies":allergies,
          "yesSpecialSeat":yesSpecialSeat,
          "noSpecialSeat":noSpecialSeat,
          "yesHandicap":yesHandicap,
          "noHandicap":noHandicap
      }
      console.log(ticketdetails);
      ticketbooking.push(ticketdetails);
      localStorage.setItem("ticketdetails", JSON.stringify(ticketbooking));
      console.groupEnd("submitHandler");
      window.location.href = "../pages/thankyou disney.html";

  }
  

  onPageLoad();
