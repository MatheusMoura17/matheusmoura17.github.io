var projects=document.getElementsByClassName("projects");
var about=document.getElementsByClassName("aboutMy");
var contact=document.getElementsByClassName("contact");


if(window.location.toString().indexOf("#sobre")!=-1){
    ShowAbout();
}
if(window.location.toString().indexOf("#projetos")!=-1){
    ShowProjects();
}
if(window.location.toString().indexOf("#contato")!=-1){
    ShowContact();
}

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