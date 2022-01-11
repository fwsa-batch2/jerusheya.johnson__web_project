
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
    for( let j=0;j<array1.length;j++){
        if(input2==array1[j]){
            window.location.href="/pages/hairAccessories.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array2=["lunchboxes","lunchbox","boxes","lunch","breakfast bag","lunchbag","LUNCHBOX","LUNCHBAGS"];
    for( let k=0;k<array2.length;k++){
        if(input2==array2[k]){
            window.location.href="/pages/lunchbox.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array3=["T-SHIRT","TSHIRT","tshirt","shirts","shirt","boys dress"];
    for( let l=0;l<array3.length;l++){
        if(input2==array3[l]){
            window.location.href="/pages/tshirts.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array4=["handbags","handbag","HANDBAG","Handbag"];
    for( let m=0;m<array4.length;m++){
        if(input2==array4[m]){
            window.location.href="/pages/Handbag.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array5=["schoolbags","schoolbags for kids","bags","Bags","School bags"];
    for( let n=0;n<array5.length;n++){
        if(input2==array5[n]){
            window.location.href="/pages/Schoolbags.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array6=["waterbottles","waterbottle","bottles","bottle","WATERBOTTLES","Waterbottles"];
    for( let o=0;o<array6.length;o++){
        if(input2==array6[0]){
            window.location.href="/pages/waterbottles.html"
        }
        break;
    }
    let array7=["rockerchair","babieschair","rockingchair","chairs for kids","chairs"];
    for( let p=0;p<array7.length;p++){
        if(input2==array7[i]){
            window.location.href="/pages/rockerchair.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array8=["portabledesk","portable desks","tables for kids","table for kids","tables","desks"];
    for( let q=0;q<array8.length;q++){
        if(input2==array8[q]){
            window.location.href="/pages/Schoolbags.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array9=["women clutches","clutches","glass purses","leather purses","style purses"];
    for( let r=0;r<array9.length;r++){
        if(input2==array9[i]){
            window.location.href="/pages/clutches.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array10=["mug","float mug","cup","mugs","cups","disney character mugs"];
    for( let s=0;s<array10.length;s++){
        if(input2==array10[i]){
            window.location.href="/pages/mug.html"
        }
        else{alert("no informations found")}
    }
    let array11=["plates","disney printed plates","disney characters printed plates","plates for kids","bowls","bowl"];
    for( let t=0;t<array11.length;t++){
        if(input2==array11[i]){
            window.location.href="/pages/plates.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array12=["blankets","bedsheets","blanket","bedsheet","shalls"];
    for( let u=0;u<array12.length;u++){
        if(input2==array12[i]){
            window.location.href="/pages/blanket.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array13=["watches","watch","boys watch","girls watch"];
    for( let v=0;v<array13.length;v++){
        if(input2==array13[i]){
            window.location.href="/pages/watches.html"
        }
        else{alert("no informations found")}
        break;
    }
    let array14=["mobilecovers","mobilecover","mobile cover","phonecover","phonecovers","backcovers for mobile","mobilebackcovers","mobile backcovers"];
    for( let w=0;w<array14.length;w++){
        if(input2==array14[w]){
            window.location.href="/pages/phonecover.html"
        }
        else{alert("no informations found")}
        break;
    }
}




