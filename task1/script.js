const input = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const button = document.querySelector(".input-section button");
const todoForm = document.querySelector(".todo-form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

showTasks();

button.onclick = () => {
  let usertyped = input.value;
  if (usertyped.length == 0) {
    window.alert("Todo item can not be empty!!");
  } else {
    let  LocalStoragereceived  = localStorage.getItem("New Todo");
    if ( LocalStoragereceived  == null) {
      arr = [];
    } else {
      arr = JSON.parse( LocalStoragereceived );
    }
    arr.push(usertyped);
    localStorage.setItem("New Todo", JSON.stringify(arr));
    showTasks();
  }
};

function showTasks() {
  let  LocalStoragereceived  = localStorage.getItem("New Todo");
  if ( LocalStoragereceived  == null) {
    arr = [];
  } else {
    arr = JSON.parse( LocalStoragereceived );
  }
  let newLine = "";
  arr.forEach((element, index) => {
    newLine += `<li>
        ${element} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i> </span>
      </li>`;
  });
  todoList.innerHTML = newLine;
  input.value = "";
}

function deleteTask(index) {
  let LocalStoragereceived = localStorage.getItem("New Todo");
  arr = JSON.parse( LocalStoragereceived );
  arr.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(arr));
  showTasks();
}
Footer