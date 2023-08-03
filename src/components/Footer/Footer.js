import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__bottom-container">
        <p className="footer__year">&copy; 2023</p>
        <nav>
          <ul className="footer__links">
            <li className="footer__link">Яндекс.Практикум</li>
            <li className="footer__link">Github</li>
          </ul>
        </nav>
      </div>
    </footer >
  );
}

export default Footer;
