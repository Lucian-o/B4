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

    // B4.3: Stores ten anime movies with unique IDs in an unsorted order.
const movies = [
    new Movie(105, "Spirited Away", 2001, 10),
    new Movie(110, "A Silent Voice", 2016, 10),
    new Movie(101, "Howl's Moving Castle", 2004, 8),
    new Movie(108, "Akira", 1988, 7),
    new Movie(103, "Castle in the Sky", 1986, 7),
    new Movie(107, "Princess Mononoke", 1997, 8),
    new Movie(104, "Perfect Blue", 1998, 9),
    new Movie(109, "Your Name", 2016, 9),
    new Movie(102, "Weathering with You", 2019, 7),
    new Movie(106, "Garden of words", 2013, 8)
];

// Displays a copy of the array in its original order.
console.log("Initial anime movie array:");
console.table([...movies]);

    // B4.4: Compares firstMovie and secondMovie by their movie IDs.
// Returns their ID difference to determine ascending order.
function compareMovieIds(firstMovie, secondMovie) {
    return firstMovie.movieId - secondMovie.movieId;
}

// Sorts the movie array by ID from smallest to largest.
movies.sort(compareMovieIds);

// Displays a copy of the sorted array.
console.log("Anime movies sorted by ID:");
console.table([...movies]);

    // B4.5: Searches array one movie at a time for movieId.
// Returns the matching movie object.
function sequentialSearchMovies(array, movieId) {
    // Tracks the index of the movie currently being checked.
    for (let index = 0; index < array.length; index++) {
        if (array[index].movieId === movieId) {
            return array[index];
        }
    }

    // Return null if no match exists
    return null;
}

// Searches for an ID that exists in the array.
console.log("Search for ID 108:", sequentialSearchMovies(movies, 108));

// Searches for an ID that does not exist in the array.
console.log("Search for ID 999:", sequentialSearchMovies(movies, 999));