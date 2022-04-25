import React, { useState } from 'react';
import BillForm from './components/BillForm.jsx';
import BillList from './components/BillList.jsx';

export default function App() {
  const [currentBill, setCurrentBill] = useState();

  return (
    <div className="container">
      {!currentBill && (
      <div>
        <BillForm setCurrentBill={setCurrentBill} />
        <BillList setCurrentBill={setCurrentBill} />
      </div>
      )}
      {currentBill && (
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          setCurrentBill();
        }}
      >
        Back
      </button>
      )}
    </div>
  );
}
