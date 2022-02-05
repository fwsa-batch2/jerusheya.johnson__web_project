let productDetail=[];
function onload(){
    const store = localStorage.getItem('productdetails');
    let productDetailsStorage = JSON.parse(store);
    console.log(productDetailsStorage);
    if (productDetailsStorage == null){
        productDetail = []
    }else {
        productDetail = productDetailsStorage;
    }
}
function addProductDetail(event){
    event.preventDefault();
    console.group("addProductDetail");
    const image=document.getElementById("image").value;
    const productsName=document.getElementById("productname").value;
    const cost=document.getElementById("Cost").value;
    const specificationDetail=document.getElementById("specificationDetail").value;
    const country=document.getElementById("country").value;
    const weight=document.getElementById("weight").value;
    const color=document.getElementById("color").value;
    let addproductDetails={
        "image":image,
        "productsname":productsName,
        "cost":cost,
        "specificationDetail":specificationDetail,
        "country":country,
        "weight":weight,
        "color":color
    }
    console.table(addproductDetails);
    productDetail.push(addproductDetails);
    localStorage.setItem("productdetails",JSON.stringify(productDetail));
    window.location.href="./../pages/shoppingzone.html"
    console.groupEnd("addProductDetail");
}
onload();