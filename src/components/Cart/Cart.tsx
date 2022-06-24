import CartItem from "components/CartItem";
import { observer } from "mobx-react-lite";
import { cart } from "store/cart";
import "./Cart.scss";

const Cart = () => {
  const { items, updateItem, deleteItem, clearCart } = cart;
  const handleDelete = () => {
    clearCart();
  };
  const itemsArray = Object.values(items);
  const content = itemsArray.length ? (
    itemsArray.map((item) => (
      <CartItem
        key={item.item.id}
        {...item}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    ))
  ) : (
    <span className="message">В корзине пусто</span>
  );
  return (
    <div className="cart">
      {content}
      <div className="buttons">
        <button className="button" onClick={handleDelete}>
          Очистить корзину
        </button>
        <button className="button secondary">Продолжить покупки</button>
      </div>
    </div>
  );
};

export default observer(Cart);
