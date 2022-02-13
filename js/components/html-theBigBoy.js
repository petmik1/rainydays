function createHTML (product, gender) {
    product.forEach(function (product){
        console.log(product.categories[0].name);
        console.log(gender)
        if(product.categories[0].name === gender){
            console.log("test")
        }
            listContainer.innerHTML += `
            <div class="product">
                <a href="product.html">
                    <img src="${product.images[0].thumbnail}" />
                    <h2>${product.name}</h2>
                    <p>${product.prices.price} ${product.prices.currency_symbol}</p>
                </a>
            </div>` 
    })
}
