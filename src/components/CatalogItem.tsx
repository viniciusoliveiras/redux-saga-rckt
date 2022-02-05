import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface Props {
  product: IProduct;
}

const CatalogItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong>
      {" - "}
      <span>{product.price}</span>
      {"  "}

      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
