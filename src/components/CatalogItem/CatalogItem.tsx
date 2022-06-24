import { MouseEvent } from "react";
import cn from "classnames";
import css from "./CatalogItem.module.scss";
import { formatPrice } from "utils";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as FaveIcon } from "assets/icons/fav.svg";
import { catalog, Item } from "store/catalog";
import { observer } from "mobx-react-lite";
import { cart } from "store/cart";

const CatalogItem = (item: Item) => {
  const { id, img, title, description, price, isFavorite } = item;

  const handleCartClick = (e: MouseEvent) => {
    e.stopPropagation();
    cart.add(item);
  };
  const handleFaveClick = (e: MouseEvent) => {
    e.stopPropagation();
    catalog.switchFave(id);
  };
  const getActiveClass = (classes: string): string =>
    isFavorite ? cn(classes, "active") : classes;

  return (
    <div className={css.item}>
      <div className={css.imgContainer}>
        <img src={img} alt={`${title}`} />
        <div className={css.iconContainer}>
          <button
            className={cn(css.button, css.icon)}
            onClick={handleCartClick}
          >
            <CartIcon />
          </button>
          <button
            className={getActiveClass(cn(css.button, css.icon))}
            onClick={handleFaveClick}
          >
            <FaveIcon />
          </button>
        </div>
      </div>
      <span className={css.title}>{title}</span>
      <p className={css.description}>{description}</p>
      <span className={css.price}>{formatPrice(price)} руб.</span>
    </div>
  );
};

export default observer(CatalogItem);
