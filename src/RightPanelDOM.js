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

    renderProject() {
        
    },

    clearDisplay() {
        $rightSidePanel.replaceChildren();
    },

}

export {modifyDisplay};