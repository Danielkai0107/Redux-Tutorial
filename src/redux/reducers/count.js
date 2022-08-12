//reducer 本質是一個函數

import { INCREMENT, DECREMENT } from '../constant';
//推薦初始化
const initState = 0;

export default function count(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;

    default:
      return preState;
  }
}
