import "./Catalog.scss";
import Layout from "layout/Layout";
import CatalogItem from "components/CatalogItem";
import Select from "components/Select";
import { catalog } from "store/catalog";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Spinner from "components/Spinner";

const Catalog = () => {
  const { items, loadItems } = catalog;

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <Layout>
      <div className="select-wrapper">
        <Select />
      </div>
      <div className="catalog">
        {items.length ? (
          items.map((el) => (
            <CatalogItem
              key={el.id}
              img={el.img}
              title={el.title}
              description={el.description}
              price={el.price}
              isFavorite={el.isFavorite}
              date={el.date}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </Layout>
  );
};

export default observer(Catalog);
