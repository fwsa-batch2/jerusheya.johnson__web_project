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
    let addCategory={
        "image":image,
        "categoryname":categoryName
    }
    console.log(addCategory);
    Category.push(addCategory);
    console.log(Category);
    localStorage.setItem("category",JSON.stringify(Category));
    window.location.href="/pages/shoppingzone.html"
}
onload();