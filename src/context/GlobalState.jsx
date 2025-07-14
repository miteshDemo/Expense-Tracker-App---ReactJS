import { createContext, useReducer, useEffect } from 'react';

const initialState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || []
};

export const GlobalContext = createContext(initialState);

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TX':
      return { ...state, transactions: [action.payload, ...state.transactions] };
    case 'DELETE_TX':
      return {
        ...state,
        transactions: state.transactions.filter(tx => tx.id !== action.payload)
      };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  function addTransaction(tx) {
    dispatch({ type: 'ADD_TX', payload: tx });
  }

  function deleteTransaction(id) {
    dispatch({ type: 'DELETE_TX', payload: id });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
