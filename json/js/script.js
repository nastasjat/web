tasks = new Array();

async function getInfo() {
    const requestURL = "https://api.jsonbin.io/v3/b/656b85b512a5d37659a22b6d";
    const request = new Request(requestURL);
    const response = await fetch(request);
    if (response.ok) {
        const task = await response.json();

        allTasks(task.record);
        showTasks();
    }
    else
        alert("Error");
}

function allTasks(el) {
    let list = el;

    for (x of list) {
        let t = new task(x.task, x.status);
        tasks.push(t);
    }
}

function showTasks() {
    done = document.getElementById('done');
    in_progress = document.getElementById('in-progress');
    to_do = document.getElementById('to-do');

    for (t of tasks) {
        const taskElement = document.createElement('li');
        taskElement.innerText = t.task;

        switch (t.status) {
            case 'done':
                done.appendChild(taskElement);
                break;
            case 'in progress':
                in_progress.appendChild(taskElement);
                break;
            case 'to do':
                to_do.appendChild(taskElement);
                break;
            default:
                break;
        }
    }
}

getInfo();