const $leftSidePanel = document.querySelector(".sidebar");

function renderProject(projectName) {
    const div = document.createElement("div");
    div.classList.add(`${projectName}`, "projectDiv");
    const divText = document.createElement("p");
    divText.textContent = `${projectName}`;
    const divButton = document.createElement("button");
    divButton.textContent = "❌";
    $leftSidePanel.appendChild(div);
    div.appendChild(divText);
    div.appendChild(divButton);
}

function validateProjectName(name) { // Validating through className, which is the same as the projectName ; pinpoint any collision of class name
    const Divs = $leftSidePanel.querySelectorAll("div");
    for (const div of Divs) {
        if (div.classList.contains(name)) {
            alert("Error, projects cannot have the same name!");
            return false;
        }
    }
    return true; 
}


export {renderProject, $leftSidePanel, validateProjectName};