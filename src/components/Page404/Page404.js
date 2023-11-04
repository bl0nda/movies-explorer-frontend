import './Page404.css';
import { useNavigate } from "react-router-dom";

function Page404() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }
    return (
        <section className='page-404'>
            <div className='page-404__container'>
                <h1 className='page-404__title'>404</h1>
                <p className='page-404__subtitle'>Страница не найдена</p>
            </div>
            <button onClick={goBack} className='page-404__btn' type='button'>Назад</button>
        </section>
    )
}

export default Page404;