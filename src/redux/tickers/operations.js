import { io } from 'socket.io-client';

import { getTickers } from './actions';

const url = 'http://localhost:4000/';

export const socketConnect = () => dispatch => {
  const socket = io.connect(url);
  socket.emit('start');
  socket.on('ticker', function (response) {
    const res = Array.isArray(response) ? response : [response];
    dispatch(getTickers(res));
  });
};
