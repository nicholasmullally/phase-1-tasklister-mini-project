document.addEventListener("DOMContentLoaded", () => {
  // your code here

    /*let form = document.querySelector("form")
    //form.addEventListener("submit", (e) => {
      e.preventDefault()
      buildToDo(e.target.new_todo.value);
      form.reset()
    })
  })

  function buildToDo(todo) {
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.addEventListener("click", handleDelete)
    btn.textContent = "x"
    p.textContent = `${todo} `
    p.appendChild(btn)
    console.log(p)
    document.querySelector("#todo_container").appendChild(p)

  }

  function handleDelete(e) {
    e.target.parent.Node.remove()
  }
  */
  const taskList = new TaskList();
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  const taskUl = document.getElementById("tasks");
  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    e.target.reset();
    renderApp();
  });
  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});
