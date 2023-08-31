// import { useState } from "react";
import './SearchForm.css';
import Checkbox from '../CheckBox/Checkbox';
import { useFormWithValidation } from '../../utils/validate';

function SearchForm({ searchQuery, onChange, handleSearch, isChecked, onCheckboxUpdated }) {
    const { values, handleChange, errors, isValid, setIsValid, resetForm } = useFormWithValidation();

    return (
        <section className='search'>
            <form className='search__form'>
                <div className='search__container'>
                    <div className='search__icon'></div>
                    <input
                        type="text"
                        className="search__field"
                        name="movie"
                        placeholder="Фильм"
                        value={searchQuery}
                        onChange={onChange}
                        required
                    ></input>
                    <button
                        className='search__btn'
                        type="button"
                        onClick={handleSearch}
                    ></button>
                </div>
                <span
                    className={errors.movie
                        ? "search__field-error search__field-error_active"
                        : "search__field-error"
                    }>
                    Нужно ввести ключевое слово
                </span>
            </form>
            <Checkbox isChecked={isChecked} onChange={onCheckboxUpdated} />
        </section>
    );
}

export default SearchForm;
