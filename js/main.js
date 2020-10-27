


// start navbar toggle 

let myNav = document.querySelector('.nav-links');
let icon = document.querySelector('.toggle i');
const toggleBtn = document.querySelector('.toggle');


toggleBtn.addEventListener('click', function () {
    toggleNav();
});


function toggleNav() {
    myNav.classList.toggle('active');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}


// end navbar toggle 