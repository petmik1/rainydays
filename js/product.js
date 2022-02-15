const btn = document.querySelector(".btn_addToCart");
const hiddenBox = document.querySelector(".hiddenInfo");
const productMain = document.querySelector(".product-main");
const url = "http://rainydaysapi.petter-mikalsen.no/wp-json/wc/store/products";
let params = new URLSearchParams(document.location.search);
let id = parseInt(params.get("id"));

async function getProducts() {
    try{
        const response = await fetch(url);
        const result = await response.json();
        for (let i = 0; i < result.length; i++) {
          if (result[i].id === id){
              createProductHTML(result[i]);
          }  
        }
    }
    catch(error){
        console.log(error);

    }
}
getProducts();

function displayBox() {
    hiddenBox.style.display = "flex";
}

