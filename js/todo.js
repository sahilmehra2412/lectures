let input = document.getElementById("input");
let ul = document.getElementById("ul");

let i = 1;

function addTask() {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = "Delete";
    button.setAttribute("onclick", `deleteTask(${i})`);
    li.innerHTML = input.value;
    li.id = `li${i}`;
    i++;
    li.append(button);
    ul.append(li);
}

function deleteTask(num) {
    let li = document.getElementById(`li${num}`);
    console.log("Hello");
    li.parentNode.removeChild(li);
}