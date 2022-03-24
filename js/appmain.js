/* MENÚ HAMBURSQUESA */

const body = document.querySelector("body"),
    menuBar = document.querySelector(".bar-menu"),
    toggle = document.querySelector(".bar-toggle");
    searchBtn = document.querySelector(".bar-search");


    toggle.addEventListener("click", () => {
        menuBar.classList.toggle("close");
    });