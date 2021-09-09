import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { socketConnect } from '../../redux/tickers/operations';
import Table from '../../components/table';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(socketConnect());
  }, []);

  return (
    <div>
      <Table />
    </div>
  );
};

export default Main;
