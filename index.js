//SHOW MENU SCRIPT

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //validate that the variable exist
    if(toggle && nav){
        //we add the show-menu class to the div tag with the nav_menu class
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


//CHANGE BACKGROUND HEADER

function scrollHeader(){
    const nav = document.getElementById('header')
    //when the scroll is greater than 200 view port height, add the scroll-header class
    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else
    nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)


//SHOW SCROLL TOP

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    //when the scroll is higher than 560 view port height, add the show-scroll class
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top');
    else
    scrollTop.classList.remove('scroll-top');
}

window.addEventListener('scroll', scrollTop)