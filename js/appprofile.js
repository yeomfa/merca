const body = document.querySelector("body"),
    menuEdit = document.querySelector(".container-edits"),
    toggle = document.querySelector(".btn-modify"),
    toggleClose = document.getElementById('btnClose');

let btnDelete = document.getElementById("delete");
let btnCancel = document.querySelector(".btn-cancel");
let btnAct = document.querySelector(".btn-act");
let btnAcept = document.querySelector(".btn-acept")

    toggle.addEventListener("click", () => {
        menuEdit.classList.toggle("close");
    });

    toggleClose.addEventListener('click', () => {
        menuEdit.classList.toggle("close");
    });
    

$("#succes").hide();
$("#error").hide();
$("#warning").hide();

btnDelete.addEventListener('click', () => {

    $("#warning").show();

});

btnCancel.addEventListener('click', () => {

    $("#warning").hide();

});

btnAct.addEventListener('click', () => {

    menuEdit.classList.toggle("close");
    $("#succes").show();

});

btnAcept.addEventListener("click", () => {

    $("#succes").hide();

});