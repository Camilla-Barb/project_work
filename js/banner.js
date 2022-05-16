const closeButton= document.getElementById("close");
const banner=document.getElementsByClassName("banner");

closeButton.addEventListener("click", closeBtn);

function closeBunnerButton(){
    banner.classList.remove(".banner");
}



