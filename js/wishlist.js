const aggiungiAllaWishlistButtons = document.querySelectorAll(".aggiungi-alla-wishlist");

aggiungiAllaWishlistButtons.forEach(button =>{
    button.addEventListener("click", aggiungiAllaWishlist);
})


function aggiungiAllaWishlist(event){
    const productId = event.target.dataset.id;
    wishlist.push(productId);
    localStorage.setItem("wishlist", wishlist);
}