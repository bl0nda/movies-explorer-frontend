// import { useState } from "react";
import './SearchForm.css';
import Checkbox from '../CheckBox/Checkbox';

function SearchForm({searchQuery, onChange, handleSearch, isChecked, FilterShortsMovies}) {
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
            </form>
            <Checkbox isChecked={isChecked} onChange={FilterShortsMovies} />
        </section>
    );
}

export default SearchForm;
