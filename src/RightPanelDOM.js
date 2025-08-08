import { allProjects, modifyProject } from "./projects";

const $rightSidePanel = document.querySelector(".display"); 

const modifyDisplay = {
    renderHomePage() {
        const $h1 = document.createElement("h1");
        const $h2 = document.createElement("h2");
        $h1.textContent = "✨ Ready to be productive?";
        $h2.textContent = "Select a project or create a new one to get started!";
        $rightSidePanel.appendChild($h1);
        $rightSidePanel.appendChild($h2);
    }, 

    renderProject(projectName) {
        const $mainDiv = document.createElement("div");
        $mainDiv.classList.add("displayProjectDiv");
        const $headerDiv = document.createElement("div");
        $headerDiv.classList.add("displayProjectHeader");
        const $h1 = document.createElement("h1");
        const $h2 = document.createElement("h2");
        $h1.textContent = "Your todo list!";
        $h2.textContent = `Project: ${projectName}`;
        $rightSidePanel.appendChild($mainDiv);
        $mainDiv.appendChild($headerDiv);
        $headerDiv.appendChild($h1);
        $headerDiv.appendChild($h2);
        let index = modifyProject.returnProjectIndex(projectName);
        if (allProjects[index].ids != null) { // Check if has any ToDos to render;
            for (todosID in allProjects[index].ids) {
                this.renderTodo(todosID);
            }
        } 
    },

    renderTodo() {

    },

    returnActivePage() {
        if ($rightSidePanel.querySelector(".displayProjectDiv") == null) {
            return "Home";
        } else {
            const $h2 = $rightSidePanel.querySelector(".displayProjectHeader h2");
            return $h2.textContent.slice(9); // returns projectName
        }
    },

    clearDisplay() {
        $rightSidePanel.replaceChildren();
    },

}

export {modifyDisplay};