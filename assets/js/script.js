window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
        document.body.classList.add("sticky");
    } else {
        document.body.classList.remove("sticky");
    }
});

// ============= Mobile Menu ==========================
const mobileBtn = document.getElementById('mobileMenuBtn');
const menuPanels = document.querySelectorAll('.menu-panel');
const overlay = document.querySelector('.mobile-menu-overlay');

// open menu
mobileBtn.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
});

// close menu on overlay click
overlay.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
});

// open subpanels
document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const openPanel = btn.dataset.open;
        menuPanels.forEach(p => p.classList.remove("active"));
        document.getElementById(openPanel).classList.add("active");
    });
});

// back buttons
document.querySelectorAll("[data-back]").forEach(btn => {
    btn.addEventListener("click", () => {
        menuPanels.forEach(p => p.classList.remove("active"));
        document.getElementById("panel-main").classList.add("active");
    });
});