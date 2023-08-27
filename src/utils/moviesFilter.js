import { isChecked } from '../components/CheckBox/Checkbox';

function ShortsFilterFilms(data) {
    if (isChecked === true) {
        data.filter((movie) => movie.duration <= 40);
    } else {
        
    }
}