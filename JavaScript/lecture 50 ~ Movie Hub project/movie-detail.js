const movieDetail = document.querySelector("#movie-detail");
const params = new URLSearchParams(location.search);
const imdbID = params.get("id");

if (imdbID) {
    searchMovie(imdbID.trim());
} else {
    movieDetail.innerHTML = `<p class="detail-error">No film was selected. Return to the search and choose a title.</p>`;
}

async function searchMovie(id) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=75c6ee86&i=${id}&plot=full`);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovie(data);
        } else {
            movieDetail.innerHTML = `<p class="detail-error">We couldn't find that film. Please return to the search and try another title.</p>`;
        }
    } catch {
        movieDetail.innerHTML = `<p class="detail-error">We couldn't load this film right now. Please check your connection and try again.</p>`;
    }
}

function displayMovie(data) {
    movieDetail.innerHTML = `
        <div class="detail-poster">
            <img src="${data.Poster}" alt="${data.Title} poster">
        </div>
        <div class="detail-content">
            <h1>${data.Title}</h1>
            <section class="movie-meta" aria-label="Film details">
                <p>${data.Released}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <p>IMDb ${data.imdbRating} / 10</p>
            </section>

            <div class="plot-section">
                <p>Plot overview</p>
                <p>${data.Plot}</p>
            </div>

            <div class="credits-grid">
                <section>
                    <p>Director</p>
                    <p>${data.Director}</p>
                </section>
                <section>
                    <p>Writer</p>
                    <p>${data.Writer}</p>
                </section>
            </div>
            <div class="detail-list">
                <p>Actors</p>
                <p>${data.Actors}</p>
            </div>
            <div class="credits-grid credits-grid-bottom">
                <section>
                    <p>Language</p>
                    <p>${data.Language}</p>
                </section>
                <section>
                    <p>Country</p>
                    <p>${data.Country}</p>
                </section>
            </div>

            <a class="imdb-link" href="https://www.imdb.com/title/${data.imdbID}" target="_blank" rel="noopener noreferrer">View on IMDb <span>↗</span></a>
        </div>
    `;
}
