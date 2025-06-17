//get the input text AND add it to the local storage and render the tasks on document

const todo_input = document.querySelector('#todo-input')
const add_task_btn = document.querySelector('#add-task-btn')
const todo_list = document.querySelector('#todo-list')

let tasksList = JSON.parse(localStorage.getItem('tasksList')) || []

renderTasks()

todo_input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') add_task_btn.click()
})

add_task_btn.addEventListener('click', () => {
    if(todo_input.value !== ''){
        addTask(todo_input.value.trim())
        todo_input.value = ''
    }
})

//deleting and marking the task completed
todo_list.addEventListener('click', (event) => {
    if(event.target.getAttribute('data-element') === 'delete'){
        deleteTask(event.target.parentElement.getAttribute('data-task'))
        event.target.parentElement.remove() //removing from document
    }else if(event.target.tagName === 'LI'){
        const li = event.target
        li.classList.toggle('completed')
        //update this event in the localStorage
        updateStatus(li.getAttribute('data-task'))
    }
})

function renderTasks(){
    todo_list.innerHTML = ''
    for (const task of tasksList) {
        todo_list.append(createLiElement(task))
    }
}

function createLiElement(task){
    const li = document.createElement('li')
    li.innerText = task.name
    li.setAttribute('data-task', task.name)
    if(task.completed === true){
        li.classList.add('completed')
    }
    const button = document.createElement('button')
    button.innerText = 'delete'
    button.setAttribute('data-element' , 'delete')
    li.append(button)
    return li
}

function addTask(taskName){
    let task = {
        name : taskName,
        completed : false
    }
    tasksList.push(task)

    //re-rendering tasks
    renderTasks()

    //adding task to local storage
    localStorage.setItem('tasksList', JSON.stringify(tasksList))
}

function deleteTask(taskName){
    for(let i = 0; i < tasksList.length; i++){
        if(tasksList[i].name === taskName){
            tasksList.splice(i,1) //deleting the entry
            localStorage.setItem('tasksList', JSON.stringify(tasksList))
            return
        }
    }
}

function updateStatus(taskName){
    for(let i = 0; i < tasksList.length; i++){
        if(tasksList[i].name === taskName){
            tasksList[i].completed = (tasksList[i].completed)? false : true
            localStorage.setItem('tasksList', JSON.stringify(tasksList))
            return
        }
    }
}

