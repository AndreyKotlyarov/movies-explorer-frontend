class MoviesApi {
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

    getMoviesCards() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            headers: this._headers,
        }).then(this._getJson);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co",
    headers: {
        "Content-Type": "application/json",
    },
});

export default moviesApi;