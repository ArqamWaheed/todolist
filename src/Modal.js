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
        resetModal() {
            const $modalInput = $todoModal.querySelector("input");
            const $modalInputDesc = $todoModal.querySelector(".modalInputDesc");
            const $modalDueDate = $todoModal.querySelector("#dueDate");
            $modalInput.value = null;
            $modalInputDesc.value = null;
            $modalDueDate.value = null;
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
        },
        deleteFromDropdown(projectName) {
            for (const child of $projectDropdown.children) {
                if (child.textContent == projectName) {
                    $projectDropdown.removeChild(child);
                }
            }
        },
        getSelectedProject() {
            return $projectDropdown.value;
        },

        getModalDetails() {
            const $modalInput = $todoModal.querySelector("input");
            const $modalInputDesc = $todoModal.querySelector(".modalInputDesc");
            const $modalDueDate = $todoModal.querySelector("#dueDate");
            let title = $modalInput.value;
            let description = $modalInputDesc.value;
            let dueDate = $modalDueDate.value;
            return {title, description, dueDate};
        },

        validateModalInput() {
            const $titleInput = document.querySelector('.modalInputTask');
            const $descriptionInput = document.querySelector('.modalInputDesc');
            const $dateInput = document.querySelector("#dueDate");
            if ($titleInput.value && $descriptionInput.value && $dateInput.value) {
                return true;
            }
            return false;
        }
    }


    export {$todoModal, modifyTodoModal, $projectDropdown};

