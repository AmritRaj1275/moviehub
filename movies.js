// Movie database
const movies = [
    {
        name: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        summary: "A skilled thief leads a team into people's dreams to steal secrets from their subconscious.",
        imdb: "8.8",
        genre: "Sci-Fi",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy", "Marion Cotillard"]
    },
    {
        name: "The Shawshank Redemption",
        poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        summary: "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
        imdb: "9.3",
        genre: "Drama",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"]
    },
    {
        name: "The Dark Knight",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        summary: "Batman must accept one of the greatest psychological and physical tests to fight injustice.",
        imdb: "9.0",
        genre: "Action",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Gary Oldman"]
    },
    {
        name: "Pulp Fiction",
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        summary: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence.",
        imdb: "8.9",
        genre: "Crime",
        cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis", "Ving Rhames"]
    },
    {
        name: "Forrest Gump",
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        summary: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man.",
        imdb: "8.8",
        genre: "Drama",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field", "Mykelti Williamson"]
    },
    {
        name: "The Matrix",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        summary: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
        imdb: "8.7",
        genre: "Sci-Fi",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano"]
    },
    {
        name: "Goodfellas",
        poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        summary: "The story of Henry Hill and his life in the mob, covering his relationship with his wife and his partners.",
        imdb: "8.7",
        genre: "Crime",
        cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci", "Lorraine Bracco", "Paul Sorvino"]
    },
    {
        name: "Interstellar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        summary: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        imdb: "8.6",
        genre: "Sci-Fi",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine", "Matt Damon"]
    },
    {
        name: "The Godfather",
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        summary: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
        imdb: "9.2",
        genre: "Crime",
        cast: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall", "Diane Keaton"]
    },
    {
        name: "The Avengers",
        poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        summary: "Earth's mightiest heroes must come together to stop Loki and his alien army from enslaving humanity.",
        imdb: "8.0",
        genre: "Action",
        cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"]
    },
    {
        name: "Gladiator",
        poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        summary: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
        imdb: "8.5",
        genre: "Action",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed", "Richard Harris"]
    },
    {
        name: "The Hangover",
        poster: "https://image.tmdb.org/t/p/w500/uluhlXhjRvRQFwqdH0SnvLC1rZ5.jpg",
        summary: "Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night.",
        imdb: "7.7",
        genre: "Comedy",
        cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis", "Justin Bartha", "Heather Graham"]
    },
    {
        name: "Superbad",
        poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
        summary: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to party.",
        imdb: "7.6",
        genre: "Comedy",
        cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse", "Bill Hader", "Seth Rogen"]
    },
    {
        name: "Titanic",
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        summary: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious Titanic.",
        imdb: "7.9",
        genre: "Romance",
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates", "Frances Fisher"]
    },
    {
        name: "The Notebook",
        poster: "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg",
        summary: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom.",
        imdb: "7.8",
        genre: "Romance",
        cast: ["Ryan Gosling", "Rachel McAdams", "James Garner", "Gena Rowlands", "Sam Shepard"]
    },
    {
        name: "Parasite",
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        summary: "Greed and class discrimination threaten the newly formed symbiotic relationship between two families.",
        imdb: "8.6",
        genre: "Thriller",
        cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik", "Park So-dam"]
    },
    {
        name: "Get Out",
        poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
        summary: "A young African-American visits his white girlfriend's parents for the weekend and uncovers a sinister secret.",
        imdb: "7.7",
        genre: "Thriller",
        cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford", "Catherine Keener", "Caleb Landry Jones"]
    },
    {
        name: "Toy Story",
        poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        summary: "A cowboy doll is profoundly threatened when a new spaceman figure supplants him as top toy in a boy's room.",
        imdb: "8.3",
        genre: "Animation",
        cast: ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney", "Wallace Shawn"]
    },
    {
        name: "Finding Nemo",
        poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
        summary: "After his son is captured, a timid clownfish sets out on a journey to bring him home.",
        imdb: "8.1",
        genre: "Animation",
        cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould", "Willem Dafoe", "Brad Garrett"]
    },
    {
        name: "Joker",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        summary: "In Gotham City, mentally troubled comedian Arthur Fleck embarks on a downward spiral into revolution.",
        imdb: "8.4",
        genre: "Drama",
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy", "Brett Cullen"]
    },
    {
        name: "Blade Runner 2049",
        poster: "https://image.tmdb.org/t/p/w500/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg",
        summary: "A young blade runner's discovery of a hidden secret leads him to track down former blade runner Rick Deckard.",
        imdb: "8.0",
        genre: "Sci-Fi",
        cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas", "Sylvia Hoeks", "Jared Leto"]
    },
    {
        name: "Mad Max: Fury Road",
        poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
        summary: "In a post-apocalyptic wasteland, Max teams up with a mysterious woman to flee from a warlord and his army.",
        imdb: "8.1",
        genre: "Action",
        cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult", "Hugh Keays-Byrne", "Rosie Huntington-Whiteley"]
    },
    {
        name: "La La Land",
        poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        summary: "A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
        imdb: "8.0",
        genre: "Romance",
        cast: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt", "J.K. Simmons"]
    },
    {
        name: "Spirited Away",
        poster: "https://image.tmdb.org/t/p/w500/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
        summary: "A young girl enters a magical world where spirits, gods, and witches live, and must find a way to free her parents.",
        imdb: "8.6",
        genre: "Animation",
        cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takashi Naito", "Yasuko Sawaguchi"]
    },
    {
        name: "Coco",
        poster: "https://image.tmdb.org/t/p/w500/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
        summary: "A young musician embarks on an extraordinary journey through the Land of the Dead to unlock his family's history.",
        imdb: "8.4",
        genre: "Animation",
        cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt", "Alanna Ubach", "Renée Victor"]
    },
    {
        name: "Whiplash",
        poster: "https://image.tmdb.org/t/p/w500/jCDw2f3cS92XBroCtNn8QlD3DO0.jpg",
        summary: "A promising young drummer enrolls at a cut-throat music conservatory where a ruthless instructor pushes him to the brink.",
        imdb: "8.5",
        genre: "Drama",
        cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser", "Melissa Benoist", "Austin Stowell"]
    },
    {
        name: "Black Panther",
        poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        summary: "T'Challa returns home to Wakanda to take his place as king and faces a powerful challenger.",
        imdb: "7.3",
        genre: "Action",
        cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira", "Martin Freeman"]
    },
    {
        name: "Avengers: Endgame",
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        summary: "The Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        imdb: "8.4",
        genre: "Action",
        cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"]
    },
    {
        name: "Her",
        poster: "https://image.tmdb.org/t/p/w500/yk4J4aewWYNiBhD49WDQpV2pWiT.jpg",
        summary: "A lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
        imdb: "8.0",
        genre: "Sci-Fi",
        cast: ["Joaquin Phoenix", "Scarlett Johansson", "Amy Adams", "Rooney Mara", "Olivia Wilde"]
    },
    {
        name: "The Grand Budapest Hotel",
        poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
        summary: "A legendary concierge teams up with a lobby boy to prove his innocence after being framed for murder.",
        imdb: "8.1",
        genre: "Comedy",
        cast: ["Ralph Fiennes", "Tony Revolori", "F. Murray Abraham", "Saoirse Ronan", "Adrien Brody"]
    }
];

// Get unique genres for filter dropdown
function getGenres() {
    const genres = [...new Set(movies.map(movie => movie.genre))];
    return genres.sort();
}
