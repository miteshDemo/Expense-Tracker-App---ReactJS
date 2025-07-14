import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Grid, Paper, Typography } from '@mui/material';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(tx => tx.amount);
  const income = amounts.filter(a => a > 0).reduce((acc, val) => acc + val, 0).toFixed(2);
  const expense = (
    amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0) * -1
  ).toFixed(2);

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="subtitle1">Income</Typography>
          <Typography color="green">₹{income}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="subtitle1">Expense</Typography>
          <Typography color="red">₹{expense}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
