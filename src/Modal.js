import { $leftSidePanel, taskInput } from "./LeftPanelDOM";

const $todoModal = document.querySelector("#todoModal");

const modifyTodoModal = {
    openModal() {
        $todoModal.style.display = "block";
    },
    closeModal() {
        $todoModal.style.display = "none";
    },
    setInput() {
        const $modalInput = $todoModal.querySelector("input");
        $modalInput.value = taskInput.getInputName();
    }
}


export {$todoModal, modifyTodoModal};

