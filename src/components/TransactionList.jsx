import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
import { Typography } from '@mui/material';

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <Typography variant="h6" sx={{ mt: 3 }}>History</Typography>
      {transactions.map(tx => (
        <Transaction key={tx.id} transaction={tx} onDelete={deleteTransaction} />
      ))}
    </>
  );
};
