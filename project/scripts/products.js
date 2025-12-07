import { allProducts } from './data.js';

//Global variables
let cart = [];
const container = document.getElementById('products-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartCountElement = document.getElementById('cart-count');
const clearCartBtn = document.getElementById('clear-cart-btn');
// hambutton nav Menu
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
// function cart count
function updateCartCount() {
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
        
        localStorage.setItem('babyLucyCart', JSON.stringify(cart));
        if (clearCartBtn) {
            if (cart.length > 0) {
                clearCartBtn.classList.add('visible');
            } else {
                clearCartBtn.classList.remove('visible');
            }
        }

        cartCountElement.classList.add('bump');
        setTimeout(() => cartCountElement.classList.remove('bump'), 300);
    }
}

// Functions to clear the cart
function clearCart() {
    const confirClean = confirm(`Are you sure you want to remove all ${cart.length} items from your cart?`);
    
    if (confirClean) {
        cart = [];
        localStorage.removeItem('babyLucyCart');
        updateCartCount();
        alert('Cart cleared successfully!');
    }
}
//Main function = show products
const displayProducts = (products) => {
    if (products.length === 0) {
        container.innerHTML = '<p class="no-results">No products found.</p>';
        return;
    }

    // Template HTML
    const productsHTML = products.map(product => `
        <article class="product-card">
            <img 
                src="${product.src}" 
                alt="${product.alt}" 
                width="300"
                height="300"
                loading="lazy">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
            </div>
            <div class="product-actions">
                    <input 
                        type="number" 
                        id="qty-${product.id}" 
                        class="qty-input" 
                        value="1" 
                        min="1" 
                        max="10"
                        aria-label="Quantity for ${product.name}">
                    <button class="btn-add" data-id="${product.id}"
                    aria-label="Add ${product.name} to cart">Add</button>
            </div>
        </article>
    `).join('');
    container.innerHTML = productsHTML;

    activateAddButtons();
};

// functions add-button
function activateAddButtons() {
    const addButtons = document.querySelectorAll('.btn-add');

    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            
            const id = parseInt(e.target.dataset.id);
            const productToAdd = allProducts.find(p => p.id === id);
            const qtyInput = document.getElementById(`qty-${id}`);
            const quantity = parseInt(qtyInput.value) || 1;

            if (productToAdd && quantity > 0) {
                for (let i = 0; i < quantity; i++) {
                    cart.push(productToAdd);
                }

                const originalText = e.target.textContent;
                e.target.textContent = `Added ${quantity}!`;
                e.target.style.backgroundColor = "#FFB3E2";
                e.target.style.color = "#000";
                
                updateCartCount();

                setTimeout(() => {
                    e.target.textContent = originalText;
                    e.target.style.backgroundColor = ""; 
                }, 1000);
            }
        });
    });
}

//functions to filter products
filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterButtons.forEach(button => button.classList.remove('active'));
        e.currentTarget.classList.add('active');

        const categoryId = e.currentTarget.dataset.category;
        
        if (categoryId === 'all') {
            displayProducts(allProducts);
        } else {
            const filtered = allProducts.filter(product => product.category === categoryId);
            displayProducts(filtered);
        }
    });
});    

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

// get Start
document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('babyLucyCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    toggleMenu();
    displayProducts(allProducts);
    updateCartCount()
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

});
