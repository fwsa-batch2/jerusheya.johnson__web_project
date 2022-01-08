let review = [];
function getback() {
    let details = JSON.parse(localStorage.getItem("Ratings"));
    if (details) {
        review = details;
    }
}
let star1 = "⭐";
let star2 = "⭐⭐";
let star3 = "⭐⭐⭐";
let star4 = "⭐⭐⭐⭐";
let star5 = "⭐⭐⭐⭐⭐";
function change() {
    document.getElementById("change").innerHTML = "⭐";
    store(star1)
}
function change1() {
    document.getElementById("change1").innerHTML = "⭐";
    store(star2);
}
function change2() {
     document.getElementById("change2").innerHTML = "⭐";
    store(star3);
}
function change3() {
    document.getElementById("change3").innerHTML = "⭐";
    store(star4);
}
function change4() {
    document.getElementById("change4").innerHTML = "⭐";
    store(star5);
}
function store(item_id) {
    switch (item_id) {
        case star1:
            review.push(star1);
            break;
        case star2:
            review.push(star2);
            break;
        case star3:
            review.push(star3);
            break;
        case star4:
            review.push(star4);
            break;
        case star5:
            review.push(star5);
            break;
    }
}
function storing(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let feedback = document.getElementById("feedback").value;
    let Feedback = {
        "Name": name,
        "comments": feedback
    }
    review.push(Feedback);
    localStorage.setItem("Ratings", JSON.stringify(review));
    window.location.href="../../pages/reviewDisplayPage.html";
}
let notes="";
function Reviewing() {
    let details = JSON.parse(localStorage.getItem("Ratings"));
    for (let i of details) {
            let rate = details.length;
            let j=rate-2;
            console.log(details[j]);
            let a=details[j];
                let document =`<div class="display reviews">
                <h2>Name : ${i.Name}</h2>
                <h2> Ratings :${a}</h2>
                <h2> Feedback :${i.comments}</h2>
            </div>`
            notes=notes+document;
    }
            let display=document.getElementById("get")
            display.innerHTML=notes +'<br>';
}