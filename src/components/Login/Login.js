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
      <form className="form-welcome" onSubmit={handleSubmit}>
        <h2 className="form-welcome__title">Рады видеть!</h2>
        <label className="form-welcome__input-label">E-mail</label>
        <input
          type="email"
          className="form-welcome__input form-welcome__input_type_email"
          name="email"
          onChange={handleChange}
          required
        ></input>
        <label className="form-welcome__input-label">Пароль</label>
        <input
          type="password"
          className="form-welcome__input form-welcome__input_type_password"
          name="password"
          onChange={handleChange}
          required
        ></input>
        <button type="submit" className="form-welcome__button">
          Войти
        </button>
        <p className="form-welcome__link-text">Ещё не зарегистрированы? <Link className="form-welcome__link" to="/sign-up">Регистрация</Link></p>
      </form>
    </main>
  );
}
