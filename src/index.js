import "./styles.css";
import { modifyDisplay} from "./RightPanelDOM.js";
import "./LeftPanelEventListeners.js";
import "./ModalEventListeners.js";
import { modifyTodoModal } from "./Modal.js";
import { modifyProject } from "./projects.js";

const allTodos = [];

function createTodo(title, description, dueDate) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.id = crypto.randomUUID();
}


const modifyTodo = {
    addTodo(TodoName, TodoDesc, dueDate) {
        const todoObj = createTodo(TodoName, TodoDesc, dueDate);
        projectName = modifyTodoModal.getSelectedProject();
        allTodos.push(todoObj);
        modifyTodoModal.closeModal();
        modifyProject.addTodoID(projectName, todoObj.id);
        modifyDisplay.renderProject(projectName);
    }
}

export {allTodos};