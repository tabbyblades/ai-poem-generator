function displayPoem (response) {
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: '2',
        cursor: null,
      }); }


function generatePoem (event) {
    event.preventDefault();

    let poemInput = document.querySelector("#poem-prompt");

let apiKey = "8155of93a73b3d00et993d1e4ab007f6";
let prompt = `tell me a poem about ${poemInput.value} please keep your answer short and maximum 6 lines long. please seperate each line with a <br/>`;
let context = "you are an AI assistant who enjoys short poems from around the world";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemVisible = document.querySelector("#poem");
poemVisible.classList.remove("hidden");
poemVisible.innerHTML = `Generating poem about ${poemInput.value}... `;

axios.get(apiUrl).then(displayPoem); }

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem) 