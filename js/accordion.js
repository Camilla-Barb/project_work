
let acc = document.querySelectorAll(".info button");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let list = this.nextElementSibling;
        if (list.style.display === "block") {
            list.style.display = "none";
        } else {
            list.style.display = "block";
        }
    });
}







