alert("Please note down the otp : "  +Math.floor(Math.random()*999999));

function otpRegister(){
    event.preventDefault();
    console.log("otpRegistered");
    window.location.href="../pages/gif.html"
}