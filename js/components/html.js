function createHTML (product, gender){
    product.forEach(function (product){
        if(product.categories[0].slug === gender){
        listContainer.innerHTML += `
            <div class="product">
                <a href="../pages/product.html" class="productItem" onclick="addSearchParms(${product.id})">
                    <img src="${product.images[0].thumbnail}" />
                    <h2>${product.name}</h2>
                    <p>${product.prices.price} ${product.prices.currency_symbol}</p>
                </a>
            </div>`
        }
    })
}