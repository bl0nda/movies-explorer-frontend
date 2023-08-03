import { useState } from "react";

export function Login({handleLogin}) {
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
        <h2 className="form-welcome__title">Вход</h2>
        <label className="form-welcome__input-container">
          <input
            type="email"
            className="form-welcome__input form-welcome__input_type_email"
            name="email"
            placeholder="Email"
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
            onChange={handleChange}
            required
          ></input>
        </label>
        <button type="submit" className="form-welcome__button">
          Войти
        </button>
      </form>
    </main>
  );
}
