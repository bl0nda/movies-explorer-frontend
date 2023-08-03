import './Promo.css';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <h2 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h2>
                <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <div className='promo__logo'></div>
            </div>
            <button className='promo__btn'>Узнать больше</button>
        </section>
    );
}

export default Promo;