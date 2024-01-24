import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <ul className="social-media">
          <li>
            <a
              href="https://www.facebook.com/AluraCursosOnline/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/fb.png`}
                alt="Logo do facebook"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/AluraOnline/status/1420076214803382277"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/tw.png`}
                alt="Logo do Twitter"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/aluraonline/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/ig.png`}
                alt="Logo do Instagram"
              />
            </a>
          </li>
        </ul>
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Logo Organo"
          />
        </div>
        <div className="developerBy">
          <h5>Desenvolvido por Alura.</h5>
        </div>
      </section>
    </footer>
  );
};

export default Rodape;
