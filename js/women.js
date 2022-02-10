const url = "http://rainydaysapi.petter-mikalsen.no/wp-json/wc/store/products";
const listContainer = document.querySelector(".listContainer");

async function getProducts() {
    try{
        
        const response = await fetch(url);
        const result = await response.json();
        createHTML(result, "women");
    }
    catch(error){
        console.log(error);

    }
}
getProducts();

