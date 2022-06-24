import CartItem from "components/CartItem";
import { observer } from "mobx-react-lite";
import { cart } from "store/cart";
import "./Cart.scss";

const Cart = () => {
  const { items } = cart;
  console.log(items);
  return (
    <div className="cart">
      {Object.values(items).map((item) => (
        <CartItem key={item.item.id} {...item} />
      ))}
      <div className="buttons">
        <button className="button">Очистить корзину</button>
        <button className="button secondary">Продолжить покупки</button>
      </div>
    </div>
  );
};

export default observer(Cart);
