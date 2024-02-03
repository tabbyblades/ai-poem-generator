function displayPoem (event) {
    event.preventDefault();

    new Typewriter('#poem', {
        strings: ["blah blah blah"],
        autoStart: true,
        delay: 'natural',
        cursor: null,
      }); }

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", displayPoem)