const footerHelpButton = document.getElementsByClassName("a.footer-help");

const companyButton= document.getElementsByClassName("a.company");

const buttonListHelp=document.getElementsByClassName(".list-help");

const buttonListCompany = document.getElementsByClassName(".list-company");



footerHelpButton.addEventListener("click", aFooterHelp);

companyButton.addEventListener("click", aCompany);


function viewListHelp (){
    buttonListHelp.classList.remove("list-help");
    buttonListHelp.classList.add("list-help--viewAll");
}


function viewListCompany() {
    buttonListCompany.classList.remove("list-company");
    buttonListCompany.classList.add("list-company--viewAll");
}
