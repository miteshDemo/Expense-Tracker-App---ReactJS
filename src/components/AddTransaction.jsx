import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Box, Button, TextField, Typography } from '@mui/material';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return alert('Please enter valid values');

    const newTx = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    addTransaction(newTx);
    setText('');
    setAmount('');
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>Add New Transaction</Typography>
      <TextField
        label="Description"
        fullWidth
        margin="normal"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Amount (e.g. -500 or 1000)"
        type="number"
        fullWidth
        margin="normal"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
        Add Transaction
      </Button>
    </Box>
  );
};
