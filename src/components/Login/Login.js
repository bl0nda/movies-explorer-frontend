import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useFormWithValidation} from '../../utils/validate';

export function Login({ handleLogin }) {
  const { values, handleChange, errors, isValid, resetForm } =
  useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values.email, values.password)
  };

  return (
    <section className="main">
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
        <span className='login__input-error login__input-error_type_email'>{errors.email}</span>
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
        <span className='login__input-error login__input-error_type_password'>{errors.password}</span>
        <button 
        type="submit" 
        className="login__button"
        disabled={!isValid}>
          Войти
        </button>
        <p className="login__link-text">Ещё не зарегистрированы? <Link className="login__link" to="/signup">Регистрация</Link></p>
      </form>
    </section>
  );
}
