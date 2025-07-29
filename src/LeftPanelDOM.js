const $leftSidePanel = document.querySelector(".sidebar");
const $yourProjects = $leftSidePanel.querySelector(".yourProjects");
const $projectInputField = $leftSidePanel.querySelector("input");

function renderProjectAdd(projectName) {
    const div = document.createElement("div");
    div.classList.add(`${projectName}`, "projectDiv");
    const divText = document.createElement("p");
    divText.textContent = `${projectName}`;
    const divButton = document.createElement("button");
    divButton.textContent = "X";
    divButton.classList.add("deleteProjectBtn");
    $yourProjects.appendChild(div);
    div.appendChild(divText);
    div.appendChild(divButton);
}

const projectInput = {
    getInputName() {
        return $projectInputField.value;
    },
    clearInput() {
        $projectInputField.value = "";
    }
}

function validateProjectName(name) { // Validating through className, which is the same as the projectName ; pinpoint any collision of class name
    const Divs = $yourProjects.querySelectorAll("div");
    for (const div of Divs) {
        if (div.classList.contains(name)) {
            alert("Error, projects cannot have the same name!");
            return false;
        }
    }
    return true; 
}


export {renderProjectAdd, $leftSidePanel, validateProjectName, projectInput};