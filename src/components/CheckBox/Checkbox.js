import './Checkbox.css';

function Checkbox({ isChecked, onChange }) {

    return (
        <div className='checkbox'>
            <label className='checkbox__container'>
                <input
                    type="checkbox"
                    name="movie-filter-checkbox"
                    className='checkbox__element'
                    checked={isChecked}
                    onChange={onChange}
                />
                <span className="checkbox__visible"></span>
            </label>
            <p className='checkbox__text'>Короткометражки</p>
        </div>
    );
}

export default Checkbox;