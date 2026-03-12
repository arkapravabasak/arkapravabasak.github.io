function toggleTheme() {

    const body = document.body;
    const btn = document.getElementById("themeButton");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        if(btn) btn.innerText = "☀ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        if(btn) btn.innerText = "🌙 Dark Mode";
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

});

fetch("header.html")
.then(response => response.text())
.then(data => {

    document.getElementById("header-placeholder").innerHTML = data;

    const savedTheme = localStorage.getItem("theme");
    const btn = document.getElementById("themeButton");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if(btn) btn.innerText = "☀ Light Mode";
    }

});

