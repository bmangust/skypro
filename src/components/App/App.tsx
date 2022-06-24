import css from "./App.module.scss";
import Catalog from "pages/Catalog";
import Cart from "pages/Cart";

function App() {
  return (
    <div className={css.App}>
      {/* <Cart /> */}
      <Catalog />
    </div>
  );
}

export default App;
