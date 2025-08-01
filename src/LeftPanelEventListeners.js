import { $leftSidePanel, projectInput, taskInput } from "./LeftPanelDOM";
import { modifyTodoModal } from "./Modal";
import { modifyDisplay } from "./RightPanelDOM";
import { checkProjectExistance, modifyProject } from "./projects";

const $createProjBtn = $leftSidePanel.querySelector(".createProjectButton");
const $createTaskBtn = $leftSidePanel.querySelector(".createTaskButton");
const $homeBtn = $leftSidePanel.querySelector(".projectHome");


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
        modifyTodoModal.deleteFromDropdown(projectName);
        e.target.parentNode.remove();  // removing from the dom tree
    }
})

$homeBtn.addEventListener('click', function() {
    modifyDisplay.clearDisplay();
    modifyDisplay.renderHomePage();
})