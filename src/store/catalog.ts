import { action, makeAutoObservable, runInAction } from "mobx";

export enum SORTING_CRITERIA {
  new,
  cheap,
  expensive,
  popular,
}

export interface Item {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  isFavorite?: boolean;
  date: number;
}

export const defaultItems: Item[] = [
  {
    id: 0,
    img: "./images/image01.png",
    title: "Кровать TATRAN",
    description:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    price: 120000,
    isFavorite: true,
    date: new Date("2021-12-17T03:24:00").getTime(),
  },
  {
    id: 1,
    img: "./images/image02.png",
    title: "Кресло VILORA",
    description:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
    price: 21000,
    date: new Date("2021-06-10T03:24:00").getTime(),
  },
  {
    id: 2,
    img: "./images/image03.png",
    title: "Стол MENU",
    description:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    price: 34000,
    date: new Date("2022-02-17T03:24:00").getTime(),
  },
  {
    id: 3,
    img: "./images/image04.png",
    title: "Диван ASKESTA",
    description:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    price: 68000,
    date: new Date("2022-04-17T03:24:00").getTime(),
  },
  {
    id: 4,
    img: "./images/image05.png",
    title: "Кресло LUNAR",
    description:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    price: 40000,
    date: new Date("2021-01-17T03:24:00").getTime(),
  },
  {
    id: 5,
    img: "./images/image06.png",
    title: "Шкаф Nastan",
    description:
      "Мебель может быть оснащена разнообразными системами подсветки.",
    price: 80000,
    date: new Date("2020-09-17T03:24:00").getTime(),
  },
];

const fetchItems = async () =>
  new Promise<Item[]>((resolve) => {
    setTimeout(() => resolve(defaultItems), 500);
  });

class Catalog {
  items: Item[];
  sortBy: SORTING_CRITERIA;

  constructor() {
    this.items = [];
    this.sortBy = SORTING_CRITERIA.new;
    makeAutoObservable(this);
  }

  loadItems = async () => {
    const items = await fetchItems();
    runInAction(() => {
      this.items = items;
    });
  };

  sort = (by: SORTING_CRITERIA) => {
    this.sortBy = by;
    switch (by) {
      case SORTING_CRITERIA.new:
        this.items.sort((a, b) => a.date - b.date);
        break;
      case SORTING_CRITERIA.cheap:
        this.items.sort((a, b) => a.price - b.price);
        break;
      case SORTING_CRITERIA.expensive:
        this.items.sort((a, b) => b.price - a.price);
        break;
      default:
        this.items.sort((a, b) => a.id - b.id);
    }
  };

  switchFave = (id: number) => {
    const item = this.items.find((el) => el.id === id);
    if (item) item.isFavorite = !item.isFavorite;
  };
}

export const catalog = new Catalog();
