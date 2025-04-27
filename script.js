// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navbar Effect
window.onscroll = function () { stickyNavbar() };

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// Hover effect on product images
const productImages = document.querySelectorAll('.product img');
productImages.forEach(img => {
    img.addEventListener('mouseover', function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease";
    });

    img.addEventListener('mouseout', function () {
        this.style.transform = "scale(1)";
        this.style.transition = "transform 0.3s ease";
    });
});

// Toggle the search bar (example: clicking the search button expands it)
const searchBtn = document.querySelector('.navbar .search-bar button');
const searchInput = document.querySelector('.navbar .search-bar input');

searchBtn.addEventListener('click', () => {
    if (searchInput.style.width === '200px') {
        searchInput.style.width = '0';
    } else {
        searchInput.style.width = '200px';
    }
});

// Add to Cart - Example Function (Placeholder)
const addToCartBtns = document.querySelectorAll('.product a:nth-child(2)');
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Item added to cart!");
    });
});

// Display Modal for Product Details
const viewMoreBtns = document.querySelectorAll('.product a:nth-child(1)');
viewMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        // Example Modal, you can expand it for more details
        alert("More details coming soon!");
    });
});

// Lazy Load Images for Faster Loading
const lazyImages = document.querySelectorAll('img');
const lazyLoad = () => {
    lazyImages.forEach(img => {
        if (img.getBoundingClientRect().top < window.innerHeight && !img.src) {
            img.src = img.dataset.src;
        }
    });
};

window.addEventListener('scroll', lazyLoad);
window.addEventListener('load', lazyLoad);

// Toggle Mobile Navbar (for smaller screens)
const mobileMenuIcon = document.querySelector('.navbar .menu-icon');
const navMenu = document.querySelector('.navbar nav');

mobileMenuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Example: Scroll-to-top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.onscroll = () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};