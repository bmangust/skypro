import CartItem from "components/CartItem";
import { observer } from "mobx-react-lite";
import { cart } from "store/cart";
import css from "./Cart.module.scss";
import cn from "classnames";
import Link from "components/Link";

interface Props {
  className?: string;
}

const Cart = ({ className }: Props) => {
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
    <div className={cn(css.cart, className)}>
      <div className={css.header}>
        <span className={css.headerItem}>Товар</span>
        <span className={css.headerItem}>К-во</span>
      </div>
      {content}
      <div className={css.buttons}>
        <button className={css.button} onClick={handleDelete}>
          Очистить корзину
        </button>
        <Link href="/" className={cn(css.button, css.secondary)}>
          Продолжить покупки
        </Link>
      </div>
    </div>
  );
};

export default observer(Cart);
