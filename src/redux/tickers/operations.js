import { io } from 'socket.io-client';

import { getTickers } from './actions';

const url = 'http://localhost:4000/';

export const socketConnect = () => dispatch => {
  const socket = io(url);

  socket.on('connect', () => {
    console.log(socket);
  });
  // dispatch(getTickers());
};
