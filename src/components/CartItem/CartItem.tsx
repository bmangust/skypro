import type { ChangeEvent } from "react";
import { observer } from "mobx-react-lite";
import "./CartItem.scss";
import { formatPrice } from "utils";
import type { CartItem } from "store/cart";
import Link from "components/Link";

const CatalogItem = ({ item, quantity }: CartItem) => {
  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("handleQuantityChange");
  };

  return (
    <div className="item">
      <img className="img" src={item.img} alt={`${item.title}`} />
      <span className="title">{item.title}</span>
      <p className="description">{item.description}</p>
      <span className="price">{formatPrice(item.price)} руб.</span>
      <div className="links">
        <Link href="#">Избранные</Link>
        <Link href="#">Удалить</Link>
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
