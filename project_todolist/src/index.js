/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

class Todos {
  constructor(title, description, dueDate, priority, notes, checklist, id, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.id = id;
    this.project = project;
  }
}

class Projects {
  constructor(title, id) {
    this.title = title;
    this.taskList = [];
    this.id = title;
  }
}

function initialPage() {
  //let list = [];
  //localStorage.clear();
  //localStorage.projectList = JSON.stringify(list);
  const projectList = JSON.parse(localStorage.projectList);
  console.log(projectList);

  populateProjectList();
  createTaskForm();
  createProjectForm();
  eventListeners();
}

function populateProjectList() {
  const projectList = JSON.parse(localStorage.projectList);

  projectList.map((project) => createProjectToHTML(project));
}

function createTaskToHTML(task) {
  const taskContainer = document.getElementById('todosContainer');
  const taskDiv = document.createElement('div');

  taskDiv.innerHTML = `
    <button type="button" class="collapsible" id="task${task.id}">${task.title}</button>
    <div class="content">
      <p> ${task.description} - 
      ${task.priority} -
      ${task.dueDate}</p>
    </div>`;

  taskContainer.appendChild(taskDiv);

  const taskBtn = document.getElementById(`task${task.id}`);
  collapsible(taskBtn);
}

function createProjectToHTML(project) {
  const projectContainer = document.getElementById('projectsContainer');
  const projectDiv = document.createElement('div');

  projectDiv.innerHTML = `
    <button type="button" class="collapsible" id="${project.title}">${project.title}</button>
  `;

  projectContainer.appendChild(projectDiv);

  const projectBtn = document.getElementById(`${project.title}`);
  projectActive(projectBtn);
}

function insertTask() {
  document.getElementById('formBackground').style.display = 'block';
  document.getElementById('taskFormContainer').style.display = 'block';
}

function closeTask() {
  document.getElementById('formBackground').style.display = 'none';
  document.getElementById('taskFormContainer').style.display = 'none';
}

function projectStorageSize(project) {
  return project.taskList.length;
}

function localStorageSize() {
  const projectList = JSON.parse(localStorage.projectList);
  return projectList.length;
}

function submitTask() {
  const task = new Todos;

  task.title = document.getElementById('taskTitleInput').value;
  task.description = document.getElementById('taskDescInput').value;
  task.dueDate = document.getElementById('taskDateInput').value;
  task.priority = document.querySelector('input[name="priority"]:checked').value;
  task.checklist = 'false';

  clearSubmitTaskBtn();
  createTaskToHTML(task);
  pushTaskToProject(task);
}

function clearSubmitTaskBtn() {
  document.getElementById('taskTitleInput').value = '';
  document.getElementById('taskDescInput').value = '';
  document.getElementById('taskDateInput').value = '';
}

function pushTaskToProject(task) {
  const projectList = JSON.parse(localStorage.projectList);
  const activeProject = projectList.find((project) => 
    project.title === checkActiveProject());
  activeProject.push(task);
  localStorage.projectList = JSON.stringify(projectList);
}

function insertProject() {
  document.getElementById('formBackground').style.display = 'block';
  document.getElementById('projectFormContainer').style.display = 'block';
}

function closeProject() {
  document.getElementById('formBackground').style.display = 'none';
  document.getElementById('projectFormContainer').style.display = 'none';
}

function submitProject() {
  const project = new Projects;

  project.title = document.getElementById('projectTitleInput').value;

  clearSubmitProjectBtn();
  createProjectToHTML(project);
  pushProjectLocalStorage(project);
}

function clearSubmitProjectBtn() {
  document.getElementById('projectTitleInput').value = '';
}

function pushProjectLocalStorage(project) {
  const projectList = JSON.parse(localStorage.projectList);
  projectList.push(project);
  localStorage.projectList = JSON.stringify(projectList);
}


