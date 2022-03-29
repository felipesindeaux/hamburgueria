import "./styles.css";

const CartTotal = ({ cartTotal, handleCurrentSale }) => (
  <div className="cart__total">
    <div className="cartTotal__info">
      <span className="cartTotal__total">Total</span>
      <span className="cartTotal__preco__total">R$ {cartTotal.toFixed(2)}</span>
    </div>
    <button onClick={() => handleCurrentSale([])} className="removerTodos">
      Remover todos
    </button>
  </div>
);

export default CartTotal;
