import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {receivedData} from "./receivedData/reducer";
import {Authorization} from "./authorization/reducer";
import {ESHF} from "./ESHF/reducer";
import {Stocks} from "./stocks/reducer";
import {LoyaltyCard} from "./loyaltyCard/reducer";

const reducers = combineReducers({
  LoyaltyCard,
  Stocks,
  ESHF,
  receivedData,
  Authorization
});

const composeEnhancers = composeWithDevTools ({});

const store = createStore(reducers, composeEnhancers(
  applyMiddleware (thunk),
));

export default store;