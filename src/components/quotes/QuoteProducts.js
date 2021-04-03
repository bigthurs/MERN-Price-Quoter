import React, { useContext } from "react";
import QuoteProductItem from "./QuoteProductItem";
import QuoteContext from "../../context/quote/quoteContext";

const QuoteProducts = () => {
  const quoteContext = useContext(QuoteContext);

  const { products, total } = quoteContext;

  return (
      <div>
        <table className="striped">
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Unit Price</th>
            </tr>
            </thead>

            <tbody>
                {products.map((product) => (
                    <QuoteProductItem key={product._id} product={product} />
                ))
                }
            </tbody>

            <tfoot>
                <tr>
                    <td>Total Price</td>
                    <td></td>
                    <td>${total}</td>
                </tr>
            </tfoot>
        </table>
      </div>
  )
};

export default QuoteProducts;
