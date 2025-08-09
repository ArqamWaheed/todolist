import "./styles.css";
import { modifyDisplay} from "./RightPanelDOM.js";
import "./LeftPanelEventListeners.js";
import "./ModalEventListeners.js";
import { modifyTodoModal } from "./Modal.js";
import { modifyProject } from "./projects.js";

const allTodos = [];

function createTodo(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.id = crypto.randomUUID();
}


const modifyTodo = {
    addTodo(TodoName, TodoDesc, dueDate) {
        const todoObj = new createTodo(TodoName, TodoDesc, dueDate);
        let projectName = modifyTodoModal.getSelectedProject();
        allTodos.push(todoObj);
        modifyTodoModal.closeModal();
        modifyTodoModal.resetModal();
        modifyProject.addTodoID(projectName, todoObj.id);
        modifyDisplay.clearDisplay();
        modifyDisplay.renderProject(projectName);
    },

    returnTodoIndex(todoID) { // returns VIA todoID;
        for (let i = 0; i < allTodos.length; i++) {
            if (allTodos[i].id == todoID) {
                return i;
            }
        }
    } 
}

export {allTodos, modifyTodo};