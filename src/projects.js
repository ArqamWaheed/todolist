import { modifyTodo } from ".";
import { projectInput, renderProjectAdd, validateProjectName } from "./LeftPanelDOM";
import { $projectDropdown, modifyTodoModal } from "./Modal";
import { modifyDisplay } from "./RightPanelDOM";


const allProjects = [];

function createProject(title) {
    this.title = title;
    this.ids = [];
}

const modifyProject = {
    deleteProject(projectName) {
        let index = this.returnProjectIndex(projectName);
        for (const IDs in allProjects[index].ids) {
            modifyTodo.popTodo(IDs);
        }
        allProjects.splice(index, 1);
    },

    addProject(projectName) {
        if (validateProjectName(projectName)) {
            renderProjectAdd(projectName);
            const projectObject = new createProject(projectName);
            allProjects.push(projectObject);
            projectInput.clearInput();
            modifyTodoModal.addToDropdown(projectName);
            modifyDisplay.clearDisplay();
            modifyDisplay.renderProject(projectName);
        }
    },

    addTodoID(projectName, id) {
        let index = this.returnProjectIndex(projectName);
        allProjects[index].ids.push(id);
    },

    returnProjectIndex(projectName) { // Searches the array of allProjects and returns the index
        for (let i = 0; i < allProjects.length; i++) {
            if (allProjects[i].title == projectName) {
                return i;
            }
        }
    }
}

function checkProjectExistance() {
    return !!($projectDropdown.children.length);
}

export {createProject, allProjects, modifyProject, checkProjectExistance}; 