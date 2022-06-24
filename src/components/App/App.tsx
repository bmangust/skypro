import css from "./App.module.scss";
import Catalog from "pages/Catalog";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className={css.App}>
      <Checkout />
      {/* <Catalog /> */}
    </div>
  );
}

export default App;
