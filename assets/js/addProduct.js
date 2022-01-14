let products=[];
function onload(){
    let store = localStorage.getItem('products');
    let users = JSON.parse(store);
    console.log(users);
    if (users == null){
        products = []
      }else {
        products = users;
      }
}
function addProduct(event){
    event.preventDefault();
    let image=document.getElementById("image").value;
    let productsName=document.getElementById("productname").value;
    let categoryName=document.getElementById("categoryname").value;
    let cost=document.getElementById("Cost").value;
    let addproducts={
        "image":image,
        "productsname":productsName,
        "categoryname":categoryName,
        "cost":cost
    }
    console.log(addproducts);
    products.push(addproducts);
    console.log(products);
    localStorage.setItem("products",JSON.stringify(products));
    window.location.href="/pages/shoppingzone.html"
}
onload();