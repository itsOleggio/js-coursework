const task = [];

const input = document.getElementById('task__input');
const btn_send = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');

btn_send.addEventListener('click', (e) =>{
    e.preventDefault();

    if(input.value.length === 0){

        const error__message = document.createElement('p');

        if(!error__message){
            error__message.textContent = 'Введите задачу';
            console.log(error__message)
            document.body.appendChild(error__message);
        }
    } else {
        task.push(input.value);
        input.value = '';
        renderTask();
    }
})

function renderTask() {
    const list = document.getElementById('tasks__list');
    list.innerHTML = '';

    for(let i = 0; i < task.length; i++){
        const task__title = document.createElement('div');
        task__title.classList.add('task');
        task__title.innerHTML = `
            <div class="task__title">${task[i]}</div>
            <a href="#" class="task__remove">&times;</a>
        `;
        list.appendChild(task__title);
    }
}

list.addEventListener('click', (e) => {
    e.preventDefault();

    const removeBtn = e.target.closest('.task__remove');
    if (removeBtn) {
        const taskElement = removeBtn.closest('.task');
        const taskTitle = taskElement.querySelector('.task__title').textContent;

        const index = task.indexOf(taskTitle);
        if (index !== -1) {
            task.splice(index, 1);
            renderTask();
        }
    }
});
