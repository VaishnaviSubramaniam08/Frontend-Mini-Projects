const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", function(){
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        alert("Please enter a task");
        return;
    }
    const li = document.createElement("li");
    li.classList.add("task");
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("task-left");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskPara = document.createElement("p");
    taskPara.innerText = taskText;
    checkbox.addEventListener("change", function(){
        taskPara.classList.toggle("completed");

    });
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });
  leftDiv.appendChild(checkbox);
    leftDiv.appendChild(taskPara);
    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";

});