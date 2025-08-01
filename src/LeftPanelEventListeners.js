import { $leftSidePanel, projectInput, taskInput } from "./LeftPanelDOM";
import { modifyTodoModal } from "./Modal";
import { checkProjectExistance, modifyProject } from "./projects";

const $createProjBtn = $leftSidePanel.querySelector(".createProjectButton");
const $createTaskBtn = $leftSidePanel.querySelector(".createTaskButton");

$createTaskBtn.addEventListener('click', function() {
    console.log(checkProjectExistance());
    if (checkProjectExistance()) {
        modifyTodoModal.openModal();
        modifyTodoModal.setInput();
        taskInput.clearInput();
    } else {
        alert("Must create a project first!");
        taskInput.clearInput();
    }
})

$createProjBtn.addEventListener('click', function() {
    modifyProject.addProject(projectInput.getInputName());
});

$leftSidePanel.addEventListener('click', function(e) { 
    if (e.target.classList.contains("deleteProjectBtn")) {
        const projectName = e.target.parentNode.querySelector("p").textContent;
        modifyProject.deleteProject(projectName); // removing from the array
        e.target.parentNode.remove();  // removing from the dom tree
    }
})