const ProductItem = ({
  products,
  deleteProduct,
  decreaseCount,
  increaseCount,
}) => {
  return (
    <>
      {products.map((product) => (
        <li
          className="product-item"
          key={product.id}
          onDoubleClick={() => deleteProduct(product.id)}
        >
          <ul className="product-item-items">
            <li className="product-item-item">{product.name}</li>
            <li className="product-item-item">Price: {product.price}</li>
            <li className="product-item-item">
              <button
                className="product-item-item-button"
                onClick={() => decreaseCount(product.id)}
              >
                -
              </button>
              {product.count}
              <button
                className="product-item-item-button"
                onClick={() => increaseCount(product.id)}
              >
                +
              </button>
            </li>
          </ul>
        </li>
      ))}
    </>
  );
};

export { ProductItem };
