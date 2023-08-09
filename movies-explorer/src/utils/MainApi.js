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
}

const mainApi = new MainApi({
    baseUrl: "https://api.moviesexplorer.nomoredomains.work",
    headers: {
        "Content-Type": "application/json",
    },
});

export default mainApi;