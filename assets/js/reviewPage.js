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

 
          
          
function storing(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let feedback = document.getElementById("feedback").value;
    let rstar=document.getElementById("decorate").innerHTML;
    let date=document.getElementById("date").value;
    let Feedback = {
        "name": name,
        "review":rstar,
        "feedback": feedback,
        "date":date
    }
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
  
      let name = i.name;
      if (current_name === name) {
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
            lenelement=j;
        }

       }

}
reviewStar();
getback();