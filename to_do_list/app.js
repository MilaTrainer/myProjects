"use strict";
//  LocalStorage обновляется каждый раз, когда изменяются данные (при удалении, редактировании или добавлении задачи).

const btnSend = document.querySelector("#btnSend");
const inputNameTask = document.querySelector("#name");
const authorNameTask = document.querySelector("#pass");
const selectTask = document.querySelector("#select");
const listTaskPage = document.querySelector(".list_task");
const errText = document.querySelector(".text_err");
let todos = []; ///хранилище(за счет него у на актуальная инфа на странице.)

const todosAnswerLocalStoraage = JSON.parse(localStorage.getItem('todos'));
if (todosAnswerLocalStoraage) {
  renderTaskPage(todosAnswerLocalStoraage);
  todos = todosAnswerLocalStoraage;
}
//listener
btnSend.addEventListener("click", createSendTask); ///обработчик по созданию задачи

///func

/// основная логика.
function createSendTask(event) {
  event.preventDefault(); //отключение браузерного поведения
  if (validateForm()) {
    /// проверка на заполнение всех полей
    errText.classList.remove("opacity");
    return; ///выводит оповещение о том что не все поля заполнены и останавливает функцию
  }

  errText.classList.add("opacity"); //убирает обратно ошибку
  todos.push(creteObjectTask()); // добавляет задачу в виде обьекта в хранилще => из данных что ввел пользователь
  console.log(todos);
  localStorage.setItem('todos', JSON.stringify(todos));
  sortTasks(todos); // сортирует наш массив, что бы задача которая была добавлена последней стала первой.
  renderTaskPage(todos); /// передается в метод который отрисовыает данные из массив на странице.
}
function sortTasks(arr) {
  const copyArr = arr.map((item, index) => {
    /// в каждую задачу добавляется поле counerId если его там нет
    if (item.hasOwnProperty("counterId")) return item;
    item.counterId = index + 1; /// получает id на один больше чем index что бы цыфры между собой не пересекались
    return item;    // В каждую задачу добавляется поле counterId, если его там нет
  });
  todos = copyArr.sort((a, b) => {
    /// сортирует по убыванию
    return b.counterId - a.counterId;// Сортируем задачи по убыванию
  });
}

///функции рендера
function renderTaskPage(arr) {
  /// получает массив с самыми актуальными данными в нем
  listTaskPage.innerHTML = ""; /// очищает старые данные
  console.log(arr);
  arr.forEach((item) => {
    ///перебирает получаенный массив и в функцию на какждой итеррации передает елмент массива(обьект с нашей задачей)
    createRenderTask(item);
  });
}
function createRenderTask(item) {
  // <p class='date_task task'>Date task:<span>${new Date(id)}</span></p>
  ///вызывается стольк раз сколько задач в массиве, при этом получая каждый раз рвазный обьект.
  const { name, author, status, id } = item; /// достаем из обьекта поля которые нам нужны
  const template = `
  <div class ='container_item'>
  <p class='task_name task'> Name task: <span>${name} </span></p>
  <p class='task_author task'>Author task:<span>${author}</span></p>
  <p class='task_status task'>Status task:<span>${status}</span></p>
 
  <button class='btn_del' onclick ='delTasks(${id})' > <img width='30px' src="./images/delete-icon-1.svg" alt=""></button>
  <button class='btn_edit' onclick ='editTask(${id})' >Edit</button>
  </div>


  <div class='edit_item none' id=${id}>
  <div class='wrapper_item-edit'>
  <label>Name edit</label>
  <input type='text' value="${name}" id='inputEditName' />
  </div>
    <div class='wrapper_item-edit'>
  <label>Author edit</label>
  <input type='text' value="${author}" id='inputEditAuthor' />
  </div>
    <div class='wrapper_item-edit'>
        <select id="selectEdit">
          <option hidden value="">Выберите тип задачи</option>
          <option value="inprogress">In progress</option>
          <option value="dedline">Dedline</option>
          <option value="error">Error</option>
        </select>   
  </div>

  <div class='wrapper_item-edit buttuns'>
  
  <button class='button' onClick='saveEditTask(${id},event)' >Save</button>
  <button onclick='exitFuncEdit(event)' >Cancel</button>
  </div>
  </div>
  `; /// /создаем динамическую верстку
  const li = document.createElement("li"); /// создаем родителя для динамисеской верстки
  li.insertAdjacentHTML("beforeend", template); /// помещаем в родителя динамическую верстку(используем этот метод что бы не потерять инлайновый onclick)
  listTaskPage.appendChild(li); // добавляем заполненого родителя в html.
}

