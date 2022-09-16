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

homeButton.onclick = function() {
    homeContent.hidden = false;
    aboutmeContent.hidden = true;
    projectsContent.hidden = true;
    skillsContent.hidden = true;
}

aboutmeButton.onclick = function() {
    homeContent.hidden = true;
    aboutmeContent.hidden = false;
    projectsContent.hidden = true;
    skillsContent.hidden = true;
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