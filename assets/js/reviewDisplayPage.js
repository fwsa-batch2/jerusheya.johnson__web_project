function OnReview(){
    //to display review 
    let inputvalue=localStorage.getItem("ratings");
    let sting=JSON.parse(inputvalue);
    console.log(sting);
    let reviewlen="";
    let len=sting.length;
    for(let i=0;i<len;i++){
        let create="<div class='reviews'><h2>Name-"+sting[i].name+"</h2><div id='stars'>"+sting[i].review+"</div><h2>Date-"+sting[i].date+"</h2><h2>Feedback-"+sting[i].feedback+"</h2></div>"
        reviewlen=reviewlen+create;}
    document.getElementById("get").innerHTML=reviewlen;
}
OnReview();

function redirect(){
    //redirect to review page
    window.location.href="/disneyholidayapp-ui/pages/review.html"
}