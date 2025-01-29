function addTask() {
    const input = document.getElementById('tf-input').value;
    if (input.trim() === '') {
        alert('Please enter a task!');
        return;
    }
    const task = document.createElement('li');
    task.textContent = input;
    task.id =
        new Date().valueOf().toString() +
        Math.random().toString(36).substring(2, 7);
    task.classList.add('list-item');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => {
      editTask(task.id);
    });
    task.appendChild(editButton);
    document.getElementById('task-container').appendChild(task);
    document.getElementById('tf-input').value = '';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      deleteTask(task.id);
    });
    task.appendChild(deleteButton);
    document.getElementById('task-container').appendChild(task);
    document.getElementById('tf-input').value = '';
}

function editTask(id) {
    const task = document.getElementById(id);
    taskToEdit = task;
    document.getElementById('tf-input').value = '';
    document.getElementById('tf-input').setAttribute('placeholder', 'Edit a task');
    const button = document.querySelector('.button');
    button.textContent = 'Edit';
    button.setAttribute('onclick', `saveTask('${id}')`);
}

function saveTask(id) {
    const input = document.getElementById('tf-input').value;
    if (input.trim() === '') return;
    taskToEdit.firstChild.textContent = input;
    document.getElementById('tf-input').value = '';
    document.getElementById('tf-input').setAttribute('placeholder', 'Enter a task')
    const button = document.querySelector('.button');
    button.textContent = 'Add Task';
    button.setAttribute('onclick', 'addTask()');
    taskToEdit = null;
}

function deleteTask(id) {
    const task = document.getElementById(id);
    task.remove();
  }