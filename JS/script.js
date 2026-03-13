// Load Header and Footer
document.addEventListener("DOMContentLoaded", function() {
    const header = `
        <nav>
            <div class="logo">AB | Automation</div>
            <div>
                <a href="index.html">Home</a>
                <a href="career-roadmap.html">Experience</a>
                <a href="projects.html">Projects</a>
            </div>
        </nav>`;
    
    const footer = `
        <p>Contact: arkaprava.basak@outlook.com [cite: 2]</p>
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/arkapravabasak/"><img src="images/linkedin.png" alt="LinkedIn"></a>
            <a href="YOUTUBE_URL"><img src="images/youtube.png" alt="YouTube"></a>
        </div>`;

    document.getElementById('header-placeholder').innerHTML = header;
    document.getElementById('footer-placeholder').innerHTML = footer;
});