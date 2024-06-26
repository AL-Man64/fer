const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");

const Movie = require("./models/movie");
const movieRepository = require("./repositories/movieRepository");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get("/", (_, res) => {
  res.render("home");
});

app.get("/movies", (_, res) => {
  res.render("movies", {
    movies: movieRepository.items,
  });
});

app.get("/movies/add", (_, res) => {
  res.render("moviesAdd");
});

app.post("/movies/add", (req, res) => {
  movieRepository.items.push(new Movie(req.body.title, req.body.director));
  res.redirect("/movies");
});

app.post("/movies/delete", (req, res) => {
  movieRepository.items = movieRepository.items.filter(
    (x) => x.title != req.body.title || x.director != req.body.director,
  );
  res.redirect("/movies");
});

// sretno! :)

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
