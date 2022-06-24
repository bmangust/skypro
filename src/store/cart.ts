import { makeAutoObservable } from "mobx";
import { defaultItems, Item } from "./catalog";

export interface CartItem {
  item: Item;
  quantity: number;
}

class Cart {
  items: { [key: number]: CartItem };
  error?: string;
  // лимит может быть свойством Item, тогда реализация проверки чуть поменяется.
  private limits = { min: 1, max: 10 };
  constructor() {
    this.items = {};
    this.add(defaultItems[0]);
    this.add(defaultItems[1]);
    makeAutoObservable(this);
  }

  add = (item: Item) => {
    if (this.items[item.id]?.quantity > this.limits.max) {
      this.error = "Достигнуто максимальное количество";
    } else if (this.items[item.id]) {
      this.items[item.id].quantity += 1;
    } else {
      this.items[item.id] = {
        item,
        quantity: 1,
      };
    }
  };
  subtract = (item: Item) => {
    if (this.items[item.id]?.quantity > 2) {
      this.items[item.id].quantity -= 1;
      if (this.error) delete this.error;
    }
  };

  delete = (item: Item) => {
    if (this.items[item.id]) delete this.items[item.id];
  };
}

export const cart = new Cart();
