document.addEventListener("DOMContentLoaded", () => {
  

  const submit= document.querySelector("#form");

  submit.addEventListener("submit", (e) => {
  e.preventDefault();
  todo()
  });
})

function todo(){
  const input = document.getElementById("new-task-description").value;
  const newTodo= document.createElement("li");
  const buttonCreate = document.createElement("button");

  newTodo=${input.value};
  document.getElementById("tasks").appendChild(newTodo);


  deleteBtn.textContent = "DONE";
  newTodo.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', () => newTodo.remove());

}