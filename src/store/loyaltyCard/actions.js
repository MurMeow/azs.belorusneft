import {OPEN_LOYALTY_CARD_SUCCESS} from "./types";
import {CLOSE_LOYALTY_CARD_SUCCESS} from "./types";


export const OpenLoyaltyCard = () => dispatch => {

  dispatch({
    type: OPEN_LOYALTY_CARD_SUCCESS,
  });
};

export const CloseLoyaltyCard = () => dispatch => {

  dispatch({
    type: CLOSE_LOYALTY_CARD_SUCCESS,
  });
};
