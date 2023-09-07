class MainApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _getResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  editProfile(data) {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._getResult);
  }

  SaveMovie(data) {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data)
    }).then(this._getResult);
  }

  getSavedMovies() {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._getResult);
  }

  deleteSavedMovie(movieId) {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then(this._getResult);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.dianaks.nomoredomains.xyz",
  headers: {
    "content-type": "application/json",
  },
});

export default mainApi;