function toggleMenu() {
    const menuButton = document.getElementById('menu');
    const navList = document.querySelector('.navigation');
    if (!menuButton || !navList) return;
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navList.classList.toggle('open');
        const isOpen = menuButton.classList.contains('open');
        menuButton.setAttribute('aria-expanded', isOpen);
    });
}
document.addEventListener('DOMContentLoaded', toggleMenu);

const footerContent = `
<p><strong>Hours:</strong> Monday to Saturday | 08:00 AM - 7:00 PM</p>
<nav class="footer-links" aria-label="Legal and navigation links">
    <a href="privacy.html">Privacy Policy</a>
    <a href="terms.html">Terms and conditions</a>
    <a href="references.html">Sources references</a> 
</nav>
<div class="footer-subscribe-block">
    <p><strong>Sign up now and enjoy 10% off your first purchase!</strong></p>
    <form action="/subscribe" method="GET" aria-label="Subscription form">
        <input type="email" name="email" placeholder="Your email address" required aria-label="email address">
        <button type="submit">Subscribe</button>
    </form>
</div>
<p class="footer-text-spacing">&copy; ${new Date().getFullYear()} Baby Lucy. all rights reserved.</p>
<p>powered by Abel J. Nonato Avalos</p>
<p>Last updated: ${document.lastModified}</p>
`;
const footerElement = document.getElementById('mainFooter');
if (footerElement) {
    footerElement.innerHTML = footerContent;
}