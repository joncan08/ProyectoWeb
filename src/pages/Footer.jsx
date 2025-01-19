import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Tienda Online. Todos los derechos reservados.</p>
      <p>
        <Link to="/about">Acerca de</Link> | <Link to="/contact">Contacto</Link>
      </p>
    </footer>
  );
};

export default Footer;
