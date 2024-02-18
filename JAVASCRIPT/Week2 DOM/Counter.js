let count = document.getElementById('count');
let counter = 0

function Count(){
    count.innerHTML = counter++;
}

function CountDown(){
    count.innerHTML = counter--;   
}