import { $leftSidePanel, projectInput, taskInput } from "./LeftPanelDOM";
import { modifyTodoModal } from "./Modal";
import { modifyDisplay } from "./RightPanelDOM";
import { checkProjectExistance, modifyProject } from "./projects";

const $createProjBtn = $leftSidePanel.querySelector(".createProjectButton");
const $createTaskBtn = $leftSidePanel.querySelector(".createTaskButton");
const $homeBtn = $leftSidePanel.querySelector(".projectHome");
const $projectsPanel = $leftSidePanel.querySelector(".yourProjects");

$createTaskBtn.addEventListener('click', function() { // Create Task 
    if (checkProjectExistance()) {
        modifyTodoModal.openModal();
        modifyTodoModal.setInput();
        taskInput.clearInput();
    } else {
        alert("Must create a project first!");
        taskInput.clearInput();
    }
})

$createProjBtn.addEventListener('click', function() { // Create Project
    modifyProject.addProject(projectInput.getInputName());
});

$leftSidePanel.addEventListener('click', function(e) {  // Delete project
    if (e.target.classList.contains("deleteProjectBtn")) {
        const projectName = e.target.parentNode.querySelector("p").textContent;
        modifyProject.deleteProject(projectName); // removing from the array
        modifyTodoModal.deleteFromDropdown(projectName); //removing from the dropdown
        if (projectName == modifyDisplay.returnActivePage()) { //removing from the display
            modifyDisplay.clearDisplay();
            modifyDisplay.renderHomePage();
        };
        e.target.parentNode.remove();  // removing from the dom tree
    }
})


$projectsPanel.addEventListener('click', function() {
    const $tempDiv = document.querySelector(".projectDiv");
    if ($tempDiv.querySelector("p") != null) { // validate whether there is any p element even, fixes issues with deleting
        const projectName = $tempDiv.querySelector("p").textContent;
        if (modifyDisplay.returnActivePage() != projectName) {
            modifyDisplay.clearDisplay();
            modifyDisplay.renderProject(projectName); 
        }
    }
});

$homeBtn.addEventListener('click', function() {
    modifyDisplay.clearDisplay();
    modifyDisplay.renderHomePage();
})