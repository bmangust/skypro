import "./Header.scss";
import { ReactComponent as GridIcon } from "assets/icons/grid.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart2.svg";
import Link from "components/Link";

const Header = () => {
  return (
    <div className="header">
      <h1 className="h1">Интерьер.</h1>
      <Link className="icon" href="#">
        <GridIcon />
      </Link>
      <Link className="icon" href="#">
        <CartIcon />
      </Link>
      <Link href="#">Каталог</Link>
      <Link href="#">Корзина</Link>
    </div>
  );
};

export default Header;
