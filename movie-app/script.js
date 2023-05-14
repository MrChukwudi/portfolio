let form = document.getElementById("form");
let search = document.getElementById("search");
let main = document.getElementById("main");

const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cd3df14b3276e3c8587c9a90fff9763c&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=cd3df14b3276e3c8587c9a90fff9763c&query="';

getMovies(url);

async function getMovies(anyUrl) {
  const res = await fetch(anyUrl);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    let { title, poster_path, vote_average, overview } = movie;

    let movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `

        <img
          src="${IMG_PATH + poster_path}"
          alt=""
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${classOfVote(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
    `;

    main.appendChild(movieElement);
  });
}

function classOfVote(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else if (vote < 5) {
    return "red";
  } else {
    return `Hey This vote was out of range. Please`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let searchTerm = search.value;

  if (searchTerm && searchTerm != "") {
    getMovies(SEARCH_API + searchTerm);
    console.log(searchTerm);
    searchTerm = "";
  } else {
    window.location.reload();
  }
});
