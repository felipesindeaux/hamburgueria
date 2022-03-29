import Product from "./Product";
import "./styles.css";

const ProductList = ({
  products,
  handleCurrentSale,
  currentSale,
  filteredProducts
}) => (
      <ul className="vitrine">
        {filteredProducts.map((produto) => (
          <Product
            produto={produto}
            key={produto.id}
            handleCurrentSale={handleCurrentSale}
            currentSale={currentSale}
            products={products}
            filteredProducts={filteredProducts}
          />
        ))}
      </ul>
);

export default ProductList;
