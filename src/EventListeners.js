import { $leftSidePanel } from "./LeftPanelDOM";
import { modifyProject } from "./projects";

const $createProjBtn = $leftSidePanel.querySelector(".createProjectButton");

$createProjBtn.addEventListener('click', function() {
    const $projectNameInput = $leftSidePanel.querySelector("input");
    modifyProject.addProject($projectNameInput.value);
});
