function displayPoem (event) {
    event.preventDefault();
    alert("generating poem");
}


let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", displayPoem)