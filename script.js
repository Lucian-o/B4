// Script for B4 - Arrays of movie objects.

    // B4.2: Defines the properties stored by each movie object.
class Movie {
    // Creates a movie using its movieId, title, year and rating.
    constructor(movieId, title, year, rating) {
        // Stores the movie's unique identifier.
        this.movieId = movieId;

        // Store the movie's title, year and rating.
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
}

// Displays the class definition in the console.
console.log("Movie class:", Movie);