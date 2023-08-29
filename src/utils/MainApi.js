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
    return fetch(`${this._url}/profile`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._getResult);
  }

  // getProfileData() {
  //   return fetch(`${this._url}/profile`, {
  //     method: "GET",
  //     headers: this._headers,
  //   }).then(this._getResult);
  // }

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
  baseUrl: "http://localhost:3000",
  // baseUrl: "https://api.dianaks.nomoredomains.xyz",
  headers: {
    "content-type": "application/json",
  },
});

export default mainApi;