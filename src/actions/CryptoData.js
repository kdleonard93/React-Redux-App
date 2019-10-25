import axios from "axios";

export const FETCH_CRYPTO_START = "FETCH_CRYPTO_START";
export const FETCH_CRYPTO_SUCCESS = "FETCH_CRYPTO_SUCCESS";
export const FETCH_CRYPTO_ERROR = "FETCH_CRYPTO_ERROR";

export function fetchCrypto(stats) {
  return dispatch => {
    dispatch({ type: FETCH_CRYPTO_START });

    axios
      .get(`https://api.coinlore.com/api/ticker/?${stats}`)
      .then(res => {
        // enter the "success" state
        dispatch({ type: FETCH_CRYPTO_SUCCESS, payload: res.data });
      })
      .catch(err => {
        // enter the "error" state
        dispatch({ type: FETCH_CRYPTO_ERROR, payload: err });
      });
  };
}
