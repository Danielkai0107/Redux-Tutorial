import { INCREMENT, DECREMENT } from '../constant';

export const increment = (data) => ({ type: INCREMENT, data });
export const decrement = (data) => ({ type: DECREMENT, data });

//async action 回傳值為函數
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, time);
  };
};
