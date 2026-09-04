const topbar = document.getElementById("topbar");
const mobileMenu = document.getElementById("mobileMenu");
const menuToggle = document.querySelector(".mobile-menu-toggle");
const menuClose = document.querySelector(".mobile-menu-close");
const mobileLinks = document.querySelectorAll(".mobile-link");

let lastScrollY = window.scrollY;

// Toggle Topbar Hide on Scroll
window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Check if mobile menu is currently open to prevent hiding topbar
    const isMenuOpen = mobileMenu && mobileMenu.classList.contains("active");

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll down -> hide Topbar (only if mobile menu is closed)
        if (!isMenuOpen) {
            topbar.classList.add("hide");
        }
    } 
    else {
        // Scroll up -> show Topbar
        topbar.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
});

// Mobile Drawer Menu Functionality
function openMenu() {
    if (mobileMenu) {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}

function closeMenu() {
    if (mobileMenu) {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = ""; // Restore scrolling
    }
}

if (menuToggle) {
    menuToggle.addEventListener("click", openMenu);
}

if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
}

// Close menu when clicking on any navigation link
mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});