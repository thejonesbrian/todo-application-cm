const h1 = document.querySelector('h1')
console.log(h1.textContent)

const button = document.querySelector('#todo-entry');
button.addEventListener('click', function (e) {
    console.log('click')
})