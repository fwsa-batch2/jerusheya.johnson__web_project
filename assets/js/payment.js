let paymentdetails = [];

function onPageLoad() {
  console.group("onPageLoad");
  let users = JSON.parse(localStorage.getItem('payment'));
  console.log(users)
  if (users == null){
    paymentdetails = []
  }else {
    paymentdetails = users;
  }
  console.groupEnd("onPageLoad")
}

function submitHandlers(event) {
  event.preventDefault();
  console.group("submitHandlers");
  let cardholder = document.getElementById("cardholder").value;
  let cardno = document.getElementById("cardno").value;
  let exdate = document.getElementById("exdate").value;
  let cvv = document.getElementById("cvv").value;

  let customerDetail = {
    "cardholder": cardholder,
    "cardno": cardno,
    "exdate": exdate,
    "cvv": cvv
  }
    console.table(customerDetail);
    paymentdetails.push(customerDetail);
    let pay = JSON.stringify(paymentdetails);
    localStorage.setItem("payment", pay);
    window.location.href = "../pages/thankyou disney.html";
    console.groupEnd("submitHandlers") ;
}
onPageLoad();