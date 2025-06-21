function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id || ev.target.innerHTML);
  ev.target.classList.add("dragging");
}
function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");

  let newTask = document.createElement("div");
  newTask.className = "task";
  newTask.setAttribute("draggable", "true");
  newTask.ondragstart = drag;
  newTask.textContent = data;

  ev.target.appendChild(newTask);

  let dragging = document.querySelector(".dragging");
  if (dragging) dragging.remove();
}
