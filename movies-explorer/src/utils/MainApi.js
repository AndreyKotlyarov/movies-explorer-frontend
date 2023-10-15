class MainApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    setToken(token) { this._headers.Authorization = `Bearer ${token}`; }

    register(email, password, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
            }),
        }).then(this._getJson);
    }
    authorize(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then(this._getJson);
    }
    getCurrentUser() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        }).then(this._getJson);
    }

    patchUserData(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                email: email,
            }),
        }).then(this._getJson);
    }
    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            headers: this._headers,
        }).then(this._getJson);
    }

    saveMovie(movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                movieId: movie.id,
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: 'https://api.nomoreparties.co' + movie.image.url,
                trailerLink: movie.trailerLink,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
            }),
        }).then(this._getJson);
    }

    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._getJson);
    };

}

const mainApi = new MainApi({
    baseUrl: "https://api.moviesexplorer.nomoredomains.work",
    headers: {
        "Content-Type": "application/json",
    },
});

export default mainApi;