import './Register.css';
import { useState } from "react";
import { Link } from "react-router-dom";

export function Register({ handleRegister }) {
  const [formValue, setFormValue] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
    password: "",
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
    handleRegister(formValue.name, formValue.email, formValue.password);
  };

  return (
    <main className="main">
      <form className="form-welcome" onSubmit={handleSubmit}>
        <div className="form-welcome__logo"></div>
        <h1 className="form-welcome__title">Добро пожаловать!</h1>
        <label className="form-welcome__input-label">Имя</label>
        <input
          type="name"
          className="form-welcome__input form-welcome__input_type_name"
          name="name"
          minLength="2"
          maxLength="40"
          value={formValue.name}
          onChange={handleChange}
          required
        ></input>
        <label className="form-welcome__input-label">E-mail</label>
        <input
          type="email"
          className="form-welcome__input form-welcome__input_type_email"
          name="email"
          minLength="2"
          maxLength="30"
          value={formValue.email}
          onChange={handleChange}
          required
        ></input>
        <label className="form-welcome__input-label">Пароль</label>
        <input
          type="password"
          className="form-welcome__input form-welcome__input_type_password"
          name="password"
          minLength="8"
          maxLength="30"
          placeholder="Пароль"
          value={formValue.password}
          onChange={handleChange}
          required
        ></input>
        <span className='form-welcome__error'>Что-то пошло не так...</span>
        <button type="submit" className="form-welcome__button">
          Зарегистрироваться
        </button>
        <p className="form-welcome__link-text">Уже зарегистрированы? <Link className="form-welcome__link" to="/signin">Войти</Link></p>
      </form>
    </main>
  );
}
