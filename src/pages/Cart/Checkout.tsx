import Layout from "layout/Layout";
import "./Checkout.scss";

const Cart = () => {
  return (
    <Layout>
      <div className="checkout">
        <div className="cart">Cart</div>
        <div className="order">Order</div>
      </div>
    </Layout>
  );
};

export default Cart;
