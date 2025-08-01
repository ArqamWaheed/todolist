import { $leftSidePanel, taskInput } from "./LeftPanelDOM";

const $todoModal = document.querySelector("#todoModal");
const $projectDropdown = $todoModal.querySelector("#projectselect");


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
    },
    addToDropdown(projectName) {
        const $option = document.createElement("option");
        $option.style.value = projectName;
        $option.textContent = projectName;
        $projectDropdown.appendChild($option);
    }
}


export {$todoModal, modifyTodoModal, $projectDropdown};

