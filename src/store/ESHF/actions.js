import { CHECK_ESHF_SUCCESS} from './types';


export const checkESHF = (UNP, FIO, tel, check) => dispatch => {
console.log("enter checkESHF")
  dispatch({
    type: CHECK_ESHF_SUCCESS,
    payload: {
      UNP: UNP,
      FIO: FIO,
      tel: tel,
      check: check
    }
  });
};

