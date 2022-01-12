const section_top = document.getElementById("section-top");
const nav_bar = document.getElementById("nav_bar");
const sections = document.querySelectorAll(".section")
const header_background = document.querySelector(".bg-absolute");

//scroll
window.addEventListener("scroll", () => {
    //change nav background
    if (document.documentElement.scrollTop > section_top.clientHeight ) {
        nav_bar.classList.add("bg-scrolled");
    } else {;
        nav_bar.classList.remove("bg-scrolled");
    }
    //header parallax
    header_background.style.setProperty("top", `${scrollY/2}px`)
    //show element on scroll
    sections.forEach(card => {
        const slide = (window.scrollY + window.innerHeight) - 200 ;
        if (slide > card.offsetTop) {
            card.classList.add('section-active')
            console.log("ok")
        } else {
            card.classList.remove('section-active') 
        }
      })
})

// navigation
const hamburger_wrap = document.querySelector(".h-wrap");
const menu_wrap = document.querySelector(".ul-wrap");
let active = false;
const bars = document.querySelector(".h-wrap");

hamburger_wrap.addEventListener("click", () => {
    if (!active) {
        menu_wrap.classList.add("show-menu");
        bars.classList.add("active-menu")
        setTimeout(() => {
            bars.classList.add("a-m-rotate")
        }, 400);
        active = !active
    } else if (active) {
        menu_wrap.classList.remove("show-menu");
        bars.classList.remove("a-m-rotate")
        setTimeout(() => {
            bars.classList.remove("active-menu")
        }, 400);
        active = !active
    }
})