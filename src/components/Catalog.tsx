import React, { useEffect, useState } from "react";
import api from "../services/api";
import { IProduct } from "../store/modules/cart/types";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((res) => {
      setCatalog(res.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(({ id, price, title }) => (
        <article key={id}>
          <strong>{title}</strong>
          {" - "}
          <span>{price}</span>
          {"  "}

          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
