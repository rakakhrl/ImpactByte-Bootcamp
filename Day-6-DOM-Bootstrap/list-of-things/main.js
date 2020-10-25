const listElement = document.getElementById("list");

let movies = [
  {
    title: "Howl's Moving Castle",
    imgUrl: "./assets/movie.jpg",
    year: "05-09-2004",
    director: "Hayao Miyazaki",
  },
  {
    title: "Movie 2",
    imgUrl: "./assets/movie.jpg",
    year: "12-11-2020",
    director: "Saya",
  },
  {
    title: "Movie 3",
    imgUrl: "./assets/movie.jpg",
    year: "12-11-2020",
    director: "Anda",
  },
];

listElement.innerHTML = movies.map(
  (movie) => `
        <div class="card">
            <img src="${movie.imgUrl}" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${movie.year}</p>
                <p class="card-text">${movie.director}</p>
            </div>
        </div>
`
);
