import React, { useContext } from 'react'

import QuoteContext from "../../context/quote/quoteContext";
import CenterContext from "../../context/center/centerContext";
import ProductContext from "../../context/product/productContext"
import { Link } from 'react-router-dom';

function QuoteReset() {
    const quoteContext = useContext(QuoteContext);
    const { clearQuote } = quoteContext;
  
    const centerContext = useContext(CenterContext);
    const { clearCurrent } = centerContext;
  
    const productContext = useContext(ProductContext);
    const { clearProducts } = productContext;

    const onClick = () => {
        clearQuote()
        
        productContext.clearFilter()
        centerContext.clearFilter()
    
        clearCurrent()
        clearProducts()
    }

    return (
        <div>
            <div className="card">
                <div className="card-content teal-text">Thanks so much for using this app! Click below to reset to the beginning.</div>
                <div className="card-action">
                    <Link to="/">
                        <a href="/" className="red-text" onClick={onClick}>Reset</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default QuoteReset
