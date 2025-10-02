// Toggle style switcher panel
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    document.querySelector(".style-switcher").classList.remove("open");
});

// =================== Theme Colors ===================
const alternateStyles = document.querySelectorAll(".alternate-style"); // FIXED: was querySelector (should be querySelectorAll)

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// =================== Dark/Light Mode Toggle ===================
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    // Toggle icon
    const icon = dayNight.querySelector("i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");

    // Toggle dark mode
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    const icon = dayNight.querySelector("i");
    if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon");
    } else {
        icon.classList.add("fa-moon");
        icon.classList.remove("fa-sun");
    }
});