///функции взаимодействия элементов и пользователей

function delTasks(id) {
  // получает ади той задачи по которой кликнули
  const filterArr = todos.filter((item) => item.id !== id); /// создает новый массив уже без этой задачи


  // новове 
  todos = filterArr; // Обновляем глобальный массив todos
  sortTasks(todos); // Сортируем обновленный массив
  localStorage.setItem('todos', JSON.stringify(todos)); // Сохраняем обновленный массив в LocalStorage

  // до этого
  // sortTasks(filterArr); //фильтруе заново новый полученный массив без удаленной задачи
  renderTaskPage(todos); /// передает обновленный массив в логику отрисовки на стринце
}

function editTask(id) {
  // получает ади той задачи по которой кликнули
  const editItemArr = document.querySelectorAll(".edit_item"); /// находит все задачи которые уже есть
  editItemArr.forEach((item) => {
    if (+item.id === id) {
      /// сравнивает их с полученным айди
      item.classList.remove("none"); /// при совпадении открывает форму редактирования именно у той задачи по которой кликнули.
    }
  });
}

function exitFuncEdit(event) {
  /// получает элемент по которому кликнули
  const parent = event.target.closest(".edit_item"); /// находит его ближайшего родителя
  parent.classList.add("none"); /// закрывает у него форму редактирования
}

function saveEditTask(id, event) {
  /// получпает элемент и айди той формы которую редактируют
  const parent = event.target.closest(".edit_item"); // у этой формы находят родителя ближайшего с таким классом
  const inputEditName = parent.querySelector("#inputEditName").value; //у найденного родителя ищут инпуты и забирают их значения
  const inputEditAuthor = parent.querySelector("#inputEditAuthor").value;
  const selectEditTask = parent.querySelector("#selectEdit").value;

  const newTodos = todos.map((item) => {  // Обновляем задачу по id
    /// берем актуальный массив задач
    if (item.id === id) {
      /// находим нужную нам задачу по айди который пришел
      item.name = inputEditName; /// заменяем в этой задаче поля на те данные что мы нашли чуть выше
      item.author = inputEditAuthor;
      item.status = selectEditTask;
      return item; /// возвращаем измененный обьект в новый массив
    }
    return item; /// возвращаем страый обьект в новый массив
  });

  //новый код 
  todos = newTodos; // Обновляем глобальный массив todos
  localStorage.setItem('todos', JSON.stringify(todos)); // Сохраняем обновленный массив в LocalStorage
  renderTaskPage(todos); // Отрисовываем новый массив на странице

  // старый код
  renderTaskPage(newTodos); /// отрисовываем новый массив на странице
}

///шаблонные функции
function validateForm() {
  ///возвращ true или false в зависимости от того все ли поля заполнены
  return (
    inputNameTask.value === "" ||
    authorNameTask.value === "" ||
    selectTask.value === ""
  );
}

const objectTask1 = [];
function creteObjectTask() {
  /// забирает данные из инпутов, очищает инпуты, возвразает на месте вызова обьект из данных что были введены пользователем
  const obj = {
    id: new Date().getTime(), // получает кол-во милисекунд с момента создания js
    name: inputNameTask.value,
    author: authorNameTask.value,
    status: select.value,
  };

  inputNameTask.value = "";
  authorNameTask.value = "";
  selectTask.selectedIndex = 0; // сбасывет селект на default
  return obj;
}








