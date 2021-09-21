import React from 'react';

import NewExpense from './components/NewExpense';
import EditPayment from './components/EditPayment';
import NewExpenseOne from "./components/NewExpenseOne";
import EditBulkIncome from './components/EditBulkIncome';

function App() {
  return (
    <div>
      <EditBulkIncome />
      < NewExpenseOne />
      <NewExpense />
      <EditPayment />

    </div>
  );
}

export default App;
