import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Login({ handleLogin }) {
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
    handleLogin(formValue.email, formValue.password)
  };

  return (
    <main className="main">
      <form className="login" onSubmit={handleSubmit}>
        <Link to="/" className="login__logo"></Link>
        <h1 className="login__title">Рады видеть!</h1>
        <label className="login__input-label">E-mail</label>
        <input
          type="email"
          className="login__input login__input_type_email"
          name="email"
          minLength="2"
          maxLength="30"
          placeholder="email"
          onChange={handleChange}
          required
        ></input>
        <label className="login__input-label">Пароль</label>
        <input
          type="password"
          className="login__input login__input_type_password"
          name="password"
          minLength="8"
          maxLength="30"
          placeholder="Пароль"
          onChange={handleChange}
          required
        ></input>
        <button type="submit" className="login__button">
          Войти
        </button>
        <p className="login__link-text">Ещё не зарегистрированы? <Link className="login__link" to="/signup">Регистрация</Link></p>
      </form>
    </main>
  );
}
