import React, { useContext, useState } from "react";
import ProductContext from "../../context/product/productContext";

const ProductFilter = () => {
  const productContext = useContext(ProductContext);
  const { filterProducts } = productContext;

  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    filterProducts(e.target.value);
  };

  return (
    <form>
      <input
        value={value}
        type='text'
        placeholder='Search for products...'
        onChange={onChange}
      />
    </form>
  );
};

export default ProductFilter;
