const todoInput = document.getElementById('todo-input')
const addTaskBtn = document.getElementById('add-task-btn')
const todoLiContainer = document.getElementById('todo-list')

renderTasks(todoLiContainer)

todoInput.addEventListener('keyup',(event)=>{
    if(event.key === 'Enter') addTaskBtn.click()
})

addTaskBtn.addEventListener('click', () => {
    const taskText = todoInput.value?.trim()

    //Security check for the numbers and empty value
    if (taskText !== '' && isNaN(taskText) === true) {
        //TODO
        addTaskToLocalStorage(taskText)
        displayTemporaryTaskToDOM(taskText, todoLiContainer)
        todoInput.value = ''
    } else {
        todoInput.value = ''
        alert('Input is empty or numeric ...')
    }
})

todoLiContainer.addEventListener('click', (event) => {
    const tasksListArray = getTasksFromLocalStorage()

    //If user clicks on li
    if (event.target.tagName === 'LI') {
        const li = event.target
        const liText = li.getAttribute('data-task')
        li.classList.toggle('completed')
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
    }//-----------DELETING THE TASK--------------
    else if (event.target.classList.contains('delete-btn')) {
        const deleteBtn = event.target
        const li = deleteBtn.parentElement
        const liText = li.getAttribute('data-task')
        for (let i = 0; i < tasksListArray.length; i++) {
            if (tasksListArray[i].task === liText) {
                tasksListArray.splice(i, 1) // removing task from localStorage
                li.remove() // removing task from DOM
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

function renderTasks(todoLiContainer) {
    const tasksListArray = getTasksFromLocalStorage()
    tasksListArray.forEach((taskObj) => {
        const li = createLiTaskElement(taskObj.task)
        if (taskObj.completed === true) {
            li.classList.add('completed')
        }
        todoLiContainer.append(li)
    })
}

function displayTemporaryTaskToDOM(taskText, todoLiContainer) {
    const li = createLiTaskElement(taskText)
    todoLiContainer.append(li)
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