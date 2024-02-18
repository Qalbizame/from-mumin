const inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
const dataList = document.getElementById("dataList");
const btnDelete = document.getElementById("btnDelete");
btnAdd.addEventListener("click", ()=>{
  const data = inputTask.value;
  localStorage.setItem("data", data);
  const p = document.createElement("p");
  p.innerText = data;
  dataList.appendChild(p);
  inputTask.value = "";
});

btnDelete.addEventListener('click',()=>{
    dataList.remove();
})

const savedData = localStorage.getItem("data");
if (savedData) {
  const p = document.createElement("p");
  p.innerText = savedData;
  dataList.appendChild(p);
}