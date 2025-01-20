import useCart from "../hooks/useCart";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1>Tienda Online</h1>
      <div>
        <i className="fas fa-shopping-cart"></i> {/* Ícono de carrito */}
        <p>
          Artículos en el carrito: <span>{totalItems}</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
