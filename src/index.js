import "./styles.css";
import "./EventListeners.js";
import { modifyDisplay} from "./RightPanelDOM.js";

modifyDisplay.renderHomePage();
function createTodo(title, description, dueDate, priority) {
    this.title = (typeof title === "string") ? title : null;
    this.description = (typeof description === "string") ? description : null;
    this.dueDate = (typeof dueDate === "string") ? dueDate : null;
    this.priority = (typeof priority === "string") ? priority : null;
    this.id = crypto.randomUUID();
}


