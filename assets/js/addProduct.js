let products=[];
function onload(){
    const store = localStorage.getItem('products');
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
    console.group("addProduct");
    const image=document.getElementById("image").value;
    const productsName=document.getElementById("productname").value;
    const categoryName=document.getElementById("categoryname").value;
    const cost=document.getElementById("Cost").value;
    let addproducts={
        "image":image,
        "productsname":productsName,
        "categoryname":categoryName,
        "cost":cost
    }
    console.table(addproducts);
    products.push(addproducts);
    console.log(products);
    localStorage.setItem("products",JSON.stringify(products));
    window.location.href="/pages/shoppingzone.html";
    console.groupEnd("addProduct");
}
onload();