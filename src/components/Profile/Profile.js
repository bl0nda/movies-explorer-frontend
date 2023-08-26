import "./Profile.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import { useFormWithValidation } from "../../utils/validate";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function Profile({ loggedIn, onEditProfile, signOut }) {

  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [isModifiedData, setIsModifiedData] = useState(false);

  useEffect(() => {
    resetForm({
      name: currentUser.name,
      email: currentUser.email
    });
  }, [currentUser, setValues])


  useEffect(() => {
    if ((values.name !== currentUser.name) || (values.email !== currentUser.email))
      setIsModifiedData(true);
    else
      setIsModifiedData(false);
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfile({ name:values.name, email:values.email });
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="main">
        <form className="profile" onSubmit={handleSubmit}>
          <h1 className="profile__title">Привет, {values.name}!</h1>
          <label className="profile__input-label">Имя
            <input
              type="text"
              className="profile__input profile__input_type_name"
              name="name"
              minLength="2"
              maxLength="40"
              value={values.name}
              placeholder="Имя"
              onChange={handleChange}
              required
            ></input>
          </label>
          <label className="profile__input-label">E-mail
            <input
              type="email"
              className="profile__input profile__input_type_email"
              name="email"
              minLength="2"
              maxLength="30"
              value={values.email}
              placeholder="email"
              onChange={handleChange}
              required
            ></input>
          </label>
          <div className="profile__footer">
            <div className="profile__footer-edit">
              <button
                type="button"
                className="profile__edit"
                disabled={!isModifiedData}>
                Редактировать
              </button>
              <Link className="profile__link" onClick={signOut} to="/">Выйти из аккаунта</Link>
            </div>
            <div className="profile__footer-save">
              <span className="profile__err-text">
                При обновлении профиля произошла ошибка.
              </span>
              <button type="submit" className="profile__save-btn" disabled>Сохранить</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
