import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DetailsFormContainer from './DetailsFormContainer.jsx';
import DetailsBillContainer from './DetailsBillContainer.jsx';

export default function DetailsMain({ currentBillId, setCurrentBillId }) {
  const [currentBill, setCurrentBill] = useState({});
  const [items, setItems] = useState([]);
  const [personList, setPersonList] = useState([]);

  const { name, total } = currentBill;

  useEffect(() => {
    axios.get(`/bill/${currentBillId}`)
      .then((res) => {
        setCurrentBill(res.data.bill);
      });
  }, []);

  useEffect(() => {
    axios.get(`/bill/${currentBillId}/people`)
      .then((res) => {
        setPersonList(res.data.people);
      });
  }, personList);

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
      <DetailsFormContainer currentBillId={currentBillId} items={items} setItems={setItems} setPersonList={setPersonList} />
      <DetailsBillContainer items={items} setItems={setItems} personList={personList} />
      <h2>
        Total:
        {' '}
        {total}
      </h2>
      <div className="row"><button type="button" className="btn btn-danger">Save Bill</button></div>
    </div>
  );
}
