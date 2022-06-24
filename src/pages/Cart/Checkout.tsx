import Cart from "components/Cart";
import Layout from "layout/Layout";
import "./Checkout.scss";

const Checkout = () => {
  return (
    <Layout>
      <div className="checkout">
        <Cart />
        <div className="order">Order</div>
      </div>
    </Layout>
  );
};

export default Checkout;
