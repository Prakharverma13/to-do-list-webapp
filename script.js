function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerText = taskText;

  // Mark task as complete on click
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Right click to delete
  li.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
