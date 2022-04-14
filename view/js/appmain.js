/* MENÚ HAMBURSQUESA */

const body = document.querySelector("body"),
    menuBar = document.querySelector(".bar-menu"),
    toggle = document.querySelector(".bar-toggle");
    searchBtn = document.querySelector(".bar-search");


    toggle.addEventListener("click", () => {
        menuBar.classList.toggle("close");
    });

/* SCROLL ACTIVE*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 110,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active-op')
        }else{
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active-op')
        }
    })
}
window.addEventListener('scroll', scrollActive)
