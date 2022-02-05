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
  //getting input values
  const cardholder = document.getElementById("cardholder").value;
  const cardno = document.getElementById("cardno").value;
  const exdate = document.getElementById("exdate").value;
  const cvv = document.getElementById("cvv").value;
  // creating object
  let customerDetail = {
    "cardholder": cardholder,
    "cardno": cardno,
    "exdate": exdate,
    "cvv": cvv
  }
    console.table(customerDetail);
    //pushing details into array
    paymentdetails.push(customerDetail);
    let pay = JSON.stringify(paymentdetails);
    localStorage.setItem("payment", pay);
    window.location.href = "/disneyholidayapp-ui/pages/thankyouDisney.html";
    console.groupEnd("submitHandlers") ;
}
onPageLoad();