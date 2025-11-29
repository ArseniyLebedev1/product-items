import { useState } from "react";

const data = [
  { id: 1, name: "Велосипед", price: 1000, count: 1 },
  { id: 2, name: "Самокат", price: 700, count: 1 },
  { id: 3, name: "Ролики", price: 1300, count: 2 },
  { id: 4, name: "Сноуборд", price: 19000, count: 4 },
];

const App = () => {
  const [products, setProducts] = useState(data);

  const addProduct = () => {
    const input = prompt("Добваление товара. Введтите в формате Название Цена");

    if (!input || input.trim() === "") return;

    const parts = input.trim().split(" ");
    const price = Number(parts.pop());
    const name = parts.join(" ");

    if (!name || !price) return alert("Неправильный формат ввода");

    const newItem = {
      id: Date.now(),
      name,
      price,
      count: 1,
    };

    setProducts((prev) => [...prev, newItem]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseCount = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: item.count < 25 ? item.count + 1 : 25 }
          : item
      )
    );
  };

  const decreaseCount = (id) => {
    setProducts((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
            : item
        )
        .filter((item) => item.count !== 0)
    );
  };

  return (
    <div className="content">
      <button className="add-button" onClick={addProduct}>
        Добавить новый товар
      </button>
      <ul className="product-items">
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
      </ul>
    </div>
  );
};

export { App };
