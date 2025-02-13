// Navbar Toggle for Small Screens
document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.querySelector("#menu-toggle");
    let navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("change", function () {
        if (this.checked) {
            navLinks.style.display = "flex";
        } else {
            navLinks.style.display = "none";
        }
    });
});

// Learn More Button Functionality
document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.querySelector("#menu-toggle");
    let navLinks = document.querySelectorAll(".nav-links a");

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.checked = false;
        });
    });
});

// Home Page Text Animation
document.addEventListener("DOMContentLoaded", function () {
    let homeText = document.querySelector(".home-text");
    if (homeText) {
        homeText.style.opacity = "0";
        homeText.style.transform = "translateY(20px)";

        setTimeout(() => {
            homeText.style.transition = "all 1.5s ease-out";
            homeText.style.opacity = "1";
            homeText.style.transform = "translateY(0)";
        }, 500);
    }
});

// know more details in service module
function learnMore(service) {
    alert("More details about " + service + " will be added soon!");
}