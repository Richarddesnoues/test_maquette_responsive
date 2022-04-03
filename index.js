function openMenu (){
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.hamburger_bloc');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('open_nav');

        

    })

}
openMenu();


function closeMenu (){
    const nav_menu = document.querySelector('.nav_menu');
    const burger = document.querySelector('.hamburger_bloc');

    burger.addEventListener('click', () => {
        nav_menu.classList.toggle('open_nav');

})

}
closeMenu();