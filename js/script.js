const list = [];

function remove(index) {
  if (index > -1) {
    list.splice(index, 1);
  } else {
    alert("item does not exist");
  }
  showList();
}

function showList() {
  const output = document.getElementById("output");
  let str=""
  output.innerHTML = ""
  for(let i=0; i<list.length; i++) {
    str+=`<div class = "list-items">${i+1}. 
    <p class="todo-p">${list[i]}</p> 
    <button class="btn btn-sm btn-outline-success" type="button" onclick="remove(${i})">Completed</button>
    </div>`;
  }
  output.innerHTML = str;
}

function submitHandle() {
  const item = document.getElementById("item");
  if(item.value==="") {
    alert("field is empty");
} else {
  list.push(item.value);
  item.value = "";
}
  showList();
}