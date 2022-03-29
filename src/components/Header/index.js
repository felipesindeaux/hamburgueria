import logo from "../../images/logo.png";
import "./styles.css";
import Button from "../Button";
import { useEffect } from "react";

const Header = ({
  handleFilteredProducts,
  products,
  inputValue,
  handleInputValue,
}) => {
  useEffect(() => {
    filtrarProdutos();
  }, [inputValue]);

  const filtrarProdutos = () => {
    const produtosFiltrados = products.filter(
      (produto) =>
        produto.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        produto.category.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (inputValue === "") {
      handleFilteredProducts([...products]);
    } else {
      handleFilteredProducts(produtosFiltrados);
    }
  };

  return (
    <header>
      <div className="limitador">
        <img
          onClick={() => handleInputValue('')}
          src={logo}
          alt="logo"
        ></img>
        <div className="pesquisa">
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(evt) => handleInputValue(evt.target.value)}
          ></input>
          <Button onClick={() => filtrarProdutos()}>Pesquisar</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
