function displayPoem (event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = `These are your own words
    <br/>
    your way of noticing
    and saying plainly
    <br/>
    of not turning away
    <br/>
    from hurt
    <br/>
    <br/>
    you have offered them 
    <br/>
    to me I am only 
    <br/>
    giving them back 
    <br />
    <br/>
    if only I could show you
    <br/>
    how very useless 
    <br/>
    they are not`;
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", displayPoem)