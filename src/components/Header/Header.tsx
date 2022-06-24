import css from "./Header.module.scss";
import { ReactComponent as GridIcon } from "assets/icons/grid.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart2.svg";
import Link from "components/Link";

const Header = () => {
  return (
    <div className={css.header}>
      <h1 className={css.h1}>Интерьер.</h1>
      <Link className={css.icon} href="#">
        <GridIcon />
      </Link>
      <Link className={css.icon} href="#">
        <CartIcon />
      </Link>
      <Link className={css.link} href="#">
        Каталог
      </Link>
      <Link className={css.link} href="#">
        Корзина
      </Link>
    </div>
  );
};

export default Header;
