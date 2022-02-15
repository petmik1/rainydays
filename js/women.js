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

const myURl = new URL("http://127.0.0.1:5501/pages/women.html")

function setParams(id){
 myURl.setParams= `id, ${id}`;
console.log(myURl);
}
setParams();