
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

function search(){
    let input2=document.getElementById("search").value;
    let array=["wallets","wallet","walet","purse","pouch","pouches","POUCH","PURSE","WALLETS"];
    for( let i=0;i<array.length;i++){
        if(input2==array[i]){
            window.location.href="/pages/wallets.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array1=["hair accessories,hairbands,clips,bands,hairclips","HAIRBANDS","HAIRCLIPS"];
    for( let i=0;i<array1.length;i++){
        if(input2==array1[i]){
            window.location.href="/pages/hairAccessories.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array2=["lunchboxes","lunchbox","boxes","lunch","breakfast bag","lunchbag","LUNCHBOX","LUNCHBAGS"];
    for( let i=0;i<array2.length;i++){
        if(input2==array2[i]){
            window.location.href="/pages/lunchbox.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array3=["T-SHIRT","TSHIRT","tshirt","shirts","shirt","boys dress"];
    for( let i=0;i<array3.length;i++){
        if(input2==array3[i]){
            window.location.href="/pages/tshirts.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array4=["handbags","handbag","HANDBAG","Handbag"];
    for( let i=0;i<array4.length;i++){
        if(input2==array4[i]){
            window.location.href="/pages/Handbag.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array5=["schoolbags","schoolbags for kids","bags","Bags","School bags"];
    for( let i=0;i<array5.length;i++){
        if(input2==array5[i]){
            window.location.href="/pages/Schoolbags.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array6=["waterbottles","waterbottle","bottles","bottle","WATERBOTTLES","Waterbottles"];
    for( let i=0;i<array6.length;i++){
        if(input2==array6[i]){
            window.location.href="/pages/waterbottles.html"
        }
        break;
    }
    let array7=["rockerchair","babieschair","rockingchair","chairs for kids","chairs"];
    for( let i=0;i<array7.length;i++){
        if(input2==array7[i]){
            window.location.href="/pages/rockerchair.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array8=["portabledesk","portable desks","tables for kids","table for kids","tables","desks"];
    for( let i=0;i<array8.length;i++){
        if(input2==array8[i]){
            window.location.href="/pages/Schoolbags.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array9=["women clutches","clutches","glass purses","leather purses","style purses"];
    for( let i=0;i<array9.length;i++){
        if(input2==array9[i]){
            window.location.href="/pages/clutches.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array10=["mug","float mug","cup","mugs","cups","disney character mugs"];
    for( let i=0;i<array10.length;i++){
        if(input2==array10[i]){
            window.location.href="/pages/mug.html"
        }
        else{alert("no informations found")}
    }
    let array11=["plates","disney printed plates","disney characters printed plates","plates for kids","bowls","bowl"];
    for( let i=0;i<array11.length;i++){
        if(input2==array11[i]){
            window.location.href="/pages/plates.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array12=["blankets","bedsheets","blanket","bedsheet","shalls"];
    for( let i=0;i<array12.length;i++){
        if(input2==array12[i]){
            window.location.href="/pages/blanket.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array13=["watches","watch","boys watch","girls watch"];
    for( let i=0;i<array13.length;i++){
        if(input2==array13[i]){
            window.location.href="/pages/watches.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array14=["mobilecovers","mobilecover","mobile cover","phonecover","phonecovers","backcovers for mobile","mobilebackcovers","mobile backcovers"];
    for( let i=0;i<array14.length;i++){
        if(input2==array14[i]){
            window.location.href="/pages/phonecover.html"
        }
        else{alert("no informations found")}
        break;
    }
}




