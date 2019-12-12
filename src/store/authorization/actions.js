import {AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR,
  OUTIN_SUCCESS} from './types';


export const checkAuthorization = (nickname, userId, counterUsers) => dispatch => {
console.log("enter checkAuthorization")
  dispatch({
    type: AUTHORIZATION_REQUEST
  });
  try {
    dispatch({
      type: AUTHORIZATION_SUCCESS,
      payload: {
        nickname: nickname,
      }
    });
  } catch (err) {
    dispatch({
      type: AUTHORIZATION_ERROR,
      payload: "Sorry, failed to log in!"
    })
  }
};



export const outIn = () => dispatch => {

  dispatch({
    type: OUTIN_SUCCESS,
    payload: {
      authorizationSuccessful: false,
      personalInfo:{
        nickname: '',
        userId: ''
      },
    }
  });
};
