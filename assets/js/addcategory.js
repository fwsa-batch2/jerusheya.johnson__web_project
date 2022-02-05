let categories=[];
function onload(){
    const store = localStorage.getItem('category');
    let categoryDetails = JSON.parse(store);
    console.log(categoryDetails);
    if (categoryDetails == null){
        categories = []
      }else {
        categories = categoryDetails;
      }
}
function addCategory(event){
    event.preventDefault();
    console.group("addCategory");
    //getting input values
    const image=document.getElementById("image").value;
    const categoryName=document.getElementById("categoryname").value;
    //creating obj    
    let addingCategory={
        "image":image,
        "categoryname":categoryName
    }
    console.table(addingCategory);
    //pushing into array categories
    categories.push(addingCategory);
    console.log(categories);
    //storing in localstorage
    localStorage.setItem("category",JSON.stringify(categories));
    //redirection
    window.location.href="/disneyholidayapp-ui/pages/shoppingzone.html";
    console.groupEnd("addCategory");
}
onload();