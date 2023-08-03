import './Techs.css';

function Techs() {
    return (
        <section className='techs'>
            <div className='techs__header'>
                <h2 className='techs__header-title'>Технологии</h2>
            </div>
            <h3 className='techs__title'>7 технологий</h3>
            <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__container'>
                <li className='techs__obj'>
                    <p className='techs__obj-text'>HTML</p>
                </li>
                <li className='techs__obj'>
                    <p className='techs__obj-text'>CSS</p>
                </li>
                <li className='techs__obj'>
                    <p className='techs__obj-text'>JS</p>
                </li>
                <li className='techs__obj'>
                    <p className='techs__obj-text'>React</p>
                </li>
                <li className='techs__obj'>
                    <p className='techs__obj-text'>Git</p>
                </li>
                <li className='techs__obj'>
                    <p className='techs__obj-text'>Express.js</p>
                </li>
                <li className='techs__obj'>
                    <p className='techs__obj-text'>mongoDB</p>
                </li>
            </ul>
        </section>
    );
}

export default Techs;