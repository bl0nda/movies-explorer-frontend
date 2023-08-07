import './AboutMe.css';
import photo from "../../images/avatar.jpg";
import { Link } from "react-router-dom";

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__header">
                <h2 className="about-me__header-text">Студент</h2>
            </div>
            <div className="about-me__note">
                <h3 className="about-me__name">Виталий</h3>
                <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
                <p className="about-me__description">Я родился и живу в Саратове,
                    закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку,
                    а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                    После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл
                    с постоянной работы.</p>
                <Link className='about-me__link' to="//github.com/bl0nda" target="_blank">Github</Link>
                <img className="about-me__avatar" alt="Фото" src={photo} />
            </div>
        </section>
    );
}

export default AboutMe;