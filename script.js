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

const aboutme_text = document.querySelector(".about-me");
const aboutme_strText = aboutme_text.textContent;
const aboutme_splitText = aboutme_strText.split(/\r?\n|\r|\n/g)

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
        console.log(span)
        console.log(aboutme_splitText.length)
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
        console.log(span)
        span.classList.remove('fade')
        line++
        if(line === length){
            clearInterval(timer);
            timer = null;
        }
    }
}   

homeButton.onclick = function() {
    homeContent.hidden = false;
    aboutmeContent.hidden = true;
    projectsContent.hidden = true;
    skillsContent.hidden = true;
    clear_fade_class(aboutme_text, 7)
}

aboutmeButton.onclick = function() {
    homeContent.hidden = true;
    aboutmeContent.hidden = false;
    projectsContent.hidden = true;
    skillsContent.hidden = true;
    fade_func(aboutme_text, 7)
}

projectsButton.onclick = function() {
    homeContent.hidden = true;
    aboutmeContent.hidden = true;
    projectsContent.hidden = false;
    skillsContent.hidden = true;
}

skillsButton.onclick = function() {
    homeContent.hidden = true;
    aboutmeContent.hidden = true;
    projectsContent.hidden = true;
    skillsContent.hidden = false;
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

