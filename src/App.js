import React from 'react';

import NewExpense from './components/NewExpense';
import EditPayment from './components/EditPayment';
import NewExpenseOne from "./components/NewExpenseOne";

function App() {
  return (
    <div>
      < NewExpenseOne />
      <NewExpense />
      <EditPayment />

    </div>
  );
}

export default App;
