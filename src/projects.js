import { projectInput, renderProjectAdd, validateProjectName } from "./LeftPanelDOM";

const allProjects = [];

function createProject(title) {
    this.title = title;
    this.ids = [];
}

const modifyProject = {
    deleteProject(projectName) {
        for (let i = 0; i < allProjects.length; i++) {
            if (allProjects[i].title == projectName) {
                allProjects.splice(i, 1);
                break;
            } 
        }
    },

    addProject(projectName) {
        if (validateProjectName(projectName)) {
            renderProjectAdd(projectName);
            const projectObject = new createProject(projectName);
            allProjects.push(projectObject);
            projectInput.clearInput();
        }
    }
}

export {createProject, allProjects, modifyProject}; 