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

console.log(review);
function storing(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let feedback = document.getElementById("feedback").value;
    let rstar=document.getElementById("decorate").innerHTML;
    let Feedback = {
        "name": name,
        "review":rstar,
        "feedback": feedback
    }
    review.push(Feedback);
    localStorage.setItem("Ratings", JSON.stringify(review));
    window.location.href="../pages/reviewDisplayPage.html";
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
            document.getElementsByClassName("fa-star")[j].classList.toggle("checked")
            lenelement=j;
        }

       }

}
reviewStar();
getback();