const url = "https://api.themoviedb.org/3/movie/popular";
const url2 =
  "https://api.themoviedb.org/4/account/'645b65321b70ae0145eeebf2'/lists?page=1";

const url3 =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cd3df14b3276e3c8587c9a90fff9763c&page=1";


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDNkZjE0YjMyNzZlM2M4NTg3YzlhOTBmZmY5NzYzYyIsInN1YiI6IjY0NWI2NTMyMWI3MGFlMDE0NWVlZWJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QVoADdsI2v2ejf17UiN_RcEizLHnD40xf0ohCggScH8'
    }
  };
  
  fetch(url3, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));