import { io } from 'socket.io-client';

import { getTickers } from './actions';
import { URL_WS, START_WS, TICKER_WS } from './config';

export const socketConnect = () => dispatch => {
  const socket = io.connect(URL_WS);
  socket.emit(START_WS);
  socket.on(TICKER_WS, function (response) {
    const res = Array.isArray(response) ? response : [response];
    dispatch(getTickers(res));
  });
};
