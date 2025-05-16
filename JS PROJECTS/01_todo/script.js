const input = document.getElementById('todo-input')
const addBtn = document.getElementById('add-task-btn')
const todoListElement = document.getElementById('todo-list')

checkTasksInLocalStorageAndDisplay(todoListElement)

addBtn.addEventListener('click', () => {
    const taskText = input.value?.trim()

    //Security check for the numbers and empty value
    if (taskText !== '' && isNaN(taskText) === true) {
        //TODO
        addTaskToLocalStorage(taskText)
        displayTemporaryTaskToDOM(taskText, todoListElement)
        input.value = ''
    } else {
        input.value = ''
        alert('Input is empty or numeric ...')
    }
})

todoListElement.addEventListener('click', (event) => {
    const tasksListArray = getTasksFromLocalStorage()

    //If user clicks on li
    if (event.target.tagName === 'LI') {
        const li = event.target
        li.classList.toggle('completed')
        const liText = li.getAttribute('data-task')
        //Matching the li with task Object in local storage
        for (let i = 0; i < tasksListArray.length; i++) {
            if (tasksListArray[i].task === liText) {
                if (li.classList.contains('completed')) {
                    tasksListArray[i].completed = true
                } else {
                    tasksListArray[i].completed = false
                }
                break
            }
        }
    }//------------If user clicks on delete button--------------
    else if (event.target.classList.contains('delete-btn')) {
        const deleteBtn = event.target
        const li = deleteBtn.parentElement
        const liText = li.getAttribute('data-task')
        for (let i = 0; i < tasksListArray.length; i++) {
            if (tasksListArray[i].task === liText) {
                tasksListArray.splice(i, 1)
                li.remove()
                break
            }
        }
    }
    modifyLocalStorage(tasksListArray)
})

function createTaskObject(taskText) {
    const task = {
        task: taskText,
        completed: false
    }
    return task
}

function checkTasksInLocalStorageAndDisplay(todoListElement) {
    const tasksListArray = getTasksFromLocalStorage()
    tasksListArray.forEach((taskObj) => {
        const li = createLiTaskElement(taskObj.task)
        if (taskObj.completed === true) {
            li.classList.add('completed')
        }
        todoListElement.append(li)
    })
}

function displayTemporaryTaskToDOM(taskText, todoListElement) {
    const li = createLiTaskElement(taskText)
    todoListElement.append(li)
}

function createLiTaskElement(taskText) {
    const li = document.createElement('li')
    li.setAttribute('data-task', taskText)
    li.innerText = taskText
    const button = document.createElement('button')
    button.innerText = 'Delete'
    button.classList.add('delete-btn')
    li.append(button)
    return li
}

function getTasksFromLocalStorage() {
    const tasksListString = localStorage.getItem('tasks')
    const tasksListArray = JSON.parse(tasksListString)
    return tasksListArray || []
}

function addTaskToLocalStorage(taskText) {
    const taskObj = createTaskObject(taskText)
    //getTasksFromLocalStorage() returns array always 
    const tasksListArray = getTasksFromLocalStorage()
    tasksListArray.push(taskObj) //adding task object to array
    //Updating Local storage
    modifyLocalStorage(tasksListArray)
}

function modifyLocalStorage(tasksListArray) {
    localStorage.setItem('tasks', JSON.stringify(tasksListArray))
}