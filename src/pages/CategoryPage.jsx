import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

const CategoryPage = () => {
  const { category } = useParams();

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
