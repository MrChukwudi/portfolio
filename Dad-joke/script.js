const jokeDiv = document.getElementById("joke");
const jokeBtn = document.getElementById("jokebtn");

jokeBtn.addEventListener("click", () => generateJoke());

function generateJoke() {
  let url = "https://icanhazdadjoke.com/";

  const myHeader = {
    headers: { Accept: "application/json" },
  };
  fetch(url, myHeader)
    .then((response) => response.json())
    .then((data) => {
      jokeDiv.innerHTML = data.joke;
    })
    .catch((err) => console.log(err));
}

// <<<<<<<<<<<<<<<<Using the Asynch-await approach instead of .then()>>>>>>>>>>>>>

/*
async function generateJoke(){
  let url = "https://icanhazdadjoke.com/;
  let myHeader = {
    headers: { 'Content-Type': 'application/json}
  }
};

let response = await fetch(url, myHeader) // This automatically sets the result of our fetch call to response.
let data = await response.json(); // This will transfomr our result to a JSON object.
jokeDiv.innerHTML = data.joke;



*/
