import { useState } from "react";
import './SearchForm.css';
import Checkbox from '../CheckBox/Checkbox';

function SearchForm({ searchQuery, onChange, handleSearch, isChecked, onCheckboxUpdated }) {
    const [searchError, setSearchError] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        if (searchQuery === undefined || searchQuery === "") {
            setSearchError('Нужно ввести ключевое слово');
        } else {
            handleSearch(searchQuery);
            setSearchError("");
        }
    }

    return (
        <section className='search'>
            <form className='search__form'
                onSubmit={handleSubmit}
                noValidate>
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
                        type="submit"
                    ></button>
                </div>
            </form>
            <div className="search__span-container">
                <span
                    className="search__field-error">
                    {searchError}
                </span>
            </div>
            <Checkbox isChecked={isChecked} onChange={onCheckboxUpdated} />
        </section>
    );
}

export default SearchForm;
