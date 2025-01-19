// components/OrderPage.jsx

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import OrderSummary from "../components/OrderSummary";
import useCart from "../hooks/useCart"; // Importación correcta

const OrderPage = () => {
  const navigate = useNavigate();
  const { cart, setCart, calculateTotal } = useCart(); // Asegúrate de que setCart se recibe correctamente
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Actualizar el total cada vez que cambie el carrito
    setTotal(calculateTotal());
  }, [cart, calculateTotal]);

  const handlePlaceOrder = () => {
    // Lógica para enviar el pedido (por ejemplo, llamar a una API)
    alert("Pedido Enviado");
    setCart([]); // Vaciar el carrito en el estado
    localStorage.removeItem("cart"); // Eliminar el carrito de localStorage
    navigate("/"); // Redirigir a la página principal después de enviar el pedido
  };

  return (
    <div className="order-page">
      <h1>Resumen del Pedido</h1>
      {/* Pasar el carrito y el total a OrderSummary */}
      <OrderSummary
        cart={cart}
        total={total}
        removeFromCart={() => {}} // No es necesario eliminar productos en esta página
        clearCart={() => {}} // No es necesario vaciar el carrito en esta página
      />
      <button onClick={handlePlaceOrder}>Enviar Pedido</button>
    </div>
  );
};

export default OrderPage;
