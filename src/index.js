import "./styles.css";
import { modifyDisplay} from "./RightPanelDOM.js";
import "./LeftPanelEventListeners.js";
import "./ModalEventListeners.js";
import { modifyTodoModal } from "./Modal.js";
import { allProjects, modifyProject } from "./projects.js";
import "./RightPanelEventListeners.js";
import { initializeStorage, populateStorage } from "./localStorage.js";

const allTodos = [];
modifyDisplay.renderHomePage();
initializeStorage(allTodos, allProjects);

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
        populateStorage();
    },

    deleteTodo(todoID) {
        const ID = this.returnTodoIndex(todoID);
        const projectName = modifyDisplay.returnActivePage();
        const projectIndex = modifyProject.returnProjectIndex(projectName);
        allProjects[projectIndex].ids.splice(allProjects[projectIndex].ids.indexOf(ID), 1); // Removes the ID from allProjects 
        allTodos.splice(ID, 1); // Removes the ID from allTodos
        modifyDisplay.clearDisplay();
        modifyDisplay.renderProject(projectName);
        populateStorage();   
    },

    popTodo(todoID) {
        const ID = this.returnTodoIndex(todoID);
        allTodos.splice(ID, 1); // Removes the ID from allTodos
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