import { renderProject, $leftSidePanel } from "./DOM";

const $createProjBtn = $leftSidePanel.querySelector(".createProjectButton");

$createProjBtn.addEventListener('click', function() {
    renderProject();
});
