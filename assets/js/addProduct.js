let products=[];
function onload(){
    const store = localStorage.getItem('products');
    let productDetails = JSON.parse(store);
    console.log(productDetails);
    if (productDetails == null){
        products = []
      }else {
        products = productDetails;
      }
}
function addProduct(event){
    event.preventDefault();
    console.group("addProduct");
    //getting input values
    const image=document.getElementById("image").value;
    const productsName=document.getElementById("productname").value;
    const categoryName=document.getElementById("categoryname").value;
    const cost=document.getElementById("Cost").value;
    //creating object
    let addproducts={
        "image":image,
        "productsname":productsName,
        "categoryname":categoryName,
        "cost":cost
    }
    console.table(addproducts);
    //pushing into array
    products.push(addproducts);
    console.log(products);
    localStorage.setItem("products",JSON.stringify(products));
    window.location.href="./../pages/shoppingzone.html";
    console.groupEnd("addProduct");
}
onload();