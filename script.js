let homeButton = document.getElementById("home-button")
let aboutmeButton = document.getElementById("aboutme-button")
let projectsButton = document.getElementById("projects-button")
let skillsButton = document.getElementById("skills-button")

let homeContent = document.getElementsByClassName("content")[0]
let aboutmeContent = document.getElementsByClassName("content")[1]
let projectsContent = document.getElementsByClassName("content")[2]
let skillsContent = document.getElementsByClassName("content")[3]

homeContent.hidden = false;
aboutmeContent.hidden = true;
projectsContent.hidden = true;
skillsContent.hidden = true;

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