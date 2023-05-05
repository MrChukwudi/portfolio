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
      console.log(data);
      jokeDiv.innerHTML = data.joke;
    })
    .catch((err) => console.log(err));
}

