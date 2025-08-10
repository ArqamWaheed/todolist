import { allTodos } from ".";
import storageAvailable from "./checkLocalStorage";
import { allProjects } from "./projects";


if (storageAvailable("localStorage")) {
    if (!localStorage.getItem("todos")) {
        populateStorage();
        console.log("yo");
      } 
    else {
        renderStorage();
    }
} else {
    alert("Your browser does not support localStorage!");
}

function populateStorage() {
    localStorage.setItem("projects", JSON.stringify(allProjects));
    localStorage.setItem("todos", JSON.stringify(allTodos));
}

function renderStorage() {

}