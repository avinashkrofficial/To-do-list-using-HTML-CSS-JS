const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

function deleteAllTasks() {
    listContainer.innerHTML = ""; 
    saveData(); 
}

function deleteSTasks() {
    const checkedItems = document.querySelectorAll("#list-container .checked"); 
    checkedItems.forEach((item) => {
        item.remove(); 
    });
    saveData(); 
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); 
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); 
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

document.querySelector(".Deletebtn:nth-child(2)").addEventListener("click", deleteSTasks);

showTask();
