let ticketbooking=[];
function onPageLoad(){
      let users = JSON.parse(localStorage.getItem('ticketdetails'));
      if (users == null){
        ticketbooking = [];
      }else {
        ticketbooking = users;
      }
  }
 
  function ticket(){
  
  let  name = document.getElementById("name").value;
  let  number= document.getElementById("number").value;
  let  emailid= document.getElementById("email id").value;
  let  lastname= document.getElementById("lastname").value;
  let  phonenumber= document.getElementById("phone number").value;
  let  date= document.getElementById("date").value;
  let  allergies= document.getElementById("input1").value;
  let  yesSpecialSeat= document.getElementById("yesSpecialSeat").value;
  let  noSpecialSeat= document.getElementById("noSpecialSeat").value;
  let  yesHandicap= document.getElementById("yesHandicap").value;
  let  noHandicap= document.getElementById("noHandicap").value;

 let passengerTicket={
    "name": name,
    "number": number,
    "emailid":emailid,
    "lastname":lastname,
    "phonenumber":phonenumber,
    "date":date,
    "allergies":allergies,
    "yesSpecialSeat":yesSpecialSeat,
    "noSpecialSeat":noSpecialSeat,
    "yesHandicap":yesHandicap,
    "noHandicap":noHandicap
}
return passengerTicket;
 } 

 const tickets = ticket();
  
function sendEmail() {
  event.preventDefault();
 


 let  email= document.getElementById("email id").value.toLowerCase();
  Email.send({
       Host : "smtp.gmail.com",
       Username : "disneyholidayhype@gmail.com",
       Password : "jerudisney@2002",
       To : email,
       From : "disneyholidayhype@gmail.com",
       Subject : "This is your ticket details",
       Body : tickets,
   }).then(
     message => alert('Mail Delivered successfully!')
   );
   
     
}
  

  
function StorageOfdetails(){

   event.preventDefault();

  let  name = document.getElementById("name").value;
  let  number= document.getElementById("number").value;
  let  emailid= document.getElementById("email id").value;
  let  lastname= document.getElementById("lastname").value;
  let  phonenumber= document.getElementById("phone number").value;
  let  date= document.getElementById("date").value;
  let  allergies= document.getElementById("input1").value;
  let  yesSpecialSeat= document.getElementById("yesSpecialSeat").value;
  let  noSpecialSeat= document.getElementById("noSpecialSeat").value;
  let  yesHandicap= document.getElementById("yesHandicap").value;
  let  noHandicap= document.getElementById("noHandicap").value;

 let passengerTicket={
    "name": name,
    "number": number,
    "emailid":emailid,
    "lastname":lastname,
    "phonenumber":phonenumber,
    "date":date,
    "allergies":allergies,
    "yesSpecialSeat":yesSpecialSeat,
    "noSpecialSeat":noSpecialSeat,
    "yesHandicap":yesHandicap,
    "noHandicap":noHandicap
}
  console.table(passengerTicket);
  ticketbooking.push(passengerTicket);
  localStorage.setItem("ticketdetails", JSON.stringify(ticketbooking));
  window.location.href = "../pages/payment_page.html";
}

onPageLoad();