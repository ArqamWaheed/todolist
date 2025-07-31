import { $todoModal, modifyTodoModal } from "./Modal";

const $closeButton = $todoModal.querySelector(".close");
$closeButton.addEventListener('click', function() {
    modifyTodoModal.closeModal();
})
