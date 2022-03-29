import Button from "../../Button";
import "./styles.css";

const Product = ({
  produto,
  handleCurrentSale,
  currentSale,
  products
}) => {
  const { category, img, name, price, id } = produto;

  const addCart = () => {
    const produtoClicado = products.find((element) => element.id === id);

    if (!currentSale.includes(produtoClicado)) {
      handleCurrentSale([...currentSale, produtoClicado]);
    }
  };

  return (
    <li className="vitrine__produto">
      <div className="imagem">
        <img src={img} alt={name}></img>
      </div>
      <h3>{name}</h3>
      <span className="categoria">{category}</span>
      <span className="preco">{`R$ ${price.toFixed(2)}`}</span>
      <Button onClick={() => addCart()}>Adicionar</Button>
    </li>
  );
};

export default Product;
