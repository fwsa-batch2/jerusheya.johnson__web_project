let ticketbooking=[];
function onPageLoad(){
      let users = JSON.parse(localStorage.getItem('ticketdetails'));
      if (users == null){
        ticketbooking = [];
      }else {
        ticketbooking = users;
      }
  }
  
  function submitHandlers() {
      event.preventDefault();
      console.group("submitHandler");
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
  
      let ticketdetails;
      for (let j = 0; j < 10; j++) {
          ticketdetails = {
            "name": name + j,
            "number": number +j,
            "emailid":emailid + j,
            "lastname":lastname + j,
          "phonenumber":phonenumber + j,
          "date":date + j,
          "allergies":allergies + j,
          "yesSpecialSeat":yesSpecialSeat + j,
          "noSpecialSeat":noSpecialSeat + j,
          "yesHandicap":yesHandicap + j,
          "noHandicap":noHandicap + j,
          };
        };
          var table = document.getElementById("myTable");
          var row = table.insertRow(j);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          var cell7 = row.insertCell(6);
          var cell8 = row.insertCell(7);
          var cell9 = row.insertCell(8);
          var cell10 = row.insertCell(9);
          var cell11 = row.insertCell(10);
         

          cell1.innerHTML = ticketdetails.name,
          cell2.innerHTML = ticketdetails.number,
          cell3.innerHTML = ticketdetails.emailid;
          cell4.innerHTML = ticketdetails.lastname,
          cell5.innerHTML = ticketdetails.phonenumber,
          cell6.innerHTML = ticketdetails.date;
          cell7.innerHTML = ticketdetails.allergies,
          cell8.innerHTML = ticketdetails.yesSpecialSeat,
          cell9.innerHTML = ticketdetails.noSpecialSeat;
          cell10.innerHTML = ticketdetails.yesHandicap,
          cell11.innerHTML = ticketdetails.noHandicap,
         
     
      // let ticketdetails = {
      //     "name": name,
      //     "number": number,
      //     "emailid":emailid,
      //     "lastname":lastname,
      //     "phonenumber":phonenumber,
      //     "date":date,
      //     "allergies":allergies,
      //     "yesSpecialSeat":yesSpecialSeat,
      //     "noSpecialSeat":noSpecialSeat,
      //     "yesHandicap":yesHandicap,
      //     "noHandicap":noHandicap
      // }
     
      console.table(ticketdetails);
      ticketbooking.push(ticketdetails);
      localStorage.setItem("ticketdetails", JSON.stringify(ticketbooking));
      console.groupEnd("submitHandler");
      sendEmail();
      window.location.href = "../pages/thankyou disney.html";


  }
  
  
  onPageLoad();

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
  

  
