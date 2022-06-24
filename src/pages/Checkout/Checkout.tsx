import Cart from "components/Cart";
import Order from "components/Order";
import Layout from "layout/Layout";
import css from "./Checkout.module.scss";

const Checkout = () => {
  return (
    <Layout>
      <div className={css.checkout}>
        <Cart className={css.cart} />
        <Order className={css.order} />
      </div>
    </Layout>
  );
};

export default Checkout;
