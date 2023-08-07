import './Promo.css';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <div className='promo__description'>
                    <h2 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h2>
                    <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <button className='promo__btn'>Узнать больше</button>
                </div>
                <div className='promo__logo'></div>
            </div>
        </section>
    );
}

export default Promo;