//Variabler
const urlE = "https://www.mallind.se/webapp/education.php/education/";
const urlP = "https://www.mallind.se/webapp/projects.php/projects/";
const urlW = "https://www.mallind.se/webapp/work.php/work/";
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
