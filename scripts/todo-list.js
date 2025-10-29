let todoList = [{
  name: '',
  dueDate: ''

}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  //if (todoList[0].name != '') {
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button onclick="
        spliceFunction(${i});
        renderTodoList();
        " class = "delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
    // } // closing if empty
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  }

}
function spliceFunction(i) {
  if (todoList.length > 1) {
    todoList.splice(i, 1);
  } else {
    todoList[0].name = '';
    todoList[0].dueDate = ''
  }
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateInputElement.value
  if (name != '' && dueDate != '') {

    if (todoList[0].name != '') {
      todoList.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
      });
    } else {
      console.log(todoList);
      todoList[0].name = name;
      todoList[0].dueDate = dueDate;
      console.log(todoList);
    }
    inputElement.value = '';
    renderTodoList();
  } else {
    alert('no empty fields allowed')
  }

}