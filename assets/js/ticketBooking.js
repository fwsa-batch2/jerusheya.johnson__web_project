let ticketbooking=[];
function onPageLoad(){
      let users = JSON.parse(localStorage.getItem('ticketdetails'));
      if (users == null){
        ticketbooking = [];
      }else {
        ticketbooking = users;
      }
  }
 
  function bookTicket(){
    // getting input values
  const  name = document.getElementById("finput").value;
  const  number= document.getElementById("linput").value;
  const  emailid= document.getElementById("inputmail").value;
  const  lastname= document.getElementById("inputcell").value;
  const  phonenumber= document.getElementById("dateofjurney").value;
  const  date= document.getElementById("adults").value;
  const  allergies= document.getElementById("child").value;
  const  yesSpecialSeat= document.getElementById("check1").checked;
  const  yesHandicap= document.getElementById("check2").checked;

 
 //stores in an object
 let passengerTicket={
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

 // pushing into array and storing it in local Storage
  console.table(passengerTicket);
  ticketbooking.push(passengerTicket);
  localStorage.setItem("ticketdetails", JSON.stringify(ticketbooking));
  window.location.href = "/disneyholidayapp-ui/pages/payment_page.html";
}

onPageLoad();