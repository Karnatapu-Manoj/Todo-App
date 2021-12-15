let addTodoButtonEle = document.getElementById("addTodoButton");
let todosContainer = document.getElementById("todoItemsContainer");
console.log(todosContainer);
console.log(typeof (todosContainer));

let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
todosContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkboxInput";
inputElement.classList.add("checkbox-input");
todoElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("d-flex", "flex-row", "label-container");
todoElement.appendChild(labelContainer);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkboxInput");
labelElement.textContent = "learn HTML";
labelElement.classList.add("checkbox-label");
labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteIconContainer);

let deleteIcon = document.createElement("i");
deleteIcon.classList.add("fas", "fa-trash-alt", "delete-icon");
deleteIconContainer.appendChild(deleteIcon);