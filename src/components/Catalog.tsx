import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import api from "../services/api";
import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((res) => {
      setCatalog(res.data);
    });
  }, []);

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(({ id, price, title }) => (
        <article key={id}>
          <strong>{title}</strong>
          {" - "}
          <span>{price}</span>
          {"  "}

          <button
            type="button"
            onClick={() => handleAddProductToCart({ id, price, title })}
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
