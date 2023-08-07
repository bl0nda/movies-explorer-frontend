import "./Profile.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <main className="main">
      <form className="profile" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {formValue.name}!</h2>
        <label className="profile__input-label">Имя
          <input
            type="name"
            className="profile__input profile__input_type_name"
            name="name"
            onChange={handleChange}
            required
          ></input>
        </label>
        <label className="profile__input-label">E-mail
          <input
            type="email"
            className="profile__input profile__input_type_email"
            name="email"
            onChange={handleChange}
            required
          ></input>
        </label>
        <Link className="profile__edit" to="/">Редактировать</Link>
        <Link className="profile__link" to="/sign-in">Выйти из аккаунта</Link>
      </form>
    </main>
  );
}
