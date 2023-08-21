import "./Profile.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from '../Header/Header';

export function Profile({ handleLogin }) {
  const [formValue, setFormValue] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formValue.name, formValue.email)
  };

  return (
    <>
      <Header />
      <main className="main">
        <form className="profile" onSubmit={handleSubmit}>
          <h1 className="profile__title">Привет, {formValue.name}!</h1>
          <label className="profile__input-label">Имя
            <input
              type="text"
              className="profile__input profile__input_type_name"
              name="name"
              minLength="2"
              maxLength="40"
              value={formValue.name}
              placeholder="Имя"
              onChange={handleChange}
              required
              disabled
            ></input>
          </label>
          <label className="profile__input-label">E-mail
            <input
              type="email"
              className="profile__input profile__input_type_email"
              name="email"
              minLength="2"
              maxLength="30"
              value={formValue.email}
              placeholder="email"
              onChange={handleChange}
              required
              disabled
            ></input>
          </label>
          <div className="profile__footer">
            <div className="profile__footer-edit">
              <button type="button" className="profile__edit">Редактировать</button>
              <Link className="profile__link" to="/">Выйти из аккаунта</Link>
            </div>
            <div className="profile__footer-save">
              <span className="profile__err-text">
                При обновлении профиля произошла ошибка.
              </span>
              <button type="button" className="profile__save-btn" disabled>Сохранить</button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
