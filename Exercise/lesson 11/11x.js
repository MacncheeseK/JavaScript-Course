const todoList = JSON.parse(localStorage.getItem('todoList'))||  [{name:'make dinner',
dueDate:'2023-08-09'},{name:'take out the trash', dueDate: '2023-08-09'}];

renderTodoList();
function renderTodoList(){
  let todoListHTML=''; 
  for(let i =0; i<todoList.length; i++){
    const todoObject=todoList[i];
    //const name= todoObject.name;
    //const dueDate= todoObject.dueDate;
    const {name,dueDate}=todoObject;
  
      const html = `
        <div>${name}</div>
        <div> ${dueDate}</div>
        <button onclick="todoList.splice(${i},1);renderTodoList();" class="delete-todo-button">Delete</button>
      `;
    todoListHTML+=html;
    
  }
  localStorage.setItem('todoList',JSON.stringify(todoList))
  document.querySelector('.js-todo-list').innerHTML =todoListHTML;
}


function addTodo(){
  const inputElemnt =document.querySelector('.js-name-input');
  const dateInputElement= document.querySelector('.js-due-date-input');
  const name = inputElemnt.value;
  const dueDate =dateInputElement.value;

  todoList.push({name, dueDate});
  console.log(todoList);
  inputElemnt.value = '';
  dateInputElement.value='';
  renderTodoList();
}