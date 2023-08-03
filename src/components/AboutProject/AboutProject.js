import './AboutProject.css';

function AboutProject() {
    return (
        <section className='about-project'>
            <div className='about-project__header'>
                <h2 className='about-project__header-title'>О проекте</h2>
            </div>
            <div className='about-project__container'>
                <div className='about-project__item'>
                    <h3 className='about-project__item-title'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__item-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    <div className='about-project__duration'>
                        <span className='about-project-background-span'><p className='about-project__item-duration'>1 неделя</p></span>
                        <p className='about-project__item-subject'>Back-end</p>
                    </div>
                </div>
                <div className='about-project__item'>
                    <h3 className='about-project__item-title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__item-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    <div className='about-project__duration'>
                        <p className='about-project__item-duration'>4 недели</p>
                        <p className='about-project__item-subject'>Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;