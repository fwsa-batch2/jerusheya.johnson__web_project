let review = [];
function getback() {
        let store = localStorage.getItem("Ratings");
        let users = JSON.parse(store);
        console.log(users);
        if (users == null){
           review = [];
        }else {
        review = users;
        }
    
}

let getitem=JSON.parse(localStorage.getItem("loginersname"));
let reviewername=getitem.username;

let name = document.getElementById("name").innerHTML=reviewername;
let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let date = new Date().getDate(); 
let mon = month[new Date().getMonth()];
let year = new Date().getFullYear();
document.getElementById("date").innerHTML=date + "-" + mon + "-" + year;
console.log(getitem);


function storing(event) {
    event.preventDefault();
    let feedback = document.getElementById("feedback").value;
    let rstar=document.getElementById("decorate").innerHTML;
    
    console.log(date + "-" + mon + "-" + year);
    let Feedback = {
      "name": reviewername,
      "review":rstar,
      "feedback": feedback,
      "date":date + "-" + mon + "-" + year,
  }
    let name = document.getElementById("name").innerHTML=reviewername;
    let alreadyExists=exist(name);
    if(alreadyExists){
      alert("you have already submitted your response")
  }
    else{
    review.unshift(Feedback);
    localStorage.setItem("Ratings", JSON.stringify(review));
    window.location.href="../pages/reviewDisplayPage.html";
    }
}

function exist(current_name){
  let userList = JSON.parse(localStorage.getItem("Ratings"));
  let isUsed = false;
    for (let i of userList) {
  
      let names = i.name;
      if (current_name === names) {
        isUsed = true;
        break;
      }
    }
    return isUsed;
  }

function reviewStar(){
    let star="";
      for(let i=0;i<5;i++){
        let create = "<span class='fa fa-star'></span>"
        star = star +create;
       
      }
      document.getElementById("decorate").innerHTML=star;
      let element = document.getElementById("decorate")
       let len = element.getElementsByTagName("span").length;
       let lenelement="";
       for( let j=0;j<len;j++){
            document.getElementsByClassName("fa-star")[j].onclick=function (){  
            document.getElementsByClassName("fa-star")[j].classList.toggle("checked");
           lenelement=lenelement+j;
        }

       }

}
reviewStar();
getback();