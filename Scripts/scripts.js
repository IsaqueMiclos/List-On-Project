//Create a new task

function makeAnewTask() {
    let display = document.getElementById('floating-pop-up')
    display.style.display = 'block'
}

let ids = 0
let counterOfTasks = 0

function createNewTask() {
    counterOfTasks++
    ids++
    let display = document.getElementById('floating-pop-up')
    let task = document.getElementById('task-title')
    let principalTable = document.getElementById('table')
    
    if (counterOfTasks == 1) {
        if (!task.value == " ") {
            principalTable.innerHTML = `
                <p id="tasks" id="${ids}">
                    <span>${ids}</span>
                    <input type="checkbox" name="task0${ids}">
                    <span>${task.value}</span>
                </p>
            `
        } else {
            ids -= 1
            alert('Error! Please verify the contents')
        }
    } else {
        if (!task.value == " ") {
            principalTable.innerHTML += `
                <p id="tasks" id="${ids}">
                    <span>${ids}</span>
                    <input type="checkbox" name="task0${ids}">
                    <span>${task.value}</span>
                </p>
            `
        } else {
            ids -= 1
            alert('Error! Please verify the contents')
        }
    }

    display.style.display = 'none'
}

//Cancel the creation of taks

function cancelTheCreation() {
    let display = document.getElementById('floating-pop-up')
    display.style.display = 'none'
}

//Clear all existents tasks

function clearTasks() {
    if (counterOfTasks >= 1) {
        let principalTable = document.getElementById('table')
        principalTable.innerHTML = 'Cleaned, Try to create a new task'
        ids = 0
        counterOfTasks = 0
    }
}