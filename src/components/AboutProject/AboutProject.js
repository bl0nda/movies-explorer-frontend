import './AboutProject.css';

function AboutProject() {
    return (
        <section className='about-project' title='aboutproject'>
            <div className='about-project__header'>
                <h2 className='about-project__header-title'>О проекте</h2>
            </div>
            <div className='about-project__description-container'>
                <div className='about-project__item'>
                    <h3 className='about-project__item-title'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__item-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__item'>
                    <h3 className='about-project__item-title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__item-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__duration-container'>
                <div className='about-project__duration'>
                    <div className='about-project-background about-project-background_type_green'>
                        <p className='about-project__item-duration'>1 неделя</p>
                    </div>
                    <p className='about-project__item-subject'>Back-end</p>
                </div>
                <div className='about-project__duration'>
                    <div className='about-project-background about-project-background_type_transparent'>
                        <p className='about-project__item-duration'>4 недели</p>
                    </div>
                    <p className='about-project__item-subject'>Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;