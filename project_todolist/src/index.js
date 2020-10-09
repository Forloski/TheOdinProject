/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

class Todos {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
}

class Projects {
  constructor(title, priority) {
    this.title = title;
    this.priority = priority;
    this.todoList = [];
  }
}

function initialPage() {
  let projectList = JSON.parse(localStorage.projectList);
  console.log(projectList);

  createTaskForm();
  eventListeners();
}

function insertTask() {
  document.getElementById('formBackground').style.display = 'block';
  document.getElementById('formContainer').style.display = 'block';
}

function closeTask() {
  document.getElementById('formBackground').style.display = 'none';
  document.getElementById('formContainer').style.display = 'none';
}

function submitTask() {
  const task = new Todos;

  task.title = document.getElementById('taskDescInput').value;
  task.description = document.getElementById('taskDescInput').value;
  task.dueDate = document.getElementById('taskDateInput').value;
  task.priority = document.querySelector('input[name="priority"]:checked').value;
  task.checklist = 'false';

  pushTaskLocalStorage(task);
}

function pushTaskLocalStorage(task) {
  const projectList = JSON.parse(localStorage.projectList);
  projectList.push(task);
  localStorage.projectList = JSON.stringify(projectList);
}

function eventListeners() {
  insertProjectsBtn.addEventListener('click', function(e) {
    insertProject();
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

function createTaskForm() {
  const container = document.getElementById('formContainer');
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