document.addEventListener("DOMContentLoaded", async function () {

const header = await fetch("header.html");
const headerHTML = await header.text();
document.getElementById("header").innerHTML = headerHTML;

const footer = await fetch("footer.html");
const footerHTML = await footer.text();
document.getElementById("footer").innerHTML = footerHTML;

});