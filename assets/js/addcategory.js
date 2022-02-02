let Category=[];
function onload(){
    const store = localStorage.getItem('category');
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
    console.group("addCategory");
    const image=document.getElementById("image").value;
    const categoryName=document.getElementById("categoryname").value;
    let addingCategory={
        "image":image,
        "categoryname":categoryName
    }
    console.table(addingCategory);
    Category.push(addingCategory);
    console.log(Category);
    localStorage.setItem("category",JSON.stringify(Category));
    window.location.href="/disneyholidayapp-ui/pages/shoppingzone.html";
    console.groupEnd("addCategory");
}
onload();