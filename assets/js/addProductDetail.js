let productDetail=[];
function onload(){
    let store = localStorage.getItem('productDetails');
    let users = JSON.parse(store);
    console.log(users);
    if (users == null){
        productDetail = []
    }else {
        productDetail = users;
    }
}
function addProductDetail(event){
    event.preventDefault();
    let image=document.getElementById("image").value;
    let productsName=document.getElementById("productname").value;
    let cost=document.getElementById("Cost").value;
    let specificationDetail=document.getElementById("specificationDetail").value;
    let country=document.getElementById("country").value;
    let weight=document.getElementById("weight").value;
    let color=document.getElementById("color").value;
    let addproductDetails={
        "image":image,
        "productsname":productsName,
        "cost":cost,
        "specificationDetail":specificationDetail,
        "country":country,
        "weight":weight,
        "color":color
    }
    productDetail.push(addproductDetails);
    localStorage.setItem("productDetails",JSON.stringify(productDetail));
    window.location.href="/pages/shoppingzone.html"
}
onload();