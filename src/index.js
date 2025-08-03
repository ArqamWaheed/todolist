import "./styles.css";
import { modifyDisplay} from "./RightPanelDOM.js";
import "./LeftPanelEventListeners.js";
import "./ModalEventListeners.js";

const allTodos = [];

function createTodo(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.id = crypto.randomUUID();
}


