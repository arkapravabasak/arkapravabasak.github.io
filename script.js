document.addEventListener("DOMContentLoaded", function () {

let basePath = "";

/* detect if we are inside projects folder */

if (window.location.pathname.includes("/projects/")) {
    basePath = "../";
}

fetch(basePath + "header.html")
.then(res => res.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
});

fetch(basePath + "footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});

});

function openModal(modalId){

document.getElementById(modalId).style.display="flex";

}

function closeModal(modalId){

document.getElementById(modalId).style.display="none";

}

window.onclick = function(event){

const modals = document.querySelectorAll(".modal");

modals.forEach(function(modal){

if(event.target === modal){
modal.style.display="none";
}

});

};