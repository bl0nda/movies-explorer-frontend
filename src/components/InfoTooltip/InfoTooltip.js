import success from '../../images/success-reg.svg'
import fail from '../../images/err-reg.svg'
import './InfoTooltip.css';

function InfoTooltip(props) {

  return (
    <section
      className={
        "popup popup_type_info" + (props.isOpen ? " popup_opened" : "")
      }
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <img src={props.status ? success : fail} alt={props.status ? "Данные изменены" : "Что-то пошло не так"} className="popup__icon-reg" />
        <h2 className="popup__text-reg">{props.status ? "Данные успешно отредактированы!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
