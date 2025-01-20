import { useState } from "react";
import ProductList from "../components/ProductList";
import useCart from "../hooks/useCart";
import OrderSummary from "../components/OrderSummary";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { cart, addToCart, removeFromCart, clearCart, calculateTotal } =
    useCart(); // Obtenemos el carrito y las funciones de useCart
  const [category, setCategory] = useState("all"); // Estado para la categoría seleccionada

  // Los productos a mostrar (puedes obtenerlos de una API o definirlos estáticamente)
  const products = [
    {
      id: 1,
      category: "electronics",
      name: "Laptop",
      price: 1200,
      image: "./images/laptop.svg",
    },
    {
      id: 2,
      category: "clothing",
      name: "Camisa",
      price: 25,
      image: "./images/tshirt.svg",
    },
    {
      id: 3,
      category: "books",
      name: "Libro de React",
      price: 30,
      image: "./images/libro.svg",
    },
  ];

  // Filtrar productos por categoría
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  // Calcular el total
  const total = calculateTotal();

  return (
    <div>
      {/* Aquí puedes tener el Navbar para cambiar categorías */}
      <Navbar setCategory={setCategory} />

      {/* Mostrar el resumen del pedido si hay productos en el carrito */}
      {cart.length > 0 && (
        <OrderSummary
          cart={cart}
          total={total}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      )}

      {/* Pasamos los productos filtrados a ProductList */}
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
