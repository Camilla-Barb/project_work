const infoButtons = document.querySelectorAll(".info button");

const list = document.querySelectorAll(".list");

infoButtons.forEach(infoButton => {
    infoButton.addEventListener("click", event => {
        list.classList.remove("list");
        list.classList.add("list--active");
    })
});





/*infoButtons.addEventListener("click", infoButton);

function listActive(){
    list.classList.remove("list");
    list.classList.add("list--active");
}


function removeListActive(){
    list.classList.remove("list--active");
    list.classList.add("list");
}*/








