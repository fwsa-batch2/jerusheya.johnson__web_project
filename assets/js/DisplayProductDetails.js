let storeProductDetail="";
const currentURL=window.location.search;
const URLparameter=new URLSearchParams(currentURL);
let URLname=URLparameter.get("name");
console.log(URLname);
function displayProductdetails(){
    let  getProductDetails=JSON.parse(localStorage.getItem("productdetails"));
    for(let i of getProductDetails){
     if(URLname==i.productsname)
            storeProductDetail+="<div id='div'> <a href='./../pages/DisplayProductDetail.html' class='top' id='login'><p1>Login</p1></a><img src='../assets/images/wishlist.png' alt='wishlist' width='45px' height='40px' class='top' id='wish'><img src='../assets/images/addToCart.png' alt='add to cart' width='80px' height='50px' class='top' id='addcart'> <img src='"+ i.image +"'  alt='purse2' width='42%' height='50%' class='pic'><h1 class='h1'>"+ i.productsname +"</h1><br><h2 class='h2'>"+ i.cost +"</h2><br><img class='reviewStar' id='star1' src='../assets/images/blue_star-removebg-preview.png' alt='star' width='40px' height='40px'><img class='reviewStar' id='star2' src='../assets/images/blue_star-removebg-preview.png' alt='star' width='40px' height='40px'><img class='reviewStar' id='star3' src='../assets/images/blue_star-removebg-preview.png' alt='star' width='40px' height='40px'><img class='reviewStar' id='star4' src='../assets/images/blue_star-removebg-preview.png' alt='star' width='40px' height='40px'><img class='reviewStar' id='star5' src='../assets/images/blue_star-removebg-preview.png'alt='star'width='40px'height='40px'><hr id='hr1'><pre class='pre'>"+ i.specificationDetail +"</pre> <hr id='hr2'><table class='table'><tr class='row'><th scope='row'><p1><b>Weight:</b></p1></th><td><p1>"+ i.weight +"</p1></td</tr><tr class='row'> <th scope='row'><p1><b>Country of Manufacture:</b></p1></th> <td><p1 >"+ i.country +"</p1></td></tr><tr class='row'><th><p1><b>Color:</b></p1></th><td><p1>"+ i.color +"</p1></td></tr></table><hr id='hr3'> <button id='addtocart'>Add To Cart</button><button id='addtowish'>Add To Wishlist</button></div>"
    }
    return storeProductDetail;
}

let callingDisplayProduct=displayProductdetails();
document.getElementById("div").innerHTML=callingDisplayProduct;