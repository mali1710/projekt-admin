console.log("Main");
//Variabler
const urlW = "http://localhost/WebbIII/projekt/Webapp/work.php/work/";
const urlE = "http://localhost/WebbIII/projekt/Webapp/education.php/";
const urlP = "http://localhost/WebbIII/projekt/Webapp/projects.php/";

const workList = document.getElementById("work-list");
const educationList = document.getElementById("education-list");
const projectList = document.getElementById("project-list");
const workForm = document.getElementById("work-form");
const addWForm = document.getElementById("add-work");

//Eventlisteners
window.addEventListener("load", fetchData());

/*
Functions
*/

// _____________________________________________________________________________
//Laddar in all data
// _____________________________________________________________________________

function fetchData() {
  showWork();
  showEducation();
  showProjects();
}
// _____________________________________________________________________________
//WORK
// _____________________________________________________________________________

//Laddar lista med jobb
function showWork() {
  fetch(urlW)
    .then(res => res.json())
    .then(data => {
      let output = "";

      data.forEach(work => {
        output += `<tr>
        <td>${work.dates}</td>
        <td>${work.company}</td>
        <td>${work.title}</td>
        <td><a onclick="updateWork(${work.id})" class="update"><i class="fa fa-pencil"></i></a></td>
        <td><a onclick="deleteWork(${work.id})" class="delete"><i class="fa fa-trash"></i></a></td>
      </tr>`;
      });
      workList.innerHTML = output;
    });
}
// _____________________________________________________________________________
//Add
// _____________________________________________________________________________

function addWork() {
  let output = "";
  output += `<div class="col">
        <input type="text" id="add-date" class="form-control" placeholder="Datum">
        </div>
        <div class="col">
        <input type="text" class="form-control" id="add-company" placeholder="Företag">
        </div>

        <div class="col">
        <input type="text" class="form-control" id="add-title" placeholder="Titel">
        </div>

         <a id="work-submit" onclick="sendAdd()" class="btn btn-primary"/>Spara</a>
        `;

  addWForm.innerHTML = output;
}

function sendAdd() {
  let date = document.getElementById("add-date").value;
  let company = document.getElementById("add-company").value;
  let title = document.getElementById("add-title").value;

  fetch(urlW, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json, text/plain, */*"
      // "Content-type": "application/json"
    },
    body: JSON.stringify({
      dates: date,
      company: company,
      title: title
    })
  })
    .then(res => res.json())
    .then(data => location.reload(true))
    .catch(err => console.log(err));
}

// _____________________________________________________________________________
//End of add-function
// _____________________________________________________________________________

// _____________________________________________________________________________
//Update
// _____________________________________________________________________________

function updateWork(work) {
  let id = work;

  let url = urlW + id;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let output = "";

      data.forEach(input => {
        output += `<div class="col">
        <input type="text" id="input-date" class="form-control" placeholder="Datum" value="${input.dates}">
        </div>
        <div class="col">
        <input type="text" class="form-control" id="input-company" placeholder="Företag" value="${input.company}">
        </div>

        <div class="col">
        <input type="text" class="form-control" id="input-title" placeholder="Titel" value="${input.title}">
        </div>

        <a id="work-update" onclick="sendUpdate(${input.id})" class="btn btn-primary"/>Spara</a>`;
      });
      workForm.innerHTML = output;
      console.log(output);
    });
}
function sendUpdate(id) {
  console.log(id);
  const inputDate = document.getElementById("input-date").value;
  const inputCompany = document.getElementById("input-company").value;
  const inputTitle = document.getElementById("input-title").value;

  let jsonStr = JSON.stringify({
    id: id,
    dates: inputDate,
    company: inputCompany,
    title: inputTitle
  });

  console.log(jsonStr);
  fetch(urlW, {
    method: "PUT",
    mode: "cors",
    headers: {
      Accept: "application/json, text/plain, */*"
      // "Content-type": "application/json"
    },
    body: jsonStr
  })
    .then(res => res.json())
    .then(data => location.reload(true))
    .catch(err => console.log(err));
}
// _____________________________________________________________________________
//End of update functions
// _____________________________________________________________________________
// _____________________________________________________________________________
//Delete
// _____________________________________________________________________________

function deleteWork(id) {
  let jsonStr = JSON.stringify({
    id: id
  });
  fetch(urlW, {
    method: "DELETE",
    mode: "cors",
    body: jsonStr
  })
    .then(res => res.json())
    .then(data => fetchData(data))
    .catch(err => console.log(err));
}

// _____________________________________________________________________________
//End of delete functions
// _____________________________________________________________________________
// _____________________________________________________________________________
//EDUCATION
// _____________________________________________________________________________

function showEducation() {
  fetch(urlE)
    .then(res => res.json())
    .then(data => {
      let output = "";

      data.forEach(e => {
        output += `<tr>
        <td>${e.date}</td>
        <td>${e.school}</td>
        <td>${e.program}</td>
        <td><a onclick="updateEducation(${e.id})" class="update"><i class="fa fa-pencil"></i></a></td>
        <td><a onclick="deletePost(${e.id})" class="delete"><i class="fa fa-trash"></i></a></td>
      </tr>`;
      });
      educationList.innerHTML = output;
    });
}
// _____________________________________________________________________________
//PROJECTS
// _____________________________________________________________________________

function showProjects() {
  fetch(urlP)
    .then(res => res.json())
    .then(data => {
      let output = "";

      data.forEach(project => {
        output += `<div class="card">
        <img class="card-img-top" src="${project.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a onclick="updateProject(${project.id})" class="btn btn-primary"><i class="fa fa-pencil"></i></a>
          <a onclick="deletePost(${project.id})" class="btn btn-primary"><i class="fa fa-trash"></i></a>
        </div>
      </div>`;
      });
      projectList.innerHTML = output;
    });
}
//Lägg till kurs via formulär
