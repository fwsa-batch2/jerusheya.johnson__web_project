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
  const cardholder = document.getElementById("cardholder").value;
  const cardno = document.getElementById("cardno").value;
  const exdate = document.getElementById("exdate").value;
  const cvv = document.getElementById("cvv").value;

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
    window.location.href = "../pages/thankyouDisney.html";
    console.groupEnd("submitHandlers") ;
}
onPageLoad();