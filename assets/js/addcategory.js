let Category=[];
function onload(){
    let store = localStorage.getItem('category');
    let users = JSON.parse(store);
    console.log(users);
    if (users == null){
        Category = []
      }else {
        Category = users;
      }
}
function addCategory(event){
    event.preventDefault();
    let image=document.getElementById("image").value;
    let categoryName=document.getElementById("categoryname").value;
    let addingCategory={
        "image":image,
        "categoryname":categoryName
    }
    console.log(addingCategory);
    Category.push(addingCategory);
    console.log(Category);
    localStorage.setItem("category",JSON.stringify(Category));
    window.location.href="/pages/shoppingzone.html"
}
onload();