import './Portfolio.css';
import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__head'>Портфолио</h2>
            <nav className='portfolio__container'>
                <ul className='portfolio__links'>
                    <li className='portfolio__item'>
                        <Link className='portfolio__link' to="" target='_blank'>
                            <h3 className='portfolio__link-title'>Статичный сайт</h3>
                            <div className='portfolio__link-icon'></div>
                        </Link>
                    </li>
                    <li className='portfolio__item'>
                        <Link className='portfolio__link' to="" target='_blank'>
                            <h3 className='portfolio__link-title'>Адаптивный сайт</h3>
                            <div className='portfolio__link-icon'></div>
                        </Link>
                    </li>
                    <li className='portfolio__item'>
                        <Link className='portfolio__link' to="" target='_blank'>
                            <h3 className='portfolio__link-title'>Одностраничное приложение</h3>
                            <div className='portfolio__link-icon'></div>
                        </Link>
                    </li>
                </ul >
            </nav >
        </section >
    );
}

export default Portfolio;