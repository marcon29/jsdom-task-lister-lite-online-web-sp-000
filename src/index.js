document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let allTaskItems = []
  const taskList = document.getElementById("tasks")
  const taskItemInput = document.getElementById("new-task-description")

  document.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskItem = taskItemInput.value;
    saveTaskItem(taskItem);  
    addItemToTaskList(taskItem);
    clearFormInput();
    }
  )

  function saveTaskItem(taskItem) {
    allTaskItems.push(taskItem);
  }

  function addItemToTaskList(taskItem) {
    const taskItemElement = document.createElement("li")
    taskItemElement.textContent = taskItem
    taskList.appendChild(taskItemElement)  
  }

  function clearFormInput() {
    taskItemInput.value = ""
  }
});



