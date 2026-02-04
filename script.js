const taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        li.onclick = () => toggleTask(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteTask(index);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value === "") return;

    tasks.push({ text: input.value, completed: false });
    input.value = "";
    saveTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

renderTasks();