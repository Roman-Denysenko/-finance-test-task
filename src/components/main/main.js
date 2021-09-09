import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { socketConnect } from '../../redux/tickers/operations';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(socketConnect());
  }, []);

  return <>Main</>;
};

export default Main;
