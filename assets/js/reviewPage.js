
let reviews = [];

function OnPageLoad() {
        let store = localStorage.getItem("Ratings");
        let users = JSON.parse(store);
        console.log(users);
        if (users == null){
           reviews = [];
        }else {
        reviews = users;
        }
    
}


function  init(){

// for displaying loginers name in the reviewer's name
let getitem=JSON.parse(localStorage.getItem("loginersname"));
console.log(getitem);
let reviewername=getitem.username;
document.getElementById("name").innerHTML=reviewername;


// for displaying today's date in the date field
let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let date = new Date().getDate(); 
let mon = month[new Date().getMonth()]; 
let year = new Date().getFullYear();
document.getElementById("date").innerHTML=year + "-" + mon + "-" + date;
}


function storing(event) {
    event.preventDefault();
    let getitem=JSON.parse(localStorage.getItem("loginersname"));
console.log(getitem);
let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let date = new Date().getDate(); 
let mon = month[new Date().getMonth()]; 
let year = new Date().getFullYear();
let reviewername=getitem.username;
    // Get Form fields
    let feedback = document.getElementById("feedback").value;
    let rstar=document.getElementById("decorate").innerHTML;

    //2. Form Validation ( feedback, rating ) -> feedback =="" , rating < 0 , rating > 5    
    
    //@Todo: To add validation
    // Store the details in an object
    const Feedback = {
      "name": reviewername,
      "review":rstar,
      "feedback": feedback,
      "date":year + "-" + mon + "-" + date,
  }
  //createdDate , ratings: 4

  //date: 2021-01-20
    let name =reviewername;

    // Business Validation (that prevents multiple reviews by a same person)
    let alreadyExists=exist(name);
    if(alreadyExists){
      alert("you have already submitted your response");
      window.location.href="/disneyholidayapp-ui/pages/LoginDisney.html"
  }
    else{
      // Add items to the 1st index
    reviews.unshift(Feedback);
    // store the ratings
    localStorage.setItem("Ratings", JSON.stringify(reviews));

    // redirect to 
    window.location.href="/disneyholidayapp-ui/pages/reviewDisplayPage.html";
    }
}
// function that prevents multiple reviews by a same person.
function exist(current_name){
  let userList = JSON.parse(localStorage.getItem("Ratings"));
  let exists = false;
    for (let i of userList) {
  
      let names = i.name;
      if (current_name === names) {
        exists = true;
        break;
      }
    }
    return exists;
  }
// function for making checked the review stars.
function reviewStar(){
    let star="";
      for(let i=0;i<5;i++){

        star += "<span class='fa fa-star'></span>"
       
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
init();
reviewStar();
OnPageLoad();