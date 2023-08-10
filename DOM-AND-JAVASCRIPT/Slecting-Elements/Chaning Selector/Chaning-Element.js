// In this example, we're using chaining selectors to build a simple to-do list application:

// When the "Add Task" button is clicked, the JavaScript code selects the value of the input field and creates a new 'li' element for the task. It then adds a delete button and appends everything to the "ul" element (task list).

// When the delete button is clicked, the JavaScript code uses event delegation to check if the clicked element is a button. If it is, it selects the parent li element and removes it from the task list.


Chaining selectors are used to target specific elements within the DOM hierarchy for adding tasks and deleting tasks. This example demonstrates how chaining selectors can help you navigate through the DOM structure to manipulate elements effectively.



const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    const taskText = taskInput.value;
    if (taskText) {
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        // Clear input
        taskInput.value = "";
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
});

