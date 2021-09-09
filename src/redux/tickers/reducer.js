import { createReducer } from '@reduxjs/toolkit';

import { getTickers } from './actions';

const tickersReducer = createReducer([], {
  [getTickers]: (state, { payload }) => [...state, payload],
});

export default tickersReducer;
