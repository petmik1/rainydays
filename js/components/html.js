function createHTML (product, gender){
  console.log(product)
  for (let i = 0; i < product.length; i++) {
    console.log(i)
    
  }
    product.forEach(function (product){
      
        if(product.categories[0].slug === gender){
        listContainer.innerHTML += `
            <div class="product">
                <a href="../pages/product.html?id=${product.id}" class="productItem">
                    <img src="${product.images[0].thumbnail}" />
                    <h2>${product.name}</h2>
                    <p>${product.prices.price} ${product.prices.currency_symbol}</p>
                </a>
            </div>`
        }
    })
}

function createProductHTML (result){
    productMain.innerHTML += `
    <div class="all-images">
      <img src="${result.images[0].thumbnail}" class="img-large" alt="image of The rain cather" />
    </div>
    <div class="product-info">
      <h1>${result.name}</h1>
      <p>
      ${result.short_description}
      </p>
      <div class="inputs">
        <form action="">
          <select name="size" id="">
            <option value="">small</option>
            <option value="">medium</option>
            <option value="">large</option>
          </select>
        </form>
        <a href="#" class="btn_addToCart cta" onclick="displayBox()">Add to cart</a>
      </div>
    `
}