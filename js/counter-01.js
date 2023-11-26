
const minusBtn = document.querySelector('[data-action="minus"]')
const plusBtn =  document.querySelector('[data-action="plus"]')
const counter =  document.querySelector('[data-counter]')

minusBtn.addEventListener('click', function(){
    counter.innerHTML > 1 ? --counter.innerHTML : counter.innerHTML + 0
}) 
plusBtn.addEventListener('click', function(){
    ++counter.innerHTML
    
}) 
