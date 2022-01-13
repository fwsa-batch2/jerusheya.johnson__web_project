let storeData="";

function displayCategory(){
    let  getCategoryData=JSON.parse(localStorage.getItem("category"));
    for(let i of getCategoryData){
        storeData+="<div id='updateCategory'  class='updateCategory1'> <img src='"+ i.image+"'class='ShoppingImages' alt='image'width='280px'height='280px'><h2 class='id'>"+ i.categoryname+"</h2></div>"
    }
    return storeData;
}
let callingDisplayCategory=displayCategory();
document.getElementById("updateCategory").innerHTML=callingDisplayCategory;
