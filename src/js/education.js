console.log("education");

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
          <td>${e.dates}</td>
          <td>${e.school}</td>
          <td>${e.program}</td>
          <td><a onclick="updateEducation(${e.id})" class="update"><i class="fa fa-pencil"></i></a></td>
          <td><a onclick="deleteEducation(${e.id})" class="delete"><i class="fa fa-trash"></i></a></td>
        </tr>`;
      });
      educationList.innerHTML = output;
    });
}

// _____________________________________________________________________________
//Add
// _____________________________________________________________________________

function addEducation() {
  let output = "";
  output += `<div class="col">
            <input type="text" id="e-date" class="form-control" placeholder="Datum">
            </div>
            <div class="col">
            <input type="text" class="form-control" id="e-school" placeholder="Skola">
            </div>
    
            <div class="col">
            <input type="text" class="form-control" id="e-program" placeholder="Program">
            </div>
    
             <a id="work-submit" onclick="newEducation()" class="btn btn-primary"/>Spara</a>
            `;

  addEForm.innerHTML = output;
}

function newEducation() {
  let date = document.getElementById("e-date").value;
  let school = document.getElementById("e-school").value;
  let program = document.getElementById("e-program").value;

  fetch(urlE, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json, text/plain, */*"
      // "Content-type": "application/json"
    },
    body: JSON.stringify({
      dates: date,
      school: school,
      program: program
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

function updateEducation(education) {
  let id = education;

  let url = urlE + id;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let output = "";

      data.forEach(input => {
        output += `<div class="col">
            <input type="text" id="input-dates" class="form-control" placeholder="Datum" value="${input.dates}">
            </div>
            <div class="col">
            <input type="text" class="form-control" id="input-school" placeholder="Skola" value="${input.school}">
            </div>
    
            <div class="col">
            <input type="text" class="form-control" id="input-program" placeholder="Program" value="${input.program}">
            </div>
    
            <a id="education-update" onclick="sendEducation(${input.id})" class="btn btn-primary"/>Spara</a>`;
      });
      educationForm.innerHTML = output;
      console.log(output);
    });
}
function sendEducation(id) {
  console.log(id);
  const inputDates = document.getElementById("input-dates").value;
  const inputSchool = document.getElementById("input-school").value;
  const inputProgram = document.getElementById("input-program").value;

  let jsonStr = JSON.stringify({
    id: id,
    dates: inputDates,
    school: inputSchool,
    program: inputProgram
  });

  console.log(jsonStr);
  fetch(urlE, {
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

function deleteEducation(id) {
  let jsonStr = JSON.stringify({
    id: id
  });
  fetch(urlE, {
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
