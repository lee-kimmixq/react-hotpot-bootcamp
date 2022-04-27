import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ItemMain({ currentBillId, setCurrentBillId }) {
  const [currentBill, setCurrentBill] = useState({});

  const { name } = currentBill;

  useEffect(() => {
    axios.get(`/bill/${currentBillId}`)
      .then((res) => {
        setCurrentBill(res.data.bill);
      });
  }, []);

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          setCurrentBillId();
        }}
      >
        Back
      </button>
      <h1>{name}</h1>
    </div>
  );
}
