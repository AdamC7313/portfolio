let homeButton = document.getElementById("home-button")
let aboutmeButton = document.getElementById("aboutme-button")
let projectsButton = document.getElementById("projects-button")
let skillsButton = document.getElementById("skills-button")
let linkedinButton = document.getElementsByClassName("contact-button")[0]
let emailButton = document.getElementsByClassName("contact-button")[1]

let homeContent = document.getElementsByClassName("content")[0]
let aboutmeContent = document.getElementsByClassName("content")[1]
let projectsContent = document.getElementsByClassName("content")[2]
let skillsContent = document.getElementsByClassName("content")[3]
let linkedinText = document.getElementById("linkedin")
let emailText = document.getElementById("email")

homeContent.hidden = false;
aboutmeContent.hidden = true;
projectsContent.hidden = true;
skillsContent.hidden = true;
linkedinText.hidden = true;
emailText.hidden = true;

function fade_func(target, length){
    let line = 0;
    let timer = setInterval(onTick,100);
    function onTick(){
        const span = target.querySelectorAll('span')[line];
        span.classList.add('fade');
        line++;
        if(line === length){
            clearInterval(timer);
            timer = null;
        }
    }
}   

function clear_fade_class(target, length){
    let line = 0;
    let timer = setInterval(onTick,0);
    function onTick(){
        const span = target.querySelectorAll('span')[line];
        span.classList.remove('fade')
        line++
        if(line === length){
            clearInterval(timer);
            timer = null;
        }
    }
}  

window.onload = (event) => {
    event = fade_func(homeContent, 1)
}

homeButton.onclick = function() {
    homeContent.hidden = false;
    aboutmeContent.hidden = true;
    projectsContent.hidden = true;
    skillsContent.hidden = true;
    fade_func(homeContent, 1);
    clear_fade_class(aboutmeContent, 7);
    clear_fade_class(projectsContent, 4);
    clear_fade_class(skillsContent, 1);
}

aboutmeButton.onclick = function() {
    homeContent.hidden = true;
    aboutmeContent.hidden = false;
    projectsContent.hidden = true;
    skillsContent.hidden = true;
    fade_func(aboutmeContent, 7);
    clear_fade_class(homeContent, 1);
    clear_fade_class(projectsContent, 4);
    clear_fade_class(skillsContent, 1);
}

projectsButton.onclick = function() {
    homeContent.hidden = true;
    aboutmeContent.hidden = true;
    projectsContent.hidden = false;
    skillsContent.hidden = true;
    fade_func(projectsContent, 4);
    clear_fade_class(homeContent, 1);
    clear_fade_class(aboutmeContent, 7);
    clear_fade_class(skillsContent, 1);
}

skillsButton.onclick = function() {
    homeContent.hidden = true;
    aboutmeContent.hidden = true;
    projectsContent.hidden = true;
    skillsContent.hidden = false;
    fade_func(skillsContent, 1);
    clear_fade_class(homeContent, 1);
    clear_fade_class(projectsContent, 4);
    clear_fade_class(aboutmeContent, 7);
}

linkedinButton.onmouseover = function() {
    linkedinText.hidden = false;
}

linkedinButton.onmouseout = function() {
    linkedinText.hidden = true;
}

emailButton.onmouseover = function() {
    emailText.hidden = false;
}

emailButton.onmouseout = function() {
    emailText.hidden = true;
}

