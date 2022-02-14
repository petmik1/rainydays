const url = "http://rainydaysapi.petter-mikalsen.no/wp-json/wc/store/products";
const listContainer = document.querySelector(".listContainer");
const gender = "women";

async function getProducts() {
    try{
        
        const response = await fetch(url);
        const result = await response.json();
        createHTML(result, gender);
        
    }
    catch(error){
        console.log(error);

    }
}
getProducts();


let queryStr = "id=1"
let searchParams = new URLSearchParams(queryStr);
function addSearchParms(id){
    searchParams.set("id", id)
}