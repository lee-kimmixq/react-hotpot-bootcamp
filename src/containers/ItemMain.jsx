import React from 'react';

export default function BillMain({ setCurrentBill }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          setCurrentBill();
        }}
      >
        Back
      </button>
    </div>
  );
}
