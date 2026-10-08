function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please fill the Input!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    addDeleteButton(newTask);


    document.getElementById("taskList").appendChild(newTask);
    taskInput.value = "";
}

function addDeleteButton(taskItem) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        taskItem.remove();
    };

    taskItem.appendChild(deleteBtn);
}


document.getElementById("deleteAllBtn").addEventListener("click", function () {
    const taskList = document.getElementById("taskList");

    if (taskList.children.length === 0) {
        alert("No tasks to delete!");
        return;
    }

    if (confirm("Are you sure you want to delete all tasks?")) {
        taskList.innerHTML = "";
    }
});

