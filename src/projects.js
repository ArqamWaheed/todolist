import { renderProject, validateProjectName } from "./LeftPanelDOM";

const allProjects = [];

function createProject(title) {
    this.title = title;
    this.ids = [];
}

const modifyProject = {
    deleteProject(projectName) {

    },

    addProject(projectName) {

        if (validateProjectName(projectName)) {
            renderProject(projectName);
            const projectObject = new createProject(projectName);
            allProjects.push(projectObject);
        }
    }
}

export {createProject, allProjects, modifyProject}; 