import React, { useState } from 'react';
import BillForm from './components/BillForm.jsx';

export default function App() {
  const [currentBill, setCurrentBill] = useState();

  return (
    <div className="container">
      {!currentBill && <BillForm setCurrentBill={setCurrentBill} />}
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
