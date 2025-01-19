import { Link } from "react";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar">
      <a href="#" onClick={() => setCategory("all")}>
        Todos los productos
      </a>
      <a href="#" onClick={() => setCategory("electronics")}>
        Electrónica
      </a>
      <a href="#" onClick={() => setCategory("clothing")}>
        Ropa
      </a>
      <a href="#" onClick={() => setCategory("books")}>
        Libros
      </a>
    </nav>
  );
};

export default Navbar;
