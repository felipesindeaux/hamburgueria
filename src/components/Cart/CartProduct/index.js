import "./styles.css";

const CartProduct = ({ category, img, name, onClick }) => (
  <li className="cart__item">
    <div className="cart__item__container">
      <div className="item__img">
        <img src={img} alt={name}></img>
      </div>
      <div className="item__info">
        <h3>{name}</h3>
        <span>{category}</span>
      </div>
    </div>
    <button onClick={() => onClick()}>Remover</button>
  </li>
);

export default CartProduct;
