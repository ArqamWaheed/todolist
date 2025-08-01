import "./styles.css";
import { modifyDisplay} from "./RightPanelDOM.js";
import "./LeftPanelEventListeners.js";
import "./ModalEventListeners.js";

function createTodo(title, description, dueDate, priority) {
    this.title = (typeof title === "string") ? title : null;
    this.description = (typeof description === "string") ? description : null;
    this.dueDate = (typeof dueDate === "string") ? dueDate : null;
    this.priority = (typeof priority === "string") ? priority : null;
    this.id = crypto.randomUUID();
}


