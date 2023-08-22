import { useState } from 'react';
import './Checkbox.css';

function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        if (isChecked === false) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    };

    return (
        <div className='checkbox'>
            <label className='checkbox__container'>
                <input
                    type="checkbox"
                    name="movie-filter-checkbox"
                    className='checkbox__element'
                    checked={isChecked}
                    onChange={handleChange}
                />
                <span className="checkbox__visible"></span>
            </label>
            <p className='checkbox__text'>Короткометражки</p>
        </div>
    );
}

export default Checkbox;