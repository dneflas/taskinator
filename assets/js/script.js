var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do")

var createTaskHandler = function(event){
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is anew task!";
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
