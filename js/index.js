





function editTodo(eventObject){
    const editbutton=eventObject.target
    const InputField=document.querySelector("#input_form"); 
    const inputvalue=editbutton.parentNode.parentNode.children[1].innerHTML
    InputField.value=inputvalue
    const li=editbutton.parentNode.parentNode.parentNode
    li.remove();     
}

function addListenersToEditebuttons (){
    const EditCollection = document.querySelectorAll(".edit_btn")
    const lasteditButton =EditCollection[EditCollection.length-1]
    lasteditButton.addEventListener("click",editTodo);
}






function deleteTodo(eventObject){
    const buttonClick=eventObject.target
    const li=buttonClick.parentNode.parentNode.parentNode
    li.remove();
}

function addListenersToDeleteButtons (){
    const buttonCollection = document.querySelectorAll(".delete_btn")

    const lastButton =buttonCollection[buttonCollection.length-1]
    lastButton.addEventListener("click",deleteTodo);

}





function showTOdoOnTheScreen(todo){
    const listOfTodo=document.querySelector('#todo_list');
    const li=document.createElement('li');
    li.classList.add("todo_section--todoItem")
   
    li.innerHTML=   `<div>
    <input class="todo_checkbox" type="checkbox"/> 
    <span class="todo_text">${todo}</span>
    <div class=" todo_actions--wrapper">
        <button  id="Edit_btn"  class="todo_actions edit_btn">edit</button>
        <button id="Delete_btn" class="todo_actions delete_btn">delete</button>
    </div>
</div>`
listOfTodo.appendChild(li);     
console.log(listOfTodo)
addListenersToDeleteButtons();
addListenersToEditebuttons();

}




function todoformSubmitHandler(eventObject){
    eventObject.preventDefault();
    const inputField=document.querySelector("#input_form");
    const todoValue=inputField.value;
    inputField.value= " "
    
    showTOdoOnTheScreen(todoValue) 
} 



const todoform = document.getElementById('form')
todoform.addEventListener('submit',todoformSubmitHandler)