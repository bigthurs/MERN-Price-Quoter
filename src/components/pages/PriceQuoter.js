import React, { Fragment, useContext, useRef, useEffect } from "react";

import CenterContext from "../../context/center/centerContext";
import QuoteContext from "../../context/quote/quoteContext";
import ProductContext from "../../context/product/productContext";

import ProductFilter from "../products/ProductFilter";
import Products from "../products/Products";
import CenterFilter from "../centers/CenterFilter";
import Centers from "../centers/Centers";
import QuotePrintable from "../quotes/QuotePrintable"
import QuoteReset from "../quotes/QuoteReset"
import CartCheckoutModal from "../cart/CheckoutModal";
import CartBtn from "../cart/CartBtn";
import ReactToPrint from 'react-to-print';

const PriceQuoter = (props) => {
  const componentRef = useRef();

  const centerContext = useContext(CenterContext)
  const { current, setCurrent, clearCurrent, centers } = centerContext

  const productContext = useContext(ProductContext)
  const { clearProducts } = productContext

  const quoteContext = useContext(QuoteContext);
  const { clearQuote } = quoteContext
  const submitted = quoteContext ? quoteContext.submitted : false;

  useEffect(() => {
    if (props.match.params.center_id) {
      const currentCenter = centers.filter((center) => center._id === props.match.params.center_id)[0]
      setCurrent(currentCenter)
    }
    else {
      clearProducts()
      clearCurrent()
      clearQuote()
        
      productContext.clearFilter()
      centerContext.clearFilter()
    }
  }, [props.match.params, centers])

  return (
    <Fragment>
      <CartBtn />
      <CartCheckoutModal />
      {submitted === true ? (
        <div>
          <QuotePrintable ref={componentRef}/>
          <ReactToPrint 
            trigger={() => <a className='modal-close waves-effect btn btn-primary text-white'><span className="text-light">Print this out!</span></a>}
            content={() => componentRef.current}
          />
          <QuoteReset />
        </div>
      ) : ( current === null ? (
          <div>
            <CenterFilter /> <Centers />
          </div>
        ) : (
          <div>
            <ProductFilter /> <Products />
          </div>
        )
      )        
    }
    </Fragment>
  );
};

export default PriceQuoter;
