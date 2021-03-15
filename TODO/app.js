let todos = [];

const input = document.querySelector(".inputclass");
const selector = document.querySelector(".selector")
const ul = document.querySelector(".todo-list")
const option = document.querySelector(".option")

function addTask() {
    let newLi = document.createElement("li");
    newLi.innerHTML = document.getText


}


input.addEventListener("keydown", e => {
    let value = e.target.value;
    if(e.key == "Enter") {
        if(value.trim() != "") {
            todos.push(value.trim())
            e.target.value = "";
            console.log(todos)

            let listItem = document.createElement("li")
            listItem.className = "list-start"

            let listStart = document.createElement("div");
            listStart.className = "liststart";

            let message = document.createElement("div");
            message.innerText = value;
            message.className = "message";


        }
    }
})