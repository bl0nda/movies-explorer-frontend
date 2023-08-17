import './SearchForm.css';
import Checkbox from '../CheckBox/Checkbox';

function SearchForm() {
    return (
        <section className='search'>
            <form className='search__form'>
                <div className='search__icon'></div>
                <input
                    type="text"
                    className="search__field"
                    name="movie"
                    placeholder="Фильм"
                    value=""
                    autofocus
                ></input>
                <button
                    className='search__btn'
                    type="submit"
                ></button>
            </form>
            <Checkbox />
        </section>
    );
}

export default SearchForm;
