import { modifyTodo } from ".";
import { $todoModal, modifyTodoModal } from "./Modal";

const $closeButton = $todoModal.querySelector(".close");
const $addTodoBtn = $todoModal.querySelector(".todoFooterDiv button");

$closeButton.addEventListener('click', function() {
    modifyTodoModal.closeModal();
})

$addTodoBtn.addEventListener('click', function() {
    if (modifyTodoModal.validateModalInput()) {
        const todo = modifyTodoModal.getModalDetails();
        modifyTodo.addTodo(todo.title, todo.description, todo.dueDate);
    } else {
        alert("FILL the title, description, and the dueDate!");
    }

})
