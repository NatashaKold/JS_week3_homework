const inputArea=document.getElementById('addTaskField');
const addButton=document.getElementById('addTaskButton');
const list=document.querySelector('.listContainer');
function createTask(){
    const newTask=document.createElement('li');
    newTask.textContent=inputArea.value;
    list.append(newTask);
    inputArea.value='';
};

list.addEventListener('click', function(checkTask){
    if (checkTask.target.tagName === 'LI'){
        checkTask.target.classList.toggle('checked');
    }
})