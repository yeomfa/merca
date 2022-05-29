$(document).ready(function () {
    let btnAdd = document.getElementById('btn-add');
    let btnClose = document.getElementById('btnClose');
    let modalEdit = document.querySelector('.container-edits');
    let opTables = document.getElementById('tables');
    let opHistory = document.getElementById('history');
    let selectUsers = document.getElementById('users');
    let selectStores = document.getElementById('stores');

    $('#table-users').DataTable();
    $('#table-stores').DataTable();

    $('#tables').addClass('active');

    $('#seehistory').hide();
    $('#container-table').hide();
    $('#load-table-users').hide();
    $('#load-table-stores').hide();

    btnAdd.addEventListener('click', () => {
        modalEdit.classList.toggle('close');
    });
    
    btnClose.addEventListener('click', () => {
        modalEdit.classList.toggle('close');
    }); 

    opTables.addEventListener('click', () => {
        $('#tables').addClass('active');
        $('#history').removeClass('active');

        $('#grid-tables').show();
        $('#container-table').hide();
        $('#load-table-users').hide();
        $('#load-table-stores').hide();
        $('#seehistory').hide();
    });

    opHistory.addEventListener('click', () => {
        $('#history').addClass('active');
        $('#tables').removeClass('active');

        $('#seehistory').show();
        $('#container-table').hide();
        $('#load-table-users').hide();
        $('#load-table-stores').hide();
        $('#grid-tables').hide();
    });

    // Select grid

    selectUsers.addEventListener('click', () => {
        $('#container-table').show();
        $('#load-table-users').show();
        $('#grid-tables').hide();
    });

    selectStores.addEventListener('click', () => {
        $('#container-table').show();
        $('#load-table-stores').show();
        $('#grid-tables').hide();
    });
});