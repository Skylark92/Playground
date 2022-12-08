function todo() {
  const app = document.querySelector(".app-todo");

  const input = app.querySelector(".input-todo");

  const button = app.querySelector(".button-todo");

  button.addEventListener("click", () => {
    const list = app.querySelector(".list-todo");
    const li = document.createElement("li");
    li.classList.add("item-todo");
    li.textContent = input.value;

    list.appendChild(li);
  });

  console.log(button);
}

todo();
