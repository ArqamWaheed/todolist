import { $leftSidePanel, projectInput } from "./LeftPanelDOM";
import { modifyProject } from "./projects";

const $createProjBtn = $leftSidePanel.querySelector(".createProjectButton");

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