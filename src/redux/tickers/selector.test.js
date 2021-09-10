import { getTickersSelector } from './selectors';

test('get state', () => {
  const state = [
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
  ];
  const getState = getTickersSelector(state);
  expect(getState.length).toBe(1);
  expect(getState).toEqual(state);
});
