import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState(() => {
    // Obtener el carrito del localStorage si existe
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sincronizar el carrito con el localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return { cart, addToCart, removeFromCart, clearCart, calculateTotal };
};

export default useCart;
