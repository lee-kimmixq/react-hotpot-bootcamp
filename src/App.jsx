import React, { useState } from 'react';

import BillMain from './containers/BillMain.jsx';

export default function App() {
  const [currentBill, setCurrentBill] = useState();

  return (
    <div className="container">
      {!currentBill && <BillMain setCurrentBill={setCurrentBill} />}
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
