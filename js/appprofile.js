const body = document.querySelector("body"),
    menuEdit = document.querySelector(".container-edits"),
    toggle = document.querySelector(".btn-modify"),
    toggleClose = document.getElementById('btnClose');


    toggle.addEventListener("click", () => {
        menuEdit.classList.toggle("close");
    });

    toggleClose.addEventListener('click', () => {
        menuEdit.classList.toggle("close");
    });
    