import { Box, Typography, Button, Paper } from '@mui/material';

export const Transaction = ({ transaction, onDelete }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <Paper
      elevation={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 1,
        mb: 1,
        borderLeft: `5px solid ${transaction.amount < 0 ? 'red' : 'green'}`,
      }}
    >
      <Typography>{transaction.text}</Typography>
      <Typography>
        {sign}₹{Math.abs(transaction.amount)}
      </Typography>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={() => onDelete(transaction.id)}
      >
        x
      </Button>
    </Paper>
  );
};
