
// selecting the divs which contains the numbers
let projects = document.querySelector('#projects');
let customers = document.querySelector('#customers');
let awards = document.querySelector('#awards');

function projectsTime() {
    if(projects.textContent >= 100) {
        clearInterval();
    }
}


