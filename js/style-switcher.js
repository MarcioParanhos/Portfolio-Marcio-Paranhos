// ===================== Toggle Style Switcher =================== //
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler")
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})
// Hide Style Switcher on scroll 
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {

        document.querySelector(".style-switcher").classList.remove("open")
    }
})

// ===================== Theme Colors =================== //
const alternateStyles = document.querySelectorAll(".alternate-style")
function setActiveStyle(color) {

    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {

            style.removeAttribute("disabled")

        } else {

            style.setAttribute("disabled", "true")

        }
    })
}

// ===================== Theme Light an Dark Mode =================== //
const dayNight = document.querySelector(".day-night")
const toggle_img = document.getElementById("toggle_img")

dayNight.addEventListener("click", () => {

    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        toggle_img.src = "images/Marcio Paranhos White.png";
    } else {
        toggle_img.src = "images/Marcio Paranhos.png";
    }

})

window.addEventListener("load", () => {

    if (document.body.classList.contains("dark")) {

        dayNight.querySelector("i").classList.add("fa-sun")

    } else {

        dayNight.querySelector("i").classList.add("fa-moon")

    }

})