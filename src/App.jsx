import { Container, Paper } from '@mui/material';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Paper elevation={4} sx={{ p: 4 }}>
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </Paper>
      </Container>
    </GlobalProvider>
  );
}

export default App;
