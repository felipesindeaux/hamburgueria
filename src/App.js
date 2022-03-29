import "./reset.css";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const calcularPrecoTotal = () => {
    const total = currentSale.reduce((acc, current) => {
      return acc + current.price;
    }, 0);
    setCartTotal(total);
  };

  const handleFilteredProducts = (value) => {
    setFilteredProducts(value);
  };

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  const handleCurrentSale = (value) => {
    setCurrentSale(value);
  };

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setFilteredProducts(data)
      })
  }, []);

  useEffect(() => {
    calcularPrecoTotal();
    setFilteredProducts([...products]);
    setInputValue('')
  }, [currentSale]);

  useEffect(() => {
    setInputValue(inputValue)
  }, [filteredProducts])

  return (
    <div className="App">
      <Header
        handleFilteredProducts={handleFilteredProducts}
        products={products}
        inputValue={inputValue}
        handleInputValue={handleInputValue}
      />
      {inputValue !== '' && (
        <div className="results">
          Resultados para: <span>{inputValue}</span>
        </div>
      )}
      <div className="container">
        <ProductList
          products={products}
          handleCurrentSale={handleCurrentSale}
          currentSale={currentSale}
          filteredProducts={filteredProducts}
          inputValue={inputValue}
        />
        <Cart
          currentSale={currentSale}
          handleCurrentSale={handleCurrentSale}
          cartTotal={cartTotal}
        />
      </div>
    </div>
  );
}

export default App;
