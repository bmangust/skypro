import type { ChangeEvent } from "react";
import { observer } from "mobx-react-lite";
import "./CartItem.scss";
import { formatPrice } from "utils";
import type { CartItem } from "store/cart";
import type { Item } from "store/catalog";

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

  return (
    <div className="item">
      <img className="img" src={item.img} alt={`${item.title}`} />
      <span className="title">{item.title}</span>
      <p className="description">{item.description}</p>
      <span className="price">{formatPrice(item.price)} руб.</span>
      <div className="links">
        <button className="link">Избранные</button>
        <button className="link" onClick={handleDeleteItem}>
          Удалить
        </button>
      </div>
      <input
        className="input"
        value={quantity}
        onChange={handleQuantityChange}
        type="number"
      />
    </div>
  );
};

export default observer(CatalogItem);