function eventListeners() {
  insertProjectsBtn.addEventListener('click', function(e) {
    insertProject();
    console.log(e);
  });

  btnCloseProject.addEventListener('click', function(e) {
    closeProject();
    console.log(e);
  });

  btnSubmitProject.addEventListener('click', function(e) {
    submitProject();
    console.log(e);
  });

  insertTodoBtn.addEventListener('click', function(e) {
    insertTask();
    console.log(e);
  });

  btnCloseTask.addEventListener('click', function(e) {
    closeTask();
    console.log(e);
  });

  btnSubmitTask.addEventListener('click', function(e) {
    submitTask();
    console.log(e);
  });
}

function createProjectForm() {
  const container = document.getElementById('projectFormContainer');
  container.innerHTML = `
  <div class="formGroup" id="title">
    <h4>ADD PROJECT</h4>
    <a class="btnClose" id="btnCloseProject" href="#">&#10005</a>
    <hr class="new1">
  </div>
  <div class="formGroup" id="projectTitleContainer">
    <label for='projectTitleInput'>Project Title</label>
    <input type='text' id="projectTitleInput">
  </div>
  <div class="formGroup" id="submitPrjBtnContainer">
      <a class="btnClose" id="btnSubmitProject" href="#">SUBMIT PJCT</a>
  </div>
  `;
}

function createTaskForm() {
  const container = document.getElementById('taskFormContainer');
  container.innerHTML = `
    <div class="formGroup" id="title">
      <h4>ADD TASK TO PROJECT</h4>
      <a class="btnClose" id="btnCloseTask" href="#">&#10005</a>
      <hr class="new1">
    </div>
    <div class="formGroup" id="taskTitleContainer">
      <label for='taskTitleInput'>Task Title</label>
      <input type='text' id="taskTitleInput">
    </div>
    <div class="formGroup" id="taskDescContainer">
      <label for='taskDescInput'>Task Description</label>
      <input type='text' id="taskDescInput">
    </div>
    <div class="formGroup" id="taskDateContainer">
      <label for='taskDateInput'>Due Date</label>
      <input type='date' id="taskDateInput">
    </div>
    <div class="formGroup" id="taskPriority">
      <label for="priority">What's this task priority?</label>
    </div>
    <div class="formPriority">
      <input class="formPriorityInput" type="radio" name="priority" id="prioLow" value="low" checked="">
      <label class="formPriorityInputLabel" for="prioLow">Low</label>
      &nbsp;
      <input class="formPriorityInput" type="radio" name="priority" id="prioAverage" value="average">
      <label class="formPriorityInputLabel" for="prioAverage">Average</label>
      &nbsp;
      <input class="formPriorityInput" type="radio" name="priority" id="prioHigh" value="high">
      <label class="formPriorityInputLabel" for="prioHigh">High</label>
    </div>
    <div class="formGroup" id="submitBtnContainer">
      <a class="btnClose" id="btnSubmitTask" href="#">SUBMIT TASK</a>
    </div>`;
}

function collapsible(element) {
  element.addEventListener('click', function() {
    element.classList.toggle('active');
    const content = element.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

function projectActive(element) {
  element.addEventListener('click', function() {
    const projectActive = Array.from(document.getElementsByClassName('projectActive'));

    projectActive.map((project) => project.classList.toggle('projectActive'));

    element.classList.toggle('projectActive');
  });
}

function checkActiveProject() {
  const projectActive = Array.from(document.getElementsByClassName('projectActive'));

  return projectActive[0].innerHTML;
}

initialPage();




 /*if (typeof(Storage) !== 'undefined') {
  const teste = new Things(10, 20, 30);
  const barbada = new Things(1, 2, 3);
  const list = [];
  list.push(teste);
  list.push(barbada);
  console.log(list);
  console.log(list[0]);
  
  console.log(JSON.parse(localStorage.things));
}
localStorage.things = JSON.stringify(list);*/