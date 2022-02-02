let storeData="";

function displayCategory(){
    let  getCategoryData=JSON.parse(localStorage.getItem("category"));
    for(let i of getCategoryData){
        storeData+="<a href='/disneyholidayapp-ui/pages/Products.html?name="+ i.categoryname+"'><div id='updateCategory'  class='updateCategory1'> <img src='"+ i.image+"'class='Shoppingimages' alt='image'width='280px'height='280px'><h2 class='id'>"+ i.categoryname+"</h2></div></a>"
    }
    return storeData;
}
let callingDisplayCategory=displayCategory();
document.getElementById("updateCategory").innerHTML=callingDisplayCategory;

