const addButton = document.getElementById("addButton");
const taskInputs = document.getElementsByClassName("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    const taskName = taskInputs[0].value.trim();
    const age = taskInputs[1].value;
    
    if (taskName !== "" && age !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<h3>${taskName}</h3> <hr> <h3>Age: ${age} </h3> <button class="deleteButton">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInputs[0].value = "";
        taskInputs[1].value = "";
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteButton")) {
        event.target.parentNode.remove();
    }
});
