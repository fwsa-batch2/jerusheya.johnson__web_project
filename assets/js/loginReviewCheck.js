
//function 

function isUserLoggedIn(){
let getitem=localStorage.getItem("loginersname");
if(getitem == null){
    alert("please login to submit your reviews");
    window.location.href="/disneyholidayapp-ui/pages/LoginDisney.html"
  }
}

  isUserLoggedIn();