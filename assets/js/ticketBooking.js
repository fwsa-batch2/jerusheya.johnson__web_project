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
  const  name = document.getElementById("name").value;
  const  number= document.getElementById("number").value;
  const  emailid= document.getElementById("email id").value;
  const  lastname= document.getElementById("lastname").value;
  const  phonenumber= document.getElementById("phonenumber").value;
  const  date= document.getElementById("date").value;
  const  allergies= document.getElementById("input1").value;
  const  yesSpecialSeat= document.getElementById("yesSpecialSeat").checked;
  const  yesHandicap= document.getElementById("yesHandicap").checked;
 

 return{
    "name": name,
    "number": number,
    "emailid":emailid,
    "lastname":lastname,
    "phonenumber":phonenumber,
    "date":date,
    "allergies":allergies,
    "yesSpecialSeat":yesSpecialSeat,
    "yesHandicap":yesHandicap,
}

 } 

 let tickets = ticket();
  
function sendEmail(event) {
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
  

  
function StorageOfdetails(event){

   event.preventDefault();

  const  name = document.getElementById("name").value;
  const  number= document.getElementById("number").value;
  const  emailid= document.getElementById("email id").value;
  const  lastname= document.getElementById("lastname").value;
  const  phonenumber= document.getElementById("phonenumber").value;
  const  date= document.getElementById("date").value;
  const  allergies= document.getElementById("input1").value;
  const  yesSpecialSeat= document.getElementById("yesSpecialSeat").checked;
  const  yesHandicap= document.getElementById("yesHandicap").checked;

 let passengerTicket={
    "name": name,
    "number": number,
    "emailid":emailid,
    "lastname":lastname,
    "phonenumber":phonenumber,
    "date":date,
    "allergies":allergies,
    "yesSpecialSeat":yesSpecialSeat,
    "yesHandicap":yesHandicap
}
  console.table(passengerTicket);
  ticketbooking.push(passengerTicket);
  localStorage.setItem("ticketdetails", JSON.stringify(ticketbooking));
  window.location.href = "../pages/payment_page.html";
}

onPageLoad();