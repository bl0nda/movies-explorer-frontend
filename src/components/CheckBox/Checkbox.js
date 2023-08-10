import './Checkbox.css';

function Checkbox() {
    return (
        <div className='checkbox'>
            <label className='checkbox__container'>
                <input 
                type="checkbox"
                name="movie-filter-checkbox" 
                className='checkbox__element'></input>
                <span className="checkbox__visible"></span>
                Короткометражки
            </label>
        </div>
    );
}

export default Checkbox;