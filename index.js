const containerEl = document.querySelector(".container");

const text = ["front-End-Developer", "Back-End-Developer", "FullStack-Developer"];

let textIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    containerEl.innerHTML = `<h1>I ${text[textIndex].slice(0,1) === "F" ? "will be" : "am"} ${text[textIndex].slice(0, characterIndex)}</h1>`;
    characterIndex++;
    if(characterIndex === text[textIndex].length) {
        textIndex++;
        characterIndex = 0
    }

    if(textIndex === text.length) {
        textIndex = 0;
    }
    setTimeout(updateText, 400);
}