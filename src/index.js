import "./styles.css";
import { modifyDisplay} from "./RightPanelDOM.js";
import "./LeftPanelEventListeners.js";
import "./ModalEventListeners.js";
import { modifyTodoModal } from "./Modal.js";

const allTodos = [];

function createTodo(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.id = crypto.randomUUID();
}


const modifyTodo = {
    addTodo(TodoName, TodoDesc, dueDate, priority) {
        const todoObj = createTodo(TodoName, TodoDesc, dueDate, priority);
        allTodos.push(todoObj);
        modifyTodoModal.closeModal();
    }
}