"use strict";

const buttonFirstName = document.querySelector("#firstName");
buttonFirstName.addEventListener("click", changeFirstName);

function changeFirstName() {
  const newFirstName = prompt("Enter new First name");
  const textFirstName = document.querySelector("#text");
  let textArr = textFirstName.textContent.split(" ");
  textArr[0] = newFirstName;
  textFirstName.textContent = textArr.join(" ");
}

const buttonLastName = document.querySelector("#lastName");
buttonLastName.addEventListener("click", changeLastName);

function changeLastName() {
  const newLastName = prompt("Enter new Last name");
  const textLastName = document.querySelector("#text");
  let textArr = textLastName.textContent.split(" ");
  textArr[1] = newLastName;
  textLastName.textContent = textArr.join(" ");
}

const taskList = document.querySelector(".todo-list");
// let list = [...taskList.querySelectorAll(".task")];

taskList.addEventListener("click", function (event) {
  if (event.target.className !== "add-button") {
    return;
  }

  addNewTask();

  // (function addNewTask() {
  //   const newTask = prompt("Enter new task");
  //   if (!newTask) return;

  //   let markup =
  //     list.slice(0, list.indexOf(event.target.parentElement)).join("") +
  //     `<li class="task">
  //           <button class="add-button" type="button">
  //             <svg class="icon-plus" width="20" height="20">
  //               <use href="./img/icons.svg#icon-plus"></use>
  //             </svg>
  //           </button>
  //           <button class="trash-button" type="button">
  //             <svg class="icon-bin" width="20" height="20">
  //               <use href="./img/icons.svg#icon-bin"></use>
  //             </svg>
  //           </button>
  //           <button class="done-button" type="button">
  //             <svg class="icon-done" width="20" height="20">
  //               <use href="./img/icons.svg#icon-done"></use>
  //             </svg>
  //           </button>
  //           <p class="task-text">${newTask}</p>
  //         </li>` +
  //     list.slice(list.indexOf(event.target.parentElement + 1)).join("");
  //   console.log(markup);
  //   taskList.innerHTML = markup;
  // })();
});

function addNewTask() {
  const newTask = prompt("Enter new task");
  if (!newTask) return;

  taskList.insertAdjacentHTML(
    "beforeend",
    `<li class="task">
          <button class="add-button" type="button">
            <svg class="icon-plus" width="20" height="20">
              <use href="./img/icons.svg#icon-plus"></use>
            </svg>
          </button>
          <button class="trash-button" type="button">
            <svg class="icon-bin" width="20" height="20">
              <use href="./img/icons.svg#icon-bin"></use>
            </svg>
          </button>
          <button class="done-button" type="button">
            <svg class="icon-done" width="20" height="20">
              <use href="./img/icons.svg#icon-done"></use>
            </svg>
          </button>
          <p class="task-text">${newTask}</p>
        </li>`
  );
}

taskList.addEventListener("click", function (event) {
  if (event.target.className !== "trash-button") {
    return;
  }
  const target = event.target;

  (function removeSomeTask() {
    target.parentElement.remove();
  })();
});

taskList.addEventListener("click", function (event) {
  if (event.target.className !== "done-button") {
    return;
  }
  const target = event.target.querySelector(".icon-done");

  if (target.style.display === "block") {
    target.style.display = "none";
  } else {
    target.style.display = "block";
  }
});

const mainAddButton = document.querySelector(".todo");

mainAddButton.addEventListener("click", function (event) {
  if (event.target.className !== "task-button") {
    return;
  }
  const target = event.target;

  addNewTask();
});