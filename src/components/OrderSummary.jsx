import React from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook useNavigate

const OrderSummary = ({ cart, total, removeFromCart, clearCart }) => {
  const navigate = useNavigate(); // Inicializamos el hook useNavigate

  const handleConfirmOrder = () => {
    // Redirigir al usuario a la página de confirmación del pedido
    navigate("/order");
  };

  return (
    <div className="order-summary">
      <h3>Resumen del Pedido</h3>
      {cart.length === 0 ? (
        <p>No hay artículos en el carrito.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>${item.price * item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))
      )}
      <h4>Total: ${total}</h4>
      <div className="actions">
        <button onClick={clearCart}>Vaciar Carrito</button>
        <button onClick={handleConfirmOrder}>Confirmar Pedido</button>{" "}
        {/* Redirige a OrderPage */}
      </div>
    </div>
  );
};

export default OrderSummary;
