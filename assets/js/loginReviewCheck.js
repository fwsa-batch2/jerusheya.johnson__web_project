
//function 

function isUserLoggedIn(){
let getitem=localStorage.getItem("loginersname");
if(getitem == null){
    alert("please login to submit your reviews");
    window.location.href="./../pages/LoginDisney.html"
  }
}

  isUserLoggedIn();