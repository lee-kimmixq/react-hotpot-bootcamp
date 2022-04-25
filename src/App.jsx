import React, { useState } from 'react';
import BillForm from './components/BillForm.jsx';

export default function App() {
  const [currentBill, setCurrentBill] = useState();

  return (
    <div className="container">
      {!currentBill && <BillForm setCurrentBill={setCurrentBill} />}
    </div>
  );
}
