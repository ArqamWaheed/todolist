import { allTodos } from ".";
import { renderProjectAdd } from "./LeftPanelDOM";
import storageAvailable from "./checkLocalStorage";
import { allProjects } from "./projects";


function initializeStorage(allTodos, allProjects) {
    if (storageAvailable("localStorage")) {
        if (!localStorage.getItem("todos")) {
            populateStorage(allTodos, allProjects);
        } else {
            renderInitialStorage();
        }
    } else {
        alert("Your browser does not support localStorage!");
    }
}

function populateStorage() {
    localStorage.setItem("projects", JSON.stringify(allProjects));
    localStorage.setItem("todos", JSON.stringify(allTodos));
    renderStorage();
}

function renderStorage() {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    allProjects.splice(0, allProjects.length, ...storedProjects);
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    allTodos.splice(0, allTodos.length, ...storedTodos);
    console.log(allProjects);
    console.log(allTodos);
}

function renderInitialStorage() {
    renderStorage();
    for (const index in allProjects) {
        renderProjectAdd(allProjects[index].title);
    }

}


export {initializeStorage, populateStorage}