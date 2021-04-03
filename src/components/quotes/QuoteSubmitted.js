import React, { Fragment, useContext } from "react";

import QuoteContext from "../../context/quote/quoteContext";

import QuoteProducts from "./QuoteProducts"

const QuoteSubmitted = () => {
  const quoteContext = useContext(QuoteContext);
  const { center_name, name, email, quote_id } = quoteContext;

  return (
    <Fragment>
      <div className="card-panel white">
        <div className="row">
          <h6 className="teal-text">Patient Info</h6>
        </div>
        <div className="row">
            <div className= "col s2 teal-text">
              Name: <span className="grey-text text-darken-2">{name}</span>
            </div>
            <div className= "col s2 teal-text">
              Email: <span className="grey-text text-darken-2">{email}</span>
            </div>
            <div className= "col s3 teal-text">
              Center: <span className="grey-text text-darken-2">{center_name}</span>
            </div>
            <div className= "col s5 teal-text">
              Reference ID: <span className="grey-text text-darken-2">{quote_id}</span>
            </div>
          </div>
      </div>

      <QuoteProducts />

    </Fragment>
  );
};

export default QuoteSubmitted;
