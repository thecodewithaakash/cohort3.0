
const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')



burger.addEventListener('click',() => {
    nav.style.display = (nav.style.display === "block") ? "none" : "block";
})
