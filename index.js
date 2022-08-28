
let evento = document.getElementById('evt')

evento.addEventListener('click', () => {
   evento.innerHTML = 'olvidalo bebuchon'
})


let button = document.querySelector('.btn')

console.log(button)
button.addEventListener('onmouseover', function(event) {
   event.target.style.color = "black"
})


/*cambios*/