import { allProducts } from './data.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('product-carousel');
    if (!carouselContainer) return;

    const featuredProducts = allProducts.slice(0, 3); 

    featuredProducts.forEach(product => {
        const productArticle = document.createElement('article');
        productArticle.className = 'product-item';
        productArticle.setAttribute('role', 'listitem');

        const productHTML = `
            <a href="products.html" class="carousel-link" aria-label="Go to store">
                <img 
                    src="${product.src}" 
                    alt="${product.alt}" 
                    loading="lazy">
                <h4>${product.name}</h4>
                <p class="price">$${product.price.toFixed(2)}</p>
            </a>
        `;
        productArticle.innerHTML = productHTML;
        carouselContainer.appendChild(productArticle);
    });
});

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