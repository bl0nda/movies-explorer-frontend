import { useState } from "react";
import { Link } from "react-router-dom";
import * as auth from "../utils/auth";

export function Register({handleRegister}) {
  const [formValue, setFormValue] = useState({
    email: "",
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
    handleRegister(formValue.email, formValue.password);
  };

  return (
    <main className="main">
      <form className="form-welcome" onSubmit={handleSubmit}>
        <h2 className="form-welcome__title">Регистрация</h2>
        <label className="form-welcome__input-container">
          <input
            type="email"
            className="form-welcome__input form-welcome__input_type_email"
            name="email"
            placeholder="Email"
            value={formValue.email}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label className="form-welcome__input-container">
          <input
            type="password"
            className="form-welcome__input form-welcome__input_type_password"
            name="password"
            placeholder="Пароль"
            value={formValue.password}
            onChange={handleChange}
            required
          ></input>
        </label>
        <button type="submit" className="form-welcome__button">
          Зарегистрироваться
        </button>
        <p className="form-welcome__link-text">Уже зарегистрированы? <Link className="form-welcome__link" to="/sign-in">Войти</Link></p>
      </form>
    </main>
  );
}
