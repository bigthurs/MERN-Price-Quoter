import React, { Fragment, useContext, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductContext from "../../context/product/productContext";

const Products = () => {
  const productContext = useContext(ProductContext);

  const { products, filtered, getProducts } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <ul className='collection-with-header'>
        {filtered !== null
          ? filtered.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          : products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
      </ul>
    </Fragment>
  );
};

export default Products;
