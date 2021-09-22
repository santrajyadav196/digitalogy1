import React from 'react';

import NewExpense from './components/NewExpense';
import EditPayment from './components/EditPayment';
import NewExpenseOne from "./components/NewExpenseOne";
import EditBulkIncome from './components/EditBulkIncome';
import TransactionFilter from './components/TransactionFilter';
import BulkExpenses from './components/BulkExpenses';
import BulkExpensesAdvance from './components/BulkExpensesAdvance';
import BulkExpensesList from './components/BulkExpensesList';

function App() {
  return (
    <div>
      <BulkExpensesList />
      <BulkExpensesAdvance />
      <BulkExpenses />
      <TransactionFilter />
      <EditBulkIncome />
      < NewExpenseOne />
      <NewExpense />
      <EditPayment />
    </div>
  );
}

export default App;
