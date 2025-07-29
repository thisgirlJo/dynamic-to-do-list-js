document.addEventListener('DOMContentLoaded', function() {
    addButton = document.getElementById(add-task-btn);
    taskInput = document.getElementById(task-input);
    taskList = document.getElementById(task-list);

    function addTask() {
        taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        var li = document.createElement('li');
        li.textContent = taskText;

        const button = document.createElement('button');
        button.textContent = "Remove";
        button.className = "remove-btn";
        classList.add('btn', 'btn-danger');
        button.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append the  button to li
        li.appendChild(button)

        // Append li to taskList
        taskList.appendChild(li)

        // Clear the input field
        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});