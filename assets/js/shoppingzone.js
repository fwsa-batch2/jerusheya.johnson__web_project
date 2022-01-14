function myFunction() {
    // Declare variables
    
    let input = document.getElementById('myInput');
    let search = input.value.toUpperCase();
    let ul = document.getElementById("myUL");
    let li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(search) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }




function wallets(){
    window.location.href="../pages/wallets.html"
}
function hairband(){
    window.location.href="../pages/hairAccessories.html"
}
function lunchbox(){
    window.location.href="../pages/lunchbox.html"
}
function Tshirt(){
    window.location.href="../pages/tshirts.html"
}
function handbag(){
    window.location.href="../pages/Handbag.html"
}
function shoulderbag(){
    window.location.href="../pages/Schoolbags.html"
}
function waterbottle(){
    window.location.href="../pages/waterbottles.html"
}
function rockerchair(){
    window.location.href="../pages/rockerchair.html"
}
function portabledesk(){
    window.location.href="../pages/portabletable.html"
}
function clutch(){
    window.location.href="../pages/clutches.html"
}
function mug(){
    window.location.href="../pages/mug.html"
}
function plates(){
    window.location.href="../pages/plates.html"
}
function blanket(){
    window.location.href="../pages/blanket.html"
}
function watches(){
    window.location.href="../pages/watches.html"
}
function phonecover(){
    window.location.href="../pages/phonecover.html"
}

