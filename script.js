const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");

  const taskLabel = document.createElement("label");
  taskLabel.classList.add("task-text");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  taskLabel.appendChild(checkbox);
  taskLabel.appendChild(document.createTextNode(taskText));

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "×";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  taskInput.value = "";
});
