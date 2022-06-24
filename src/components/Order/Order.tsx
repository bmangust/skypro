import cn from "classnames";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { cart } from "store/cart";
import { formatPrice } from "utils";
import css from "./Order.module.scss";

interface Props {
  className?: string;
}

const Order = ({ className }: Props) => {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const totalPrice = cart.getTotalPrice();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = () => {
    console.log("ordered:", { ...inputs, totalPrice });
  };
  return (
    <div className={cn(css.order, className)}>
      <h2 className={css.h2}>Оформление заказа</h2>
      <form className={css.form}>
        <input
          className={css.input}
          name="name"
          placeholder="Имя Фамилия"
          onChange={handleChange}
          value={inputs.name}
        />
        <input
          className={css.input}
          name="phone"
          placeholder="Номер телефона"
          onChange={handleChange}
          value={inputs.phone}
        />
        <input
          className={css.input}
          name="address"
          placeholder="Адрес доставки"
          onChange={handleChange}
          value={inputs.address}
        />
      </form>
      <div className="priceWrapper">
        Итого:
        <span className={css.price}>{` ${formatPrice(totalPrice)} руб.`}</span>
      </div>
      <button className={css.submit} onClick={handleSubmit}>
        Оформить заказ
      </button>
    </div>
  );
};

export default observer(Order);
