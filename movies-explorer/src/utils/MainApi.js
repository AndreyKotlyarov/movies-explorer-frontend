class MainApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    register(email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                password: password,
                email: email,
            }),
        }).then(this._getJson);
    }
    authorize(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                password: password,
                email: email,
            }),
        }).then(this._getJson);
    }
    getUserData(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        }).then(this._getJson);
    }
    patchUserData(newData) {
        return fetch(`${this._baseUrl}/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: newData.name,
                about: newData.about,
            }),
        }).then(this._getJson);
    }
}

const mainApi = new MainApi({ baseUrl: "https://api.moviesexplorer.nomoredomains.work" });

export default mainApi;