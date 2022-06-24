import type { ChangeEvent } from "react";
import { observer } from "mobx-react-lite";
import css from "./CartItem.module.scss";
import { formatPrice } from "utils";
import type { CartItem } from "store/cart";
import type { Item } from "store/catalog";
import { ReactComponent as Chevron } from "assets/icons/chevron.svg";
import cn from "classnames";

interface Props extends Pick<CartItem, "item" | "quantity"> {
  updateItem: (item: Item, quantity: number) => void;
  deleteItem: (item: Item) => void;
}

const CatalogItem = ({ item, quantity, updateItem, deleteItem }: Props) => {
  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateItem(item, +e.currentTarget.value);
  };

  const handleDeleteItem = () => {
    deleteItem(item);
  };

  const handleAdd = () => {
    updateItem(item, quantity + 1);
  };

  const handleSubtract = () => {
    updateItem(item, quantity - 1);
  };

  return (
    <div className={css.item}>
      <img className={css.img} src={item.img} alt={`${item.title}`} />
      <div className={css.wrapper}>
        <span className={css.title}>{item.title}</span>
        <p className={css.description}>{item.description}</p>
        <span className={css.price}>{formatPrice(item.price)} руб.</span>
        <div className={css.links}>
          <button className={css.link}>Избранные</button>
          <button className={css.link} onClick={handleDeleteItem}>
            Удалить
          </button>
        </div>
        <div className={css.input}>
          <input
            value={quantity}
            onChange={handleQuantityChange}
            type="number"
          />
          <div className={css.buttons}>
            <button className={css.icon} onClick={handleAdd}>
              <Chevron />
            </button>
            <button className={css.icon} onClick={handleSubtract}>
              <Chevron className={css.flip} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(CatalogItem);
