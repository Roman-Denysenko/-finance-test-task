import { createReducer } from '@reduxjs/toolkit';

import { getTickers } from './actions';

const tickersReducer = createReducer(
  [
    {
      ticker: '',
      exchange: '',
      price: '',
      change: '',
      change_percent: '',
      dividend: '',
      yield: '',
      last_trade_time: '',
    },
  ],
  {
    [getTickers]: (_, { payload }) => [...payload],
  },
);

export default tickersReducer;
