const apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=3e8b38eac68a1c8f02fe6f86d98ec41b&query=matrix&language=pt-BR";

async function chamarApi() {
    const resp = await fetch(apiUrl)
    if (resp.status === 200) {
        const obj = await resp.json()

        card.innerHTML = '';

        obj.results.forEach(function (filmes) {
            const container = document.createElement('div')
            container.classList.add("card-filmes")
            container.innerHTML = `
            <div class = "card">
                <div class="poster">
                    <img src="${filmes.poster_path}" alt="${filmes.title}">
                    <span class="rating-badge">⭐ ${rating}</span>
                </div>
                <div class="inf">
                    <h3 class="movie-title">${filmes.title}</h3>
                    <p class="movie-year">${filmes.release_date}</p>
                </div>
            </div>
            `
            card.appendChild(container);
        })
    }
}
chamarApi()