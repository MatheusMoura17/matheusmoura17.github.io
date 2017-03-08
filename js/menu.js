var projects=document.getElementsByClassName("projects");
var about=document.getElementsByClassName("about");
var contact=document.getElementsByClassName("contact");

function ShowProjects(){
    projects[0].style.display='block';
    about[0].style.display='none';
    contact[0].style.display='none';
}

function ShowAbout(){
    projects[0].style.display='none';
    about[0].style.display='block';
    contact[0].style.display='none';
}

function ShowContact(){
    projects[0].style.display='none';
    about[0].style.display='none';
    contact[0].style.display='block';
}