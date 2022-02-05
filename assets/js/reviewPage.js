let reviews = [];

function OnPageLoad() {
  let store = localStorage.getItem("ratings");
  let reviewers = JSON.parse(store);

  if (reviewers == null) {
    reviews = [];
  } else {
    reviews = reviewers;
  }
}

function init() {
  // for displaying loginers name in the reviewer's name
  let getitem = JSON.parse(localStorage.getItem("loginersname"));

  let reviewername = getitem.username;
  document.getElementById("name").innerHTML = reviewername;

  // for displaying today's date in the date field
  let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let date = new Date().getDate();
  let mon = month[new Date().getMonth()];
  let year = new Date().getFullYear();
  document.getElementById("date").innerHTML = year + "-" + mon + "-" + date;
}

function storing(event) {
  event.preventDefault();

  // Get Form fields
  let getitem = JSON.parse(localStorage.getItem("loginersname"));
  let reviewername = getitem.username;
  document.getElementById("name").innerHTML = reviewername;

  //details to be uploaded
  let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let date = new Date().getDate();
  let mon = month[new Date().getMonth()];
  let year = new Date().getFullYear();
  let feedback = document.getElementById("feedback").value;
  let rstar = document.getElementById("decorate").innerHTML;


  // Store the details in an object
  const Feedback = {
    "name": reviewername,
    "review": rstar,
    "feedback": feedback,
    "date": year + "-" + mon + "-" + date,
  }

  // Business Validation (that prevents multiple reviews by a same person)
  
  let alreadyExists = exist();
  console.log(alreadyExists);

  if (alreadyExists) {
    alert("you have already submitted your response");
    window.location.href="/disneyholidayapp-ui/pages/disneyFrontPage.html"
  } else {
    // Add items to the 1st index
    reviews.unshift(Feedback);

    // store the ratings
    localStorage.setItem("ratings", JSON.stringify(reviews)); 
    // redirect to 
    window.location.href = "/disneyholidayapp-ui/pages/reviewDisplayPage.html";
  }
}           
// function that prevents multiple reviews by a same person. 
function exist() {
  let getitem = JSON.parse(localStorage.getItem("loginersname"));
  let reviewername = getitem.username;
  let userList = JSON.parse(localStorage.getItem("ratings"));
  let exists = false;

  if (userList == null) {
        exists = false;
      }else{  
        for (let i of userList) {
        let names = i.name;
        if (reviewername == names) {
          exists = true;
        }
      }
      }
  return exists;
}
// function for making checked the review stars.
function reviewStar() {
  let star = "";
  for (let i = 0; i < 5; i++) {

    star += "<span class='fa fa-star'></span>"

  }
  document.getElementById("decorate").innerHTML = star;
  let element = document.getElementById("decorate")
  let len = element.getElementsByTagName("span").length;
  let lenelement = "";
  for (let j = 0; j < len; j++) {
    lenelement = ""
    document.getElementsByClassName("fa-star")[j].onclick = function () {
      console.log(j);
      for (let e = j; e < len; e++) {
        document.getElementsByClassName("fa-star")[e].classList.remove("checked");
      }
      for (let i = 0; i <= j; i++) {
        document.getElementsByClassName("fa-star")[i].classList.add("checked");
        lenelement = "Prasanna"
      }
      lenelement = lenelement + j;
    }
  }
}
init();
reviewStar();
OnPageLoad();