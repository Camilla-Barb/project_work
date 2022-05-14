
/**VISUALIZZAZIONE GRIGLIE PAGINA 2 */

const fourProductsListButton= document.querySelector(".four-products-list");

const sixProductsListButton = document.querySelector(".six-products-list");

const cardProdotti = document.querySelector(".card-prodotti");



fourProductsListButton.addEventListener("click", fourProductsList);
sixProductsListButton.addEventListener("click", sixProductsList);


function fourProductsList(){
    cardProdotti.classList.remove("card-prodotti--gallery");
    fourProductsListButton.classList.add("active");
    sixProductsListButton.classList.remove("active");
}

function sixProductsList() {
    cardProdotti.classList.add("card-prodotti--gallery");
    sixProductsListButton.classList.add("active");
    fourProductsListButton.classList.remove("active");
}

