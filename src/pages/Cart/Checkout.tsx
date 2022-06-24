import Cart from "components/Cart";
import Layout from "layout/Layout";
import css from "./Checkout.module.scss";

const Checkout = () => {
  return (
    <Layout>
      <div className={css.checkout}>
        <Cart />
        <div className={css.order}>Order</div>
      </div>
    </Layout>
  );
};

export default Checkout;
