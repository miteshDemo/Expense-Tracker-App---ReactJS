import { useContext } from 'react';
import { Typography } from '@mui/material';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions.reduce((acc, tx) => acc + tx.amount, 0).toFixed(2);

  return (
    <>
      <Typography variant="h6">Your Balance</Typography>
      <Typography variant="h4" sx={{fontWeight : "bold"}}>₹{total}</Typography>
    </>
  );
};
