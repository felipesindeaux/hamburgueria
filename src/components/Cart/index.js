import "./styles.css";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";

const Cart = ({ currentSale, handleCurrentSale, cartTotal }) => {
  return (
    <div className="cart">
      <div className="cart__header">
        <h3>Carrinho de compras</h3>
      </div>
      {currentSale.length === 0 ? (
        <div className="cart__vazio">
          <h3 className="cart__vazio__h3">Sua sacola está vazia</h3>
          <span className="cart__vazio__span">Adicione itens</span>
        </div>
      ) : (
        <>
          <ul className="cart__cheio">
            {currentSale.map((produto) => {
              const { category, img, name, id } = produto;

              const removerCart = () => {
                const produtoClicado = currentSale.find(
                  (element) => element.id === id
                );
                const produtoClicadoIndex = currentSale.indexOf(produtoClicado);
                currentSale.splice(produtoClicadoIndex, 1);
                handleCurrentSale([...currentSale]);
              };

              return (
                <CartProduct
                  category={category}
                  img={img}
                  name={name}
                  key={id}
                  onClick={removerCart}
                />
              );
            })}
          </ul>
          <CartTotal cartTotal={cartTotal} handleCurrentSale={handleCurrentSale} />
        </>
      )}
    </div>
  );
};

export default Cart;
