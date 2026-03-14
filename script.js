document.addEventListener("DOMContentLoaded", function () {

fetch("header.html")
.then(response => response.text())
.then(data => {
document.getElementById("header").innerHTML = data;
});

fetch("footer.html")
.then(response => response.text())
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