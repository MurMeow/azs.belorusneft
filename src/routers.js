import React, {Fragment} from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './pages/home/home'
import Authorization from './pages/authorization/authorization';
import Eshf from './pages/echf/eshf'
import LoyaltyCard from './pages/loyaltyCard/loyaltyCard'
import StocksContainer from './pages/stocks/stocksContainer'



function Router() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/authorization/" component={Authorization} />
        <Route exact path="/eshf/" component={Eshf} />
        <Route exact path="/loyaltyCard/" component={LoyaltyCard} />
        <Route exact path="/stocks/" component={StocksContainer} />
        <Route exact path="" component={Home} />
      </Switch>
    </Fragment>
  );
}

export default Router;