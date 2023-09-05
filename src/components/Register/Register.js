import './Register.css';
import { Link } from "react-router-dom";
import { useFormWithValidation } from '../../utils/validate';

export function Register({ handleRegister, error }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values.name, values.email, values.password);
    resetForm();
  };

  return (
    <section className="main">
      <form className="form-welcome" onSubmit={handleSubmit}>
        <Link to="/" className="form-welcome__logo"></Link>
        <h1 className="form-welcome__title">Добро пожаловать!</h1>
        <label className="form-welcome__input-label">Имя</label>
        <input
          type="text"
          className="form-welcome__input form-welcome__input_type_name"
          name="name"
          minLength="2"
          maxLength="40"
          placeholder='Имя'
          pattern='^[a-zA-Zа-яА-я\-]*$'
          value={values.name}
          onChange={handleChange}
          required
        ></input>
        <span className='form-welcome__input-error'>{errors.name}</span>
        <label className="form-welcome__input-label">E-mail</label>
        <input
          type="email"
          className="form-welcome__input form-welcome__input_type_email"
          name="email"
          minLength="2"
          maxLength="30"
          placeholder='email'
          pattern="^[a-zA-Z0-9]([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+){1,}\.([a-zA-Z]+)$"
          value={values.email}
          onChange={handleChange}
          required
        ></input>
        <span className='form-welcome__input-error'>{errors.email}</span>
        <label className="form-welcome__input-label">Пароль</label>
        <input
          type="password"
          className="form-welcome__input form-welcome__input_type_password"
          name="password"
          minLength="8"
          maxLength="30"
          placeholder="Пароль"
          value={values.password}
          onChange={handleChange}
          required
        ></input>
        <span className='form-welcome__input-error form-welcome__input-error_type_password'>{errors.password}</span>
        <p className="form-welcome__err-text">{error}</p>
        <button
          type="submit"
          className="form-welcome__button"
          disabled={!isValid}>
          Зарегистрироваться
        </button>
        <p className="form-welcome__link-text">Уже зарегистрированы? <Link className="form-welcome__link" to="/signin">Войти</Link></p>
      </form>
    </section>
  );
}
