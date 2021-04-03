import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import PriceQuoter from "./components/pages/PriceQuoter";

import ProductState from "./context/product/ProductState";
import CenterState from "./context/center/CenterState";
import QuoteState from "./context/quote/QuoteState";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <CenterState>
        <ProductState>
          <QuoteState>
            <Router>
              <Fragment>
                <Navbar />
                <div className='container'>
                  <Switch>
                    <Route path={['/:center_id', '/']} component={(routeProps) => <PriceQuoter {...routeProps}/>}  /> 
                  </Switch>
                </div>
              </Fragment>
            </Router>
          </QuoteState>
        </ProductState>
    </CenterState>
  );
};

export default App;
