
const searchForm = document.querySelector('.search-form')
const buttonSearch = document.querySelector('.button-search');

searchForm.addEventListener('submit',  async function(event) {
    event.preventDefault();
    const imputValue = event.target[0].value

    const data = await fetch (`https://api.mercadolibre.com/sites/MLB/search?q=iphone${imputValue}`)

    const Products = (await data.json()).results.slice(0,10)

    console.log(Products)
})




