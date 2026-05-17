const addBtn = document.getElementById("addBtn");
const noteInput = document.getElementById("noteInput");
const notesContainer = document.getElementById("notesContainer");
addBtn.addEventListener("click", function () {
    const noteText = noteInput.value.trim();
    if (noteText === "") {
        alert("Please write something!");
        return;
    }
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    const notePara = document.createElement("p");
    notePara.innerText = noteText;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", function () {
        noteDiv.remove();
    });
    noteDiv.appendChild(notePara);
    noteDiv.appendChild(deleteBtn);
    notesContainer.appendChild(noteDiv);
    noteInput.value = "";
});