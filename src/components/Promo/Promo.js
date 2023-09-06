import { Link } from "react-scroll";
import './Promo.css';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <div className='promo__description'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <Link to="about-project" smooth={true} className='promo__link'>
                        <p className='promo__link-text'>Узнать больше</p>
                    </Link>
                </div>
                <div className='promo__logo'></div>
            </div>
        </section>
    );
}

export default Promo;