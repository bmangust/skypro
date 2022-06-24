import css from "./App.module.scss";
import Catalog from "pages/Catalog";
import Checkout from "pages/Checkout";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={css.App}>
      <Router>
        <Routes>
          <Route path="/cart" element={<Checkout />} />
          <Route path="/" element={<Catalog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
