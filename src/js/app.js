console.log("Main");
//Variabler
const urlE = "http://localhost/WebbIII/projekt/Webapp/education.php/education/";
const urlP = "http://localhost/WebbIII/projekt/Webapp/projects.php/projects/";
const urlW = "http://localhost/WebbIII/projekt/Webapp/work.php/work/";
const workForm = document.getElementById("work-form");
const educationForm = document.getElementById("education-form");
const projectForm = document.getElementById("project-form");

const addWForm = document.getElementById("add-work");
const addEForm = document.getElementById("add-education");
const addPForm = document.getElementById("add-project");

const workList = document.getElementById("work-list");
const educationList = document.getElementById("education-list");
const projectList = document.getElementById("project-list");

//Eventlisteners
window.addEventListener("load", fetchData());

// _____________________________________________________________________________
//Laddar in all data
// _____________________________________________________________________________

function fetchData() {
  showWork();
  showEducation();
  showProjects();
}
