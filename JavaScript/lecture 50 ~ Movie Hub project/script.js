const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");
const resultCount = document.querySelector("#resultCount");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

movieForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = movieInput.value.trim();
    if (!query) {
        movieInput.focus();
        return;
    }

    searchMovie(query);
});

async function searchMovie(movieName) {
    movieHub.innerHTML = `<div class="loader" role="status" aria-label="Searching movies"></div>`;
    resultCount.textContent = "Searching";

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=75c6ee86&s=${encodeURIComponent(movieName)}`);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovie(data.Search);
            resultCount.textContent = `${data.Search.length} films found`;
            showResults();
        } else {
            movieHub.innerHTML = `<p>${data.Error}</p>`;
            resultCount.textContent = "No matches";
            showResults();
        }
    } catch {
        movieHub.innerHTML = `<p>We couldn't reach the catalogue. Please check your connection and try again.</p>`;
        resultCount.textContent = "Try again";
        showResults();
    }
}

function showResults() {
    document.querySelector("#discover").scrollIntoView({ behavior: "smooth", block: "start" });
}

function displayMovie(movies) {
    movieHub.innerHTML = "";

    movies.forEach((movie) => {
        const card = document.createElement("article");
        card.dataset.imdbID = movie.imdbID;
        card.className = "movie-card";
        card.tabIndex = 0;
        card.setAttribute("role", "link");
        card.setAttribute("aria-label", `View details for ${movie.Title}`);

        card.innerHTML = `
            <div class="card-poster">
                <img src="${movie.Poster}" alt="${movie.Title} poster">
            </div>
            <div class="card-copy">
                <p>${movie.Title}</p>
                <p>${movie.Year} <span>Film</span></p>
            </div>
        `;
        movieHub.append(card);
    });
}

function openMovieDetail(movieCard) {
    if (!movieCard) return;
    location.href = `moviedetail.html?id=${movieCard.dataset.imdbID}`;
}

movieHub.addEventListener("click", (event) => {
    openMovieDetail(event.target.closest(".movie-card"));
});

movieHub.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMovieDetail(event.target.closest(".movie-card"));
    }
});

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("open", !isOpen);
});

primaryNav.addEventListener("click", (event) => {
    if (!event.target.matches(".nav-link")) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("open");
});
