import CartItem from "components/CartItem";
import { observer } from "mobx-react-lite";
import { cart } from "store/cart";
import css from "./Cart.module.scss";
import cn from "classnames";

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
    <span className={css.message}>В корзине пусто</span>
  );
  return (
    <div className={css.cart}>
      {content}
      <div className={css.buttons}>
        <button className={css.button} onClick={handleDelete}>
          Очистить корзину
        </button>
        <button className={cn(css.button, css.secondary)}>
          Продолжить покупки
        </button>
      </div>
    </div>
  );
};

export default observer(Cart);
