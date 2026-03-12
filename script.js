function toggleTheme() {

    const body = document.body;
    const btn = document.getElementById("themeButton");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        btn.innerText = "☀ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        btn.innerText = "🌙 Dark Mode";
    }

}