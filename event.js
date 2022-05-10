const toggleCardViewButton= document.querySelector(".toggle-card-view");

const toggleGalleryViewButton = document.querySelector(".toggle-gallery-view");

const cardProdotti = document.querySelector(".card-prodotti");

toggleCardViewButton.addEventListener("click", toggleCardView);
toggleGalleryViewButton.addEventListener("click", toggleGalleryView);

function toggleCardView(){
    cardProdotti.classList.remove(".card-prodotti--gallery");
}

function toggleGalleryView() {
    cardProdotti.classList.add(".card-prodotti--gallery");
}

