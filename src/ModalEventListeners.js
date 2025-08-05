import { $todoModal, modifyTodoModal } from "./Modal";

const $closeButton = $todoModal.querySelector(".close");
const $addTodoBtn = $todoModal.querySelector(".todoFooterDiv button");

$closeButton.addEventListener('click', function() {
    modifyTodoModal.closeModal();
})

$addTodoBtn.addEventListener('click', function() {
    
})
