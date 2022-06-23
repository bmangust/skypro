import "./Catalog.scss";
import Layout from "layout/Layout";
import CatalogItem from "components/CatalogItem";
import type { Item } from "components/CatalogItem";
import Select from "components/Select";

const items: Item[] = [
  {
    img: "/images/image01.png",
    title: "Кровать TATRAN",
    description:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    price: 120000,
    isFavorite: true,
    date: new Date("2021-12-17T03:24:00").getTime(),
  },
  {
    img: "/images/image02.png",
    title: "Кресло VILORA",
    description:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
    price: 21000,
    date: new Date("2021-06-10T03:24:00").getTime(),
  },
  {
    img: "/images/image03.png",
    title: "Стол MENU",
    description:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    price: 34000,
    date: new Date("2022-02-17T03:24:00").getTime(),
  },
  {
    img: "/images/image04.png",
    title: "Диван ASKESTA",
    description:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    price: 68000,
    date: new Date("2022-04-17T03:24:00").getTime(),
  },
  {
    img: "/images/image05.png",
    title: "Кресло LUNAR",
    description:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    price: 40000,
    date: new Date("2021-01-17T03:24:00").getTime(),
  },
  {
    img: "/images/image06.png",
    title: "Шкаф Nastan",
    description:
      "Мебель может быть оснащена разнообразными системами подсветки.",
    price: 80000,
    date: new Date("2020-09-17T03:24:00").getTime(),
  },
];

const Catalog = () => {
  return (
    <Layout>
      <div className="select-wrapper">
        <Select />
      </div>
      <div className="catalog">
        {items.map((el) => (
          <CatalogItem
            key={el.img}
            img={el.img}
            title={el.title}
            description={el.description}
            price={el.price}
            isFavorite={el.isFavorite}
            date={el.date}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Catalog;
