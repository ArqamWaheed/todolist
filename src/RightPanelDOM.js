import { allTodos, modifyTodo } from ".";
import { allProjects, modifyProject } from "./projects";
import { formatDistance, format } from "date-fns";

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
            for (let todoID in allProjects[index].ids) {
                this.renderTodo(allProjects[index].ids[todoID]);
            }
        } 
    },

    renderTodo(todoID) {
        const index = modifyTodo.returnTodoIndex(todoID);
        const todoName = allTodos[index].title;
        const todoDesc = allTodos[index].description;
        const todoDueDate = allTodos[index].dueDate;
        const $mainDiv = document.createElement("div");
        $mainDiv.classList.add("displayTodoDiv");
        const $contentDiv = document.createElement("div");
        $contentDiv.classList.add("displayTodoContent");
        const $completedCheckbox = document.createElement("input");
        $completedCheckbox.classList.add(todoID);
        $completedCheckbox.type = "checkbox";
        const $p1 = document.createElement("p"); // Todo name
        const $p2 = document.createElement("p"); // Todo description
        const $p3 = document.createElement("p"); // Todo dueDate
        $p1.textContent = todoName;
        $p2.textContent = todoDesc;
        $p3.textContent = `Due Date ${formatDistance(todoDueDate, new Date(), {
            addSuffix: true
          })} | exactly on ${format(todoDueDate, 'MM/dd/yyyy')}`;
        const $hr = document.createElement("hr");
        $rightSidePanel.querySelector(".displayProjectDiv").appendChild($mainDiv);
        $mainDiv.appendChild($completedCheckbox);
        $mainDiv.appendChild($contentDiv);
        $contentDiv.appendChild($p1);
        $contentDiv.appendChild($p2);
        $contentDiv.appendChild($p3);
        $contentDiv.appendChild($hr);
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

export {modifyDisplay, $rightSidePanel};