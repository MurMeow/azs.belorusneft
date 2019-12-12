import {CHECK_ESHF_SUCCESS} from './types';


const initialState = {
  empty: true,
  ESHF:[],
  loading: false,
};

export function ESHF(state = initialState, action) {
  switch (action.type) {


    case CHECK_ESHF_SUCCESS : {

      const newState = {
        ...state,
        empty: false,
        ESHF: [...state.ESHF, action.payload],
        loading: false,
        error: null,
      };
      return newState
    }


    default : {
      return state
    }
  }
}