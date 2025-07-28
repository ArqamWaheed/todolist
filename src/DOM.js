import {createProject, allProjects} from "./projects";
const $leftSidePanel = document.querySelector(".sidebar");
const $displayPanel = document.querySelector(".display");

function renderProject() {
    const $projectNameInput = $leftSidePanel.querySelector("input");

    console.log(validateProjectName($projectNameInput.value))
    if (validateProjectName($projectNameInput.value) != false) {
        const projectName = new createProject($projectNameInput.value);
        const div = document.createElement("div");
        div.classList.add(`${$projectNameInput.value}`);
        $leftSidePanel.appendChild(div);
        allProjects.push(projectName);
    } else {
        alert("Error, project name is already taken!");
    }

}

function validateProjectName(name) { // Validating through className, which is the same as the projectName
    const Divs = $leftSidePanel.querySelectorAll("div");
    for (const div of Divs) {
        if (div.className === name) {
            return false;
        }
    }
    return true; 
}

export {renderProject, $leftSidePanel};