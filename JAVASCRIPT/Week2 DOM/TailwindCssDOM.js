let body = document.querySelector('body');
let heading1 = document.querySelector('h1');
let btn = document.querySelector('button');
let p = document.querySelector('p');

heading1.classList.add("text-blue-600","text-center","bg-white","p-4","m-4","rounded-lg","text-indigo-800","uppercase")
body.classList.add("bg-indigo-800")
p.classList.add("text-white","text-center")
btn.classList.add("bg-white","text-indigo-800","px-4" ,"rounded-lg")



function App(){
   p.innerText = "Welcome to JavaScript Events"
}