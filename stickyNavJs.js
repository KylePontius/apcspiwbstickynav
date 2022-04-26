const nav = document.querySelector('.nav')
console.log(nav)
window.addEventListener('scroll', fixNav)

function fixNav(){
    console.log(window.scrollY)
    if(window.scrollY > 250) {
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}