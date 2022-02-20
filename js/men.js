const url = "https://rainydaysapi.petter-mikalsen.no/wp-json/wc/store/products";
const listContainer = document.querySelector(".listContainer");
const gender = "men";
async function getProducts() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    createHTML(result, gender);
  } catch (error) {
    console.log(error);
  }
}
getProducts();
