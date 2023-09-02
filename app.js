const h1 = document.querySelector('h1')
const todoList = document.querySelector('#todo-list')
//console.log(h1.textContent)

const button = document.querySelector('#todo-entry');
button.addEventListener('click', function (e) {
    const text = document.getElementById('todo-text');
    const li = document.createElement('li')
    li.textContent = text.value;
    todoList.appendChild(li);
    //console.log(text.value);
})