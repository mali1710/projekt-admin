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
            <a onclick="deleteProject(${project.id})" class="btn btn-primary"><i class="fa fa-trash"></i></a>
          </div>
        </div>`;
      });
      projectList.innerHTML = output;
    });
}
// _____________________________________________________________________________
//Add
// _____________________________________________________________________________

function addProject() {
  let output = "";
  output += `<div class="col">
              <input type="text" id="p-image" class="form-control" placeholder="BildURL">
              </div>
              <div class="col">
              <input type="text" class="form-control" id="p-title" placeholder="Titel">
              </div>
      
              <div class="col">
              <input type="text" class="form-control" id="p-description" placeholder="Beskrivning">
              </div>
              <div class="col">
              <input type="text" class="form-control" id="p-url" placeholder="URL">
              </div>
               <a id="work-submit" onclick="newProject()" class="btn btn-primary"/>Spara</a>
              `;

  addPForm.innerHTML = output;
}

function newProject() {
  let image = document.getElementById("p-image").value;
  let title = document.getElementById("p-title").value;
  let description = document.getElementById("p-description").value;
  let pUrl = document.getElementById("p-url").value;

  fetch(urlP, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*"
      // "Content-type": "application/json"
    },
    body: JSON.stringify({
      image: image,
      title: title,
      description: description,
      url: pUrl
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

function updateProject(project) {
  let id = project;

  let url = urlP + id;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let output = "";

      data.forEach(input => {
        output += `<div class="col">
              <input type="text" id="input-image" class="form-control" placeholder="Bild" value="${input.image}">
              </div>
              <div class="col">
              <input type="text" class="form-control" id="input-title" placeholder="Titel" value="${input.title}">
              </div>
      
              <div class="col">
              <input type="text" class="form-control" id="input-description" placeholder="Beskrivning" value="${input.description}">
              </div>
              <div class="col">
              <input type="text" class="form-control" id="input-url" placeholder="URL" value="${input.url}">
              </div>
      
              <a id="education-update" onclick="sendProject(${input.id})" class="btn btn-primary"/>Spara</a>`;
      });
      projectForm.innerHTML = output;
    });
}
function sendProject(id) {
  const inputImage = document.getElementById("input-image").value;
  const inputTitle = document.getElementById("input-title").value;
  const inputDescription = document.getElementById("input-description").value;
  const inputUrl = document.getElementById("input-url").value;

  let jsonStr = JSON.stringify({
    id: id,
    image: inputImage,
    title: inputTitle,
    description: inputDescription,
    url: inputUrl
  });

  fetch(urlP, {
    method: "PUT",
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

function deleteProject(id) {
  let jsonStr = JSON.stringify({
    id: id
  });
  fetch(urlP, {
    method: "DELETE",
    body: jsonStr
  })
    .then(res => res.json())
    .then(data => fetchData(data))
    .catch(err => console.log(err));
}

// _____________________________________________________________________________
//End of delete functions
// _____________________________________________________________________________
