let storeProduct="";
const currentURL=window.location.search;
const URLparameter=new URLSearchParams(currentURL);
let URLname=URLparameter.get("name");
let nameInParse=typeof(URLname);
console.log(nameInParse)
let categoryHead="<div class='categoryHead'><h4>'"+ URLname+"'</h4></div>";
console.log(URLname)

function displayProduct(){
    let  getProductData=JSON.parse(localStorage.getItem("products"));
    console.log(getProductData);
    
    for(let i of getProductData){
        if(URLname==i.categoryname)
            storeProduct+="<a href='/disneyholidayapp-ui/pages/Products.html?name="+ i.productsname+"'><div id='updateProduct'  class='updateCategory1'> <img  src='"+ i.image+"'class='Shoppingimages' alt='image'width='280px'height='280px'><h2 class='id'>"+ i.productsname+"</h2><h2 class='id'>"+ i.cost+"</h2></div></a>"
       }
    return storeProduct;
}

let callingDisplayProduct=displayProduct();
console.log(callingDisplayProduct);
document.getElementById("updateProduct").innerHTML=callingDisplayProduct;
document.getElementById("categoryhead").innerHTML=categoryHead;