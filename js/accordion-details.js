
let accordion = document.querySelectorAll(".info-products button");
let y;

for (y = 0; y < accordion.length; y++) {
    accordion[y].addEventListener("click", function () {
        this.classList.toggle("active");
        let text = this.nextElementSibling;
        if (text.style.display === "block") {
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }
    });
}