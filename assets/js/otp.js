

function otpRegister(){
    event.preventDefault();
    console.log("otpRegistered");
    let otpinput=document.getElementById("otp").value;
    
    if(otpinput==otp){
    window.location.href="../pages/gif.html"}
    else{
        alert("please enter the correct OTP");
    }
}