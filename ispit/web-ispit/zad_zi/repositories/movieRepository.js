const Movie = require("../models/movie");

class MovieRepository {
  constructor() {
    this.items = [];
    this.seedItems();
  }

  seedItems() {
    this.items.push(new Movie("Inception", "Cristopher Nolan"));
    this.items.push(new Movie("The Matrix", "Lana Wachowski, Lilly Wachowski"));
    this.items.push(new Movie("Interstellar", "Cristopher Nolan"));
  }
}

const repoInstance = new MovieRepository();

module.exports = repoInstance;
