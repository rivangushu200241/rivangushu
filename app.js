const responsiveMenuButton=document.getElementById('reponsiveMenuToggleButton');
//3
const navBarLinks=document.querySelector('.navbar-links');
 
responsiveMenuButton.addEventListener('click',()=>{
    navBarLinks.classList.toggle('open');
    responsiveMenuButton.classList.toggle('open');
});

//always close links after selecting
const allNavLinks=document.querySelectorAll('.navbar-links li');
allNavLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        navBarLinks.classList.remove('open');
        responsiveMenuButton.classList.remove('open');
    })});