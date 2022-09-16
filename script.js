let homeContent = document.getElementsByClassName('home');
let projectsContent = document.getElementsByClassName('projects');
let aboutmeContent = document.getElementsByClassName('about-me');
let skillsContent = document.getElementsByClassName('skills');

homeContent.hidden = false;
projectsContent.hidden = true;
aboutmeContent.hidden = true;
skillsContent.hidden = true;

homeContent.onclick = function() {
    homeContent.hidden = false;
    projectsContent.hidden = true;
    aboutmeContent.hidden = true;
    skillsContent.hidden = true;
}

aboutmeContent.onclick = function() {
    homeContent.hidden = true;
    projectsContent.hidden = true;
    aboutmeContent.hidden = false;
    skillsContent.hidden = true;
}

projectsContent.onclick = function() {
    homeContent.hidden = true;
    projectsContent.hidden = false;
    aboutmeContent.hidden = true;
    skillsContent.hidden = true;
}

skillsContent.onclick = function() {
    homeContent.hidden = true;
    projectsContent.hidden = true;
    aboutmeContent.hidden = true;
    skillsContent.hidden = false;
}