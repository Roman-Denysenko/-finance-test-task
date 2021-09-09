import { configureStore } from '@reduxjs/toolkit';

import tickersReducer from './tickers/reducer';

const store = configureStore({
  reducer: tickersReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
