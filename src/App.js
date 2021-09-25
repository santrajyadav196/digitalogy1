import React from 'react';

import NewExpense from './components/NewExpense';
import EditPayment from './components/EditPayment';
import NewExpenseOne from "./components/NewExpenseOne";
import EditBulkIncome from './components/EditBulkIncome';
import TransactionFilter from './components/TransactionFilter';
import BulkExpenses from './components/BulkExpenses';
import BulkExpensesAdvance from './components/BulkExpensesAdvance';
import BulkExpensesList from './components/BulkExpensesList';
import Transaction from './components/Transaction';
import TransactionDetails from './components/TransactionDetails';
import TransactionDetails3dot from './components/TransactionDetails3dot';
import TransactionPayment from './components/TransactionPayment';
import TransactionNotes from './components/TransactionNotes';





function App() {
  return (
    <div>
      <Transaction />
      <NewExpense />
      <NewExpenseOne />
      <EditPayment />
      <TransactionFilter />
      <BulkExpenses />
      <BulkExpensesAdvance />
      <BulkExpensesList />
      <EditBulkIncome />
      <TransactionDetails />
      <TransactionDetails3dot />
      <TransactionPayment />
      <TransactionNotes />
    </div>
  );
}

export default App;
