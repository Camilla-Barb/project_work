const fourProductsListButton= document.querySelector(".four-products-list");

const sixProductsListButton = document.querySelector(".six-products-list");

const cardProdotti = document.querySelector(".card-prodotti");



fourProductsListButton.addEventListener("click", fourProductsList);
sixProductsListButton.addEventListener("click", sixProductsList);


function fourProductsList(){
    cardProdotti.classList.remove("card-prodotti--gallery");
    fourProductsList.classList.add("active");
    sixProductsList.classList.remove("active");
}

function sixProductsList() {
    cardProdotti.classList.add("card-prodotti--gallery");
    sixProductsList.classList.add("active");
    fourProductsList.classList.remove("active");
}

