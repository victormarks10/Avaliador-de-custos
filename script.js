const searchForm = document.querySelector('.search-form');
const buttonSearch = document.querySelector('.button-search');
const productList = document.querySelector('.product-list');

searchForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const inputValue = event.target[0].value;

    const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=iphone${inputValue}`);

    const products = (await data.json()).results.slice(0, 10);

    displayData(products);
});

function displayData(products) {
    console.log(products);
    productList.innerHTML = products.map(product =>
        `
        <div class='product-card'>   
            <img src="${product.thumbnail}" alt="Imagem do produto">
            <p>${product.title}</p>
            <p>Preço: R$ ${product.price}</p>
        </div>
        `
    ).join('');
}
