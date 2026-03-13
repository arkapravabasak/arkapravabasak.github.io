document.addEventListener("DOMContentLoaded", function() {
    // Shared Header
    const headerHTML = `
        <nav>
            <div style="color:white; font-weight:bold; font-size:1.2rem;">AB | Automation Lead</div>
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="career-roadmap.html">Career</a>
                <a href="projects.html">Projects</a>
            </div>
        </nav>`;

    // Shared Footer with your specific links
    const footerHTML = `
        <div class="footer-content">
            <p>Kolkata, India | arkaprava.basak@outlook.com</p>
            <div class="social-links">
                <a href="https://linkedin.com" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn">
                </a>
                <a href="https://facebook.com" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook">
                </a>
                <a href="https://instagram.com" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram">
                </a>
                <a href="YOUR_YOUTUBE_URL" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube">
                </a>
            </div>
            <p style="font-size: 0.8rem; margin-top: 15px;">&copy; 2026 Arkaprava Basak</p>
        </div>`;

    const headElem = document.getElementById('header-placeholder');
    const footElem = document.getElementById('footer-placeholder');

    if(headElem) headElem.innerHTML = headerHTML;
    if(footElem) footElem.innerHTML = footerHTML;
});