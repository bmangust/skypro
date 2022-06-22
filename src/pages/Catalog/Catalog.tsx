import Layout from "layout/Layout";
import CatalogItem from "components/CatalogItem";
import { Item } from "components/CatalogItem/CatalogItem";
import "./Catalog.scss";

const items: Item[] = [
  {
    img: "/images/image01.png",
    title: "Кровать TATRAN",
    description:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    price: 120000,
    isFavorite: true,
  },
  {
    img: "/images/image02.png",
    title: "Кресло VILORA",
    description:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
    price: 21000,
  },
  {
    img: "/images/image03.png",
    title: "Стол MENU",
    description:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    price: 34000,
  },
  {
    img: "/images/image04.png",
    title: "Диван ASKESTA",
    description:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    price: 68000,
  },
  {
    img: "/images/image05.png",
    title: "Кресло LUNAR",
    description:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    price: 40000,
  },
  {
    img: "/images/image06.png",
    title: "Шкаф Nastan",
    description:
      "Мебель может быть оснащена разнообразными системами подсветки.",
    price: 80000,
  },
];

const Catalog = () => {
  return (
    <Layout>
      <div className="catalog">
        {items.map((el) => (
          <CatalogItem
            img={el.img}
            title={el.title}
            description={el.description}
            price={el.price}
            isFavorite={el.isFavorite}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Catalog;
