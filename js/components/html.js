function createHTML (product) {
    product.forEach(function (product){
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