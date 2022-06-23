import "./CatalogItem.scss";
import { formatPrice } from "utils";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as FaveIcon } from "assets/icons/fav.svg";
import { MouseEvent } from "react";
import cn from "classnames";

export interface Item {
  img: string;
  title: string;
  description: string;
  price: number;
  isFavorite?: boolean;
  date: number;
}

const CatalogItem = ({ img, title, description, price, isFavorite }: Item) => {
  const handleCartClick = (e: MouseEvent) => {
    e.stopPropagation();
    console.log("handleCartClick");
  };
  const handleFaveClick = (e: MouseEvent) => {
    e.stopPropagation();
    console.log("handleFaveClick");
  };

  const getActiveClass = (classes: string): string =>
    isFavorite ? cn(classes, "active") : classes;

  return (
    <div className="item">
      <div className="img-container">
        <img src={img} alt={`${title}`} />
        <div className="icon-container">
          <button className="button icon" onClick={handleCartClick}>
            <CartIcon />
          </button>
          <button
            className={getActiveClass("button icon")}
            onClick={handleFaveClick}
          >
            <FaveIcon />
          </button>
        </div>
      </div>
      <span className="title">{title}</span>
      <p className="description">{description}</p>
      <span className="price">{formatPrice(price)} руб.</span>
    </div>
  );
};

export default CatalogItem;
