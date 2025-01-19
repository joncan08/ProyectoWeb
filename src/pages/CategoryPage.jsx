import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

const CategoryPage = () => {
  const { category } = useParams();

  // Lista de productos (esto podría venir de una API o de un archivo de datos)
  const products = [
    {
      id: 1,
      category: "electronics",
      name: "Laptop",
      price: 1200,
      image: "laptop.jpg",
    },
    {
      id: 2,
      category: "clothing",
      name: "Camisa",
      price: 25,
      image: "shirt.jpg",
    },
    {
      id: 3,
      category: "books",
      name: "Libro de React",
      price: 30,
      image: "react-book.jpg",
    },
    // Agregar más productos aquí
  ];

  // Filtrar los productos por categoría
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  // Si no hay productos para la categoría, mostrar un mensaje
  if (filteredProducts.length === 0) {
    return <p>No se encontraron productos en esta categoría.</p>;
  }

  return <ProductList products={filteredProducts} />;
};

export default CategoryPage;
