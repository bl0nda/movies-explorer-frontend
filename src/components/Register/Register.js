import './Register.css';
import { useState } from "react";
import { Link } from "react-router-dom";

export function Register({handleRegister}) {
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
        <h2 className="form-welcome__title">Добро пожаловать!</h2>
        <label className="form-welcome__input-label">Имя</label>
          <input
            type="name"
            className="form-welcome__input form-welcome__input_type_name"
            name="name"
            value={formValue.name}
            onChange={handleChange}
            required
          ></input>
        <label className="form-welcome__input-label">E-mail</label>
          <input
            type="email"
            className="form-welcome__input form-welcome__input_type_email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            required
          ></input>
        <label className="form-welcome__input-label">Пароль</label>
          <input
            type="password"
            className="form-welcome__input form-welcome__input_type_password"
            name="password"
            placeholder="Пароль"
            value={formValue.password}
            onChange={handleChange}
            required
          ></input>
          <span className='form-welcome__error'>Что-то пошло не так...</span>
        <button type="submit" className="form-welcome__button">
          Зарегистрироваться
        </button>
        <p className="form-welcome__link-text">Уже зарегистрированы? <Link className="form-welcome__link" to="/sign-in">Войти</Link></p>
      </form>
    </main>
  );
}