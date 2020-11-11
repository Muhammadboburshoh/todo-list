var elTodoForum = document.querySelector(".todo-list");
var elTodoInput = elTodoForum.querySelector(".todo-list__input");
var elTodoCheckbox = elTodoForum.querySelector(".todo-list__important-work");
var elTodoList = document.querySelector(".formed__list");

var todoList = [];

elTodoForum.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var todoInput = elTodoInput.value.trim();

  if(todoInput === "") {
    alert("Biror bir ish kiriting brat:)");
    return;
  }

  if(elTodoCheckbox.checked) {
    todoList.unshift(todoInput);
  }
  else {
    todoList.push(todoInput);
  }

  elTodoList.innerHTML = '';

  for(var todo of todoList) {
    var todoListItem = document.createElement("LI");
    todoListItem.classList.add("list-group-item", "bg-success")
    todoListItem.textContent = todo;
    elTodoList.appendChild(todoListItem);
  }

  elTodoInput.value = "";
  elTodoInput.focus();
})

