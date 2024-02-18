let form = document.querySelector('form');
let input  = document.querySelector('input');
let div = document.querySelector('div');

form.addEventListener('click',(e)=>{
    e.preventDefault();
    input.value;
    let p = document.createElement('p')
    p.innerHTML = input.value;
    div.appendChild(p);
    input.value = '';
})
